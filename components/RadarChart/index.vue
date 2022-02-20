<template>
  <div class="RadarChart">
    <RadarChartAxes :labels="labels" />
    <RadarChartBackground :labels="labels" />
    <div>
      <RadarChartArea
        v-for="(data, index) in dataset"
        :key="index"
        :data="data"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  labels: {
    type: Array,
    required: true,
  },
  dataset: {
    type: Array,
    required: true,
  },
})
const classes = defineClasses('RadarChart')
</script>

<style lang="scss">
.RadarChart {
  position: relative;
  width: 100%;
  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
}
</style>