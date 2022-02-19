<template>
  <div class="RadarCharArea" :style="styles"></div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})

const classes = defineClasses('RadarCharAreas')

const path = computed(() =>
  props.data.values
    .map((value, index, values) => {
      const valueAngle = ((2 * Math.PI) / values.length) * index
      return [
        50 + 50 * Math.cos(valueAngle) * value,
        50 + 50 * Math.sin(valueAngle) * value,
      ]
    })
    .map(([x, y]) => `${x}% ${y}%`)
    .join(',')
)

const styles = computed(() => ({
  backgroundColor: props.data.color,
  clipPath: `polygon(${path.value})`,
}))
</script>

<style lang="scss">
.RadarCharArea {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(16, 143, 255);
  transition: clip-path 1s ease;
}
</style>