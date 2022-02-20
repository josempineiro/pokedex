<template>
  <ul :class="classes" v-if="pokemons">
    <li v-for="pokemon in pokemons" :key="pokemon.url">
      <Pokemon class="PokemonItem" :pokemon="pokemon" />
    </li>
  </ul>
</template>

<script setup>
const pokemons = ref([])

const classes = defineClasses('PokemonList')
</script>

<style>
.PokemonList {
}
</style>