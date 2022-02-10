<template>
  <Pokemon :id="route.params.id" />
</template>

<script setup>
definePageMeta({
  layout: 'clear',
  menu: {
    position: 2,
  },
})

const route = useRoute()
const classes = defineClasses('PokemonDetailsPage')
</script>

<style>
</style>