<script setup lang="ts">
import { OrderBookInfo } from '../types';
import { formatNumber } from '../utils/formatHelper';

interface Props {
  showHead: boolean;
  quoteType: 'buy' | 'sell';
  quoteData?: OrderBookInfo[];
}

defineProps<Props>();
</script>

<template>
  <section class="quotetable" :class="quoteType">
    <table>
      <thead v-if="showHead">
        <tr>
          <th class="quotetable__price" scope="col">Price (USD)</th>
          <th class="quotetable__size" scope="col">Size</th>
          <th class="quotetable__total" scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="item in quoteData" :key="item.price" :class="item.orderStyle">
            <td class="quotetable__price">{{ formatNumber(item.price) }}</td>
            <td class="quotetable__size" :class="item.orderStyle">{{ formatNumber(item.size) }}</td>
            <td class="quotetable__total" :style="{ '--bar-width': `${item.percentage}%` }">{{ formatNumber(item.total) }}</td>
          </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped lang="scss">
.quotetable {
  background-color: $color-bg-orderbook;
  width: 100%;
  padding: 5px 0;
}

table {
  width: 100%;
}

th:first-child, td:first-child {
  padding-left: 20px;
}

th:last-child, td:last-child {
  padding-right: 20px;
}

tr {
  line-height: 20px;
}

tbody > tr:hover {
  background-color: $color-bg-hover;
}

th {
  font-size: 12px;
  font-weight: lighter;
  color: $color-text-muted;
  padding: 5px;
}

td {
  font-size: 14px;
}

.buy td.quotetable__price {
  color: $color-buy;
}

.buy tr.new {
  background-color: transparent;
  animation: buyAnimation 0.3s linear;
}

.sell td.quotetable__price {
  color: $color-sell;
}

.sell tr.new {
  background-color: transparent;
  animation: sellAnimation 0.3s linear;
}

td.sizeUp {
  background-color: transparent;
  animation: buyAnimation 0.3s linear;
}

td.sizeDown {
  background-color: transparent;
  animation: sellAnimation 0.3s linear;
}

.quotetable__price {
  width: 40%;
  text-align: left;
}

.quotetable__size {
  width: 15%;
  text-align: right;
}

.quotetable__total {
  width: 45%;
  text-align: right;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: var(--bar-width, 0%);
    pointer-events: none;
  }
}

.buy .quotetable__total::after {
  background-color: $color-bg-buy;
}

.sell .quotetable__total::after {
  background-color: $color-bg-sell;
}

@keyframes sellAnimation {
  from {
    background-color: transparent;
  }

  to {
    background-color: $color-bg-sell-animation;
  }
}

@keyframes buyAnimation {
  from {
    background-color: transparent;
  }

  to {
    background-color: $color-bg-buy-animation;
  }
}
</style>
