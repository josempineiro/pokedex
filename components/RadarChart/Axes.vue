<template>
  <div :class="classes">
    <div
      class="RadarChartAxis"
      v-for="(label, index) in labels"
      :key="index"
      :style="{
        '--axis-angle': `${((2 * Math.PI) / labels.length) * index}rad`,
      }"
    >
      <div class="RadarChartAxisPoint">
        <div
          :class="[
            'RadarChartAxisLabel',
            `RadarChartAxisLabel_x_${indexXPosition(index)}`,
            `RadarChartAxisLabel_y_${indexYPosition(index)}`,
          ]"
        >
          {{ label.split('-').join(' ') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  labels: {
    type: Array,
    required: true,
  },
})

const classes = defineClasses('RadarChartAxes')

const indexXPosition = (index) => {
  const indexCos =
    Math.round(
      (Math.cos(((2 * Math.PI) / props.labels.length) * index) +
        Number.EPSILON) *
        100
    ) / 100
  if (indexCos === 0) {
    return 'center'
  } else if (indexCos < 0) {
    return 'left'
  } else {
    return 'right'
  }
}
const indexYPosition = (index) => {
  const indexSin =
    Math.round(
      (Math.sin(((2 * Math.PI) / props.labels.length) * index) +
        Number.EPSILON) *
        100
    ) / 100
  if (indexSin === 0) {
    return 'center'
  } else if (indexSin < 0) {
    return 'top'
  } else {
    return 'bottom'
  }
}
</script>

<style lang="scss">
.RadarChartAxes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.RadarChartAxis {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(var(--axis-angle));
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 1px;
    transform: translateY(-50%);
    background: rgb(157, 165, 181);
  }
}
.RadarChartAxisPoint {
  transform: translate3d(-50%, -50%, 0) rotate(calc(var(--axis-angle) * -1));
  position: absolute;
  top: 50%;
  left: 100%;
  width: 16px;
  height: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.RadarChartAxisLabel {
  font-size: 10px;
  padding: 0 4px;
  position: absolute;
  top: var(--label-top);
  left: var(--label-left);
  transform: translate3d(var(--label-x), var(--label-y), 0);
}
.RadarChartAxisLabel_x_center {
}
.RadarChartAxisLabel_x_left {
  --label-x: -50%;
}
.RadarChartAxisLabel_x_right {
  --label-x: 50%;
}
.RadarChartAxisLabel_y_top {
  --label-y: -50%;
}
.RadarChartAxisLabel_y_center {
  --label-y: 0%;
}
.RadarChartAxisLabel_y_bottom {
  --label-y: 50%;
}
</style>