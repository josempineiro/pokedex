<template>
  <div :class="classes">
    <img
      class="PokemonAvatar"
      @load="onLoad"
      @error="onError"
      :src="avatarSrc"
    />
    <div class="PokemonInfo">
      <span> #{{ pokemon.id }}</span>
      <span class="PokemonName"> {{ pokemon.name }}</span>
      <PokemonTypes :pokemon="pokemon" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
})
const avatarSrc = computed(
  () =>
    `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.pokemon.id}.svg`
)
watch(avatarSrc, (a) => {
  loading.value = true
})

const loading = ref(true)
const propClasses = defineClasses('Pokemon')

const onLoad = () => {
  loading.value = false
}
const onError = () => {
  loading.value = false
}
const classes = computed(() => [
  ...propClasses.value,
  loading.value ? 'Pokemon_loading' : '',
])
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