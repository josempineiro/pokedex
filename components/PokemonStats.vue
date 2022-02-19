<template>
  <div :class="classes">
    <div class="RadarWrapper">
      <RadarChart :dataset="dataset" :labels="labels" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const classes = defineClasses('PokemonStats')

const {
  data: pokemon,
  loading,
  refresh,
} = await useAsyncData('pokemon', () =>
  $fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`, {
    pick: ['id', 'stats'],
  })
)

watch(
  () => props.id,
  async (newId) => {
    return await refresh()
  }
)
const labels = computed(() =>
  pokemon.value.stats.map(({ stat: { name } }) => name)
)

const dataset = computed(() => [
  {
    color: 'tomato',
    values: pokemon.value.stats.map(({ base_stat }) => base_stat / 200),
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
</style>