<template>
  <div :class="classes">
    <NuxtPage />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'pokedex',
})
const classes = defineClasses('PokemonDetailsPage')
</script>

<style lang="scss">
.PokemonDetailsPage {
  height: 100%;
  width: 100%;
}
</style>