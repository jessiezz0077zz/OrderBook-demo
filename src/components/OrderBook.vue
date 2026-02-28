<script setup lang="ts">
import { storeToRefs } from 'pinia'
import QuoteTable from './QuoteTable.vue';
import { formatPrice } from '../utils/formatHelper';
import { useSocketStore } from '../stores/socketStore';
import { usePriceStore } from '../stores/priceStore';
import { useOrderBookStore } from '../stores/orderBookStore';

useSocketStore();
const { currentPrice, colorStyle } = storeToRefs(usePriceStore());
const { asks, bids } = storeToRefs(useOrderBookStore());
</script>

<template>
  <section class="orderbook">
    <h2 class="orderbook__title">Order Book</h2>
    <QuoteTable showHead quoteType="sell" :quoteData="asks" />
    <p class="orderbook__price" :class="colorStyle">{{ formatPrice(currentPrice) }}
      <font-awesome-icon icon="fa-solid fa-arrow-up" v-if="colorStyle === 'higher'" />
      <font-awesome-icon icon="fa-solid fa-arrow-down" v-if="colorStyle === 'lower'" />
    </p>
    <QuoteTable :showHead="false" quoteType="buy" :quoteData="bids" />
  </section>
</template>

<style scoped lang="scss">
.orderbook {
  background-color: $color-bg-orderbook;
  margin: 50px auto 0 auto;
  width: 100%;
}

.orderbook__title {
  font-size: 16px;
  color: $color-text-light;
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid $color-text-muted;
}

.orderbook__price {
  padding: 5px 0;
  font-size: 14px;
  font-weight: bold;
  color: $color-text-light;
  background-color: $color-bg-price-neutral;
}

.orderbook__price.higher {
  color: $color-buy;
  background-color: $color-bg-buy;
}

.orderbook__price.lower {
  color: $color-sell;
  background-color: $color-bg-sell;
}

@media only screen and (min-width: 375px) {
  .orderbook {
    max-width: 250px;
  }
}
</style>
