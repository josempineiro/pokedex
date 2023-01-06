<template>
  <div :class="classes">
    <div
      v-for="pokemonType in pokemon.types"
      :key="pokemonType.type.name"
      :title="pokemonType.type.name"
    >
      <template v-if="pokemonType.type.name === 'normal'">
        🌱
      </template>
      <template v-if="pokemonType.type.name === 'fighting'">
        🤼‍♂️
      </template>
      <template v-if="pokemonType.type.name === 'flying'">
        ✈️
      </template>
      <template v-if="pokemonType.type.name === 'poison'">
        🧪
      </template>
      <template v-if="pokemonType.type.name === 'ground'">
        🗻
      </template>
      <template v-if="pokemonType.type.name === 'rock'">
        🪨
      </template>
      <template v-if="pokemonType.type.name === 'bug'">
        🐛
      </template>
      <template v-if="pokemonType.type.name === 'ghost'">
        👻
      </template>
      <template v-if="pokemonType.type.name === 'steel'">
        🔩
      </template>
      <template v-if="pokemonType.type.name === 'fire'">
        🔥
      </template>
      <template v-if="pokemonType.type.name === 'water'">
        💦
      </template>
      <template v-if="pokemonType.type.name === 'grass'">
        🌱
      </template>
      <template v-if="pokemonType.type.name === 'electric'">
        ⚡
      </template>
      <template v-if="pokemonType.type.name === 'psychic'">
        🔮
      </template>
      <template v-if="pokemonType.type.name === 'ice'">
        🧊
      </template>
      <template v-if="pokemonType.type.name === 'dragon'">
        🐉
      </template>
      <template v-if="pokemonType.type.name === 'dark'">
        ⚫
      </template>
      <template v-if="pokemonType.type.name === 'fairy'">
        🧚
      </template>
      <template v-if="pokemonType.type.name === 'unknown'">
        🌱
      </template>
      <template v-if="pokemonType.type.name === 'shadow'">
        👥
      </template>
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
const classes = defineClasses('PokemonTypes')
</script>

<style lang="scss">
.PokemonTypes {
  display: flex;
  gap: 1rem;
}
</style>