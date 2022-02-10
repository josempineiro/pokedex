<template>
  <div :class="classes" v-if="pokemonInfo">
    <img
      class="PokemonAvatar"
      :src="`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonInfo.id}.svg`"
    />
    <div class="PokemonInfo">
      <span> #{{ pokemonInfo.id }}</span>
      <span class="PokemonName"> {{ pokemonInfo.name }}</span>
      <PokemonTypes :id="id" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
})
const classes = defineClasses('Pokemon')

import { useQuery, useResult } from '@vue/apollo-composable'
import { POKEMON_QUERY } from '@/api/pokemon/queries'

const { loading, result } = useQuery(POKEMON_QUERY, {
  name: props.pokemon?.name || props.id,
})
const pokemonInfo = useResult(result)
console.log(pokemonInfo.value)
</script>

<style lang="scss">
.Pokemon {
  width: 100%;
  padding: 16px;
  flex-basis: fit-content;
}
.PokemonAvatar {
  width: 100%;
}
.PokemonInfo {
  padding: 0 16px;
  background: white;
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
  color: black;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
.PokemonName {
  text-transform: capitalize;
}
</style>