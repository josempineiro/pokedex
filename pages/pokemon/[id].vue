<template>
  <PokedexMainPanel @click-left="prev" @click-right="next">
    <Pokemon :id="route.params.id" />
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
  key: (route) => route.fullPath,
})

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