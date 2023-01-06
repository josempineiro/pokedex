<template>
  <svg
    v-if="true"
    class="RadarCharArea"
    viewBox="0 0 100 100"
  >
    <path :style="svgStyles" />
  </svg>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})

const classes = defineClasses('RadarCharAreas')

const svgPath = computed(() =>
  props.data.values
    .map((value, index, values) => {
      const valueAngle = ((2 * Math.PI) / values.length) * index
      return [
        50 + 50 * Math.cos(valueAngle) * value,
        50 + 50 * Math.sin(valueAngle) * value,
      ]
    })
    .map(([x, y]) => `${x} ${y}`)
    .join(' L ')
)

const svgStyles = computed(() => ({
  stroke: props.data.color,
  fill: props.data.color,
  d: `path("m ${svgPath.value} z")`,
}))
console.log(svgStyles)
</script>

<style lang="scss">
.RadarCharArea {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  path {
    stroke-width: 1;
    transition: 0.4s;
    fill-opacity: 0.3;
  }
}
</style>