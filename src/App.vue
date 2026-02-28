<script setup lang="ts">
import OrderBook from './components/OrderBook.vue'
</script>

<template>
  <OrderBook />
</template>

<style lang="scss">
@import './assets/reset.scss';

html, body {
  width: 100%;
  height: 100%;
  background-color: $color-bg-light;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-text-primary;
}

p, th, td {
  color: $color-text-light;
}
</style>
