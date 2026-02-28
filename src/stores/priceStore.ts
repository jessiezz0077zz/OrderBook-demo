import { defineStore } from 'pinia';
import { ref } from 'vue';
import { LastPriceMessage } from '../types';

export const usePriceStore = defineStore('price', () => {
  const currentPrice = ref<number | undefined>(undefined);
  const colorStyle = ref('');
  let lastPrice = 0;

  const handlePrice = (message: LastPriceMessage) => {
    if (!message.data?.[0]) return;
    const price = message.data[0].price;
    colorStyle.value = price === lastPrice ? '' : price > lastPrice ? 'higher' : 'lower';
    currentPrice.value = price;
    lastPrice = price;
  };

  return { currentPrice, colorStyle, handlePrice };
});
