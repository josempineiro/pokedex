<template>
  <div :class="[...classes, loading ? 'Pokemon_loading' : '']" v-if="loading">
    Loading...
  </div>
  <div :class="classes" v-if="data">
    <img
      class="PokemonAvatar"
      :src="`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`"
    />
    <div class="PokemonInfo">
      <span> #{{ data.id }}</span>
      <span class="PokemonName"> {{ data.name }}</span>
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

const { data, loading } = await useAsyncData('pokemon', () =>
  $fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
)
</script>

<style lang="scss">
.Pokemon {
  width: 100%;
  padding: 16px 16px 42px;
}
.PokemonAvatar {
  width: 100%;
  height: 100%;
  object-fit: contain;
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