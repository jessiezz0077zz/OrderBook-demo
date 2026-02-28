import { defineStore } from 'pinia';
import { ref } from 'vue';
import { OrderBookMessage, OrderBookInfo } from '../types';

export const useOrderBookStore = defineStore('orderBook', () => {
  const asks = ref<OrderBookInfo[]>([]);
  const bids = ref<OrderBookInfo[]>([]);
  let totalAsks: string[][] = [];
  let totalBids: string[][] = [];
  let lastSeqNum = 0;

  const formatOrderBook = (orders?: readonly (readonly string[])[], isAsks = false): OrderBookInfo[] => {
    if (!orders || orders.length === 0) return [];

    const reduceCallback = (prev: OrderBookInfo[], cur: readonly string[]) => {
      const previousTotal = prev.length === 0 ? 0 : prev[prev.length - 1].total;
      prev.push({
        price: cur[0],
        size: cur[1],
        total: Number(previousTotal) + Number(cur[1]),
        percentage: 0,
        orderStyle: (cur[2] === undefined ? 'new' : (cur[2] === 'new' ? '' : cur[2])) as OrderBookInfo['orderStyle'],
      });
      return prev;
    };

    const items = isAsks
      ? orders.reduceRight(reduceCallback, []).reverse()
      : orders.reduce(reduceCallback, []);

    const maxTotal = Math.max(...items.map(item => item.total));
    return items.map(item => ({
      ...item,
      percentage: maxTotal ? (item.total / maxTotal) * 100 : 0,
    }));
  };

  const setOrderBookState = () => {
    asks.value = formatOrderBook(totalAsks.slice(-8), true);
    bids.value = formatOrderBook(totalBids.slice(0, 8));
  };

  const filterZeroOrder = (oldOrders: string[][], newOrders: string[][]) =>
    oldOrders.filter(oldData => {
      const newData = newOrders.find(order => order[0] === oldData[0]);
      return !newData || newData[1] !== '0';
    });

  const modifyOrders = (oldOrders: string[][], newOrders: string[][]) => {
    const removeList: string[] = [];
    const updatedOld = oldOrders.map(oldOrder => {
      const newOrder = newOrders.find(order => order[0] === oldOrder[0]);
      if (newOrder) {
        removeList.push(newOrder[0]);
        oldOrder[2] = Number(oldOrder[1]) > Number(newOrder[1]) ? 'sizeDown'
          : Number(oldOrder[1]) < Number(newOrder[1]) ? 'sizeUp' : '';
        oldOrder[1] = newOrder[1];
      }
      return oldOrder;
    });
    return {
      oldOrders: updatedOld,
      newOrders: newOrders.filter(order => !removeList.includes(order[0])),
    };
  };

  const updateOrderBook = (message: OrderBookMessage) => {
    let newAsks = message.data!.asks;
    let newBids = message.data!.bids;

    totalAsks = filterZeroOrder(totalAsks, newAsks);
    totalBids = filterZeroOrder(totalBids, newBids);

    newAsks = newAsks.filter(ask => ask[1] !== '0');
    newBids = newBids.filter(bid => bid[1] !== '0');

    const { oldOrders: modifiedAsks, newOrders: remainingAsks } = modifyOrders(totalAsks, newAsks);
    totalAsks = [...modifiedAsks, ...remainingAsks].sort((a, b) => Number(b[0]) - Number(a[0]));

    const { oldOrders: modifiedBids, newOrders: remainingBids } = modifyOrders(totalBids, newBids);
    totalBids = [...modifiedBids, ...remainingBids].sort((a, b) => Number(b[0]) - Number(a[0]));
  };

  const handleOrderBook = (message: OrderBookMessage, onResubscribe: () => void) => {
    if (!message.data) return;
    if (message.data.type === 'snapshot') {
      totalBids = message.data.bids;
      totalAsks = message.data.asks;
      lastSeqNum = message.data.seqNum;
    } else if (message.data.type === 'delta') {
      if (message.data.prevSeqNum !== lastSeqNum) {
        onResubscribe();
        return;
      }
      updateOrderBook(message);
      lastSeqNum = message.data.seqNum;
    }
    setOrderBookState();
  };

  return { asks, bids, handleOrderBook };
});
