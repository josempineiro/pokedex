<template>
  <PokedexMainPanel
    class="PokemonDetailsIndex"
    @click-left="prev"
    @click-right="next"
    @click-main="goStats"
  >
    <ClientOnly>
      <Pokemon :id="route.params.id" />
      <template #secondary-display>
        <div>ASDF</div>
      </template>
    </ClientOnly>
  </PokedexMainPanel>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

const goStats = () => {
  router.push({
    name: 'pokemon-id-stats',
    params: { id: route.params.id },
  })
}

const next = () => {
  router.push(
    route.fullPath.replace(route.params.id, `${Number(route.params.id) + 1}`)
  )
}

const prev = () => {
  router.push(
    route.fullPath.replace(route.params.id, `${Number(route.params.id) - 1}`)
  )
}
</script>

<style>
</style>