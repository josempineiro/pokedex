<template>
  <ul :class="classes" v-if="pokemons">
    <li v-for="pokemon in pokemons.results" :key="pokemon.url">
      <Pokemon class="PokemonItem" :pokemon="pokemon" />
    </li>
  </ul>
</template>

<script setup>
import { useQuery, useResult } from '@vue/apollo-composable'
import { POKEMONS_QUERY } from '@/api/pokemon/queries'

const { loading, result } = useQuery(POKEMONS_QUERY, {
  limit: 150,
  offset: 0,
})

const pokemons = useResult(result)

const classes = defineClasses('PokemonList')
</script>

<style>
.PokemonList {
}
</style>