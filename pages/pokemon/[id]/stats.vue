<template>
  <PokedexMainPanel @click-left="prev" @click-right="next" @click-main="goProfile" class="PokemonStatsPage">

    <Head>
      <Title>{{ `Awesome Pokedex App: ${pokemon.name} stats` }}</Title>
      <Meta property="og:title" :content="`Awesome Pokedex App: ${pokemon.name} stats`" />
      <Meta property="og:image"
        :content="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`" />
      <Meta property="twitter:image"
        :content="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`" />
    </Head>
    <PokemonStats :pokemon="pokemon" />
    <template #secondary-display>
      <Pokemon :pokemon="pokemon" />
    </template>
  </PokedexMainPanel>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

definePageMeta({
  layout: 'default',
})

const {
  data: pokemon,
  loading,
  refresh,
} = await useAsyncData('pokemon', () =>
  $fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`, {
    pick: ['id', 'stats'],
  })
)

watch(() => route.params.id, refresh)

const goProfile = () => {
  router.push({
    name: 'pokemon-id',
    params: { id: pokemon.value.id },
  })
}

const next = () => {
  router.push({
    name: 'pokemon-id-stats',
    params: { id: `${Math.min(150, Number(pokemon.value.id) + 1)}` },
  })
}

const prev = () => {
  router.push({
    name: 'pokemon-id-stats',
    params: { id: `${Math.max(1, Number(pokemon.value.id) - 1)}` },
  })
}
</script>

<style>
.PokemonStatsPage .Pokemon {
  padding: 4px;
}

.PokemonStatsPage .PokemonInfo {
  display: none;
}

.PokemonStatsPage-enter-active .MainControlsDisplay>*,
.PokemonStatsPage-leave-active .MainControlsDisplay>* {
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}

.PokemonStatsPage-enter-from .MainControlsDisplay>*,
.PokemonStatsPage-leave-to .MainControlsDisplay>* {
  opacity: 0;
  pointer-events: none;
}

.PokemonStatsPage-enter-from,
.PokemonStatsPage-leave-to {
  pointer-events: none;
}
</style>