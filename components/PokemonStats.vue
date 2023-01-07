<template>
  <div :class="classes">
    <div class="RadarWrapper">
      <RadarChart :dataset="dataset" :labels="labels" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
  variant: {
    type: String,
    default: 'default',
    validator(value) {
      return ['default', 'mini'].includes(value)
    },
  },
})

const classes = defineClasses('PokemonStats', props)

const labels = computed(() =>
  props.pokemon.stats.map(({ stat: { name } }) => name)
)

const dataset = computed(() => [
  {
    color: 'tomato',
    values: props.pokemon.stats.map(({ base_stat }) => base_stat / 250),
  },
])
</script>

<style lang="scss">
.PokemonStats {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.RadarWrapper {
  width: 60%;
}

.PokemonStats_mini .RadarChartAxisLabel {
  font-size: 12px;
  padding: 0;
}
</style>