<template>
  <div :class="classes" v-if="pokemonInfo">
    <template v-for="pokemonType in pokemonInfo.types">
      <template v-if="pokemonType.type.name === 'normal'">🌱</template>
      <template v-if="pokemonType.type.name === 'fighting'">🤼‍♂️</template>
      <template v-if="pokemonType.type.name === 'flying'">✈️</template>
      <template v-if="pokemonType.type.name === 'poison'">🧪</template>
      <template v-if="pokemonType.type.name === 'ground'">🕳️</template>
      <template v-if="pokemonType.type.name === 'rock'">🪨</template>
      <template v-if="pokemonType.type.name === 'bug'">🐛</template>
      <template v-if="pokemonType.type.name === 'ghost'">👻</template>
      <template v-if="pokemonType.type.name === 'steel'">🔩</template>
      <template v-if="pokemonType.type.name === 'fire'">🔥</template>
      <template v-if="pokemonType.type.name === 'water'">💦</template>
      <template v-if="pokemonType.type.name === 'grass'">🌱</template>
      <template v-if="pokemonType.type.name === 'electric'">⚡</template>
      <template v-if="pokemonType.type.name === 'psychic'">🔮</template>
      <template v-if="pokemonType.type.name === 'ice'">🧊</template>
      <template v-if="pokemonType.type.name === 'dragon'">🐉</template>
      <template v-if="pokemonType.type.name === 'dark'">⚫</template>
      <template v-if="pokemonType.type.name === 'fairy'">🧚</template>
      <template v-if="pokemonType.type.name === 'unknown'">🌱</template>
      <template v-if="pokemonType.type.name === 'shadow'">👥</template>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})
const classes = defineClasses('PokemonType')

const { data, loading } = await useAsyncData('pokemonTypes', () =>
  $fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemon?.name || props.id}`)
)

const pokemonInfo = data
</script>

<style lang="scss">
.PokemonType {
}
</style>