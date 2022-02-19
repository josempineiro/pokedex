<template>
  <PokedexMainPanel
    @click-left="prev"
    @click-right="next"
    @click-main="goProfile"
  >
    <PokemonStats :id="route.params.id" />
    <template #secondary-display>
      <div>ASDF</div>
    </template>
  </PokedexMainPanel>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

definePageMeta({
  layout: 'pokedex',
  key: false,
})

const goProfile = () => {
  router.push({
    name: 'pokemon-id',
    params: { id: route.params.id },
  })
}

const next = () => {
  router.push(
    route.fullPath.replace(
      route.params.id,
      `${Math.min(150, Number(route.params.id) + 1)}`
    )
  )
}

const prev = () => {
  router.push(
    route.fullPath.replace(
      route.params.id,
      `${Math.max(1, Number(route.params.id) - 1)}`
    )
  )
}
</script>

<style>
</style>