<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  name: string;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'currentColor',
});

const svgModules = import.meta.glob('../assets/svg-icon/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const svgContent = computed(() => {
  const key = `../assets/svg-icon/${props.name}.svg`;
  return svgModules[key] ?? '';
});
</script>

<template>
  <span class="svg-icon" :style="{ color: props.color }" v-html="svgContent" />
</template>

<style scoped>
.svg-icon {
  display: inline-flex;
  align-items: center;
}

.svg-icon :deep(svg) {
  width: 20px;
  height: 20px;
}
</style>
