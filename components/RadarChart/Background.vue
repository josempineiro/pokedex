<template>
  <div :class="classes" :style="styles"></div>
</template>

<script setup>
const props = defineProps({
  labels: {
    type: Array,
    required: true,
  },
})

const classes = defineClasses('RadarChartBackground')

const styles = computed(() => ({
  clipPath: `polygon(${props.labels
    .map((_, index, labels) => {
      const valueAngle = ((2 * Math.PI) / labels.length) * index
      return [50 + 50 * Math.cos(valueAngle), 50 + 50 * Math.sin(valueAngle)]
    })
    .map(([x, y]) => `${x}% ${y}%`)
    .join(',')})`,
}))
</script>

<style lang="scss">
.RadarChartBackground {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(179, 179, 179, 0.5);
}
</style>