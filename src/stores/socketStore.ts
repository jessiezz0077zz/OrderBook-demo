import { defineStore } from 'pinia';
import SocketUtil from '../utils/socketUtil';
import { OrderBookMessage, LastPriceMessage } from '../types';
import { usePriceStore } from './priceStore';
import { useOrderBookStore } from './orderBookStore';

export const useSocketStore = defineStore('socket', () => {
  const priceStore = usePriceStore();
  const orderBookStore = useOrderBookStore();

  const { sendMessage } = SocketUtil(
    'wss://ws.btse.com/ws/oss/futures',
    { op: 'subscribe', args: ['update:BTCPFC'] },
    (message: OrderBookMessage) => orderBookStore.handleOrderBook(message, () => {
      sendMessage({ op: 'unsubscribe', args: ['update:BTCPFC'] });
      sendMessage({ op: 'subscribe', args: ['update:BTCPFC'] });
    }),
  );

  SocketUtil(
    'wss://ws.btse.com/ws/futures',
    { op: 'subscribe', args: ['tradeHistoryApi:BTCPFC'] },
    (message: LastPriceMessage) => priceStore.handlePrice(message),
  );
});
