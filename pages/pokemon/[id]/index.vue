<template>
  <PokedexMainPanel
    :class="classes"
    @click-left="prev"
    @click-right="next"
    @click-main="goStats"
  >
    <Head>
      <Title>{{ `Awesome Pokedex App: ${pokemon.name}` }}</Title>
      <Meta
        property="og:title"
        :content="`Awesome Pokedex App: ${pokemon.name}`"
      />
      <Meta
        property="og:image"
        :content="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`"
      />
      <Meta
        property="twitter:image"
        :content="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`"
      />
    </Head>
    <Pokemon :pokemon="pokemon" />
    <template #secondary-display>
      <PokemonStats :pokemon="pokemon" variant="mini" />
    </template>
  </PokedexMainPanel>
</template>

<script setup>
definePageMeta({
  layout: 'default',
  key: (route) => {
    console.log(route)
    return route.fullPath
  },
  pageTransition: {
    appear: true,
    name: 'PokemonPage',
    duration: 500,
    mode: 'out-in',
  },
  layoutTransition: {
    appear: true,
    name: 'Appear',
    duration: 500,
    mode: 'out-in',
  },
})

const route = useRoute()
const router = useRouter()

const {
  data: pokemon,
  pending,
  refresh,
} = await useAsyncData('pokemon', () =>
  $fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`, {
    pick: ['id', 'stats'],
  })
)
const propClasses = defineClasses('PokemonPage')

const classes = computed(() => [
  ...propClasses.value,
  pending.value ? 'PokemonPage_loading' : '',
])

const goStats = () => {
  router.push({
    name: 'pokemon-id-stats',
    params: { id: pokemon.id },
  })
}

const next = () => {
  router.push({
    name: 'pokemon-id',
    params: { id: `${Math.min(150, Number(pokemon.value.id) + 1)}` },
  })
}

const prev = () => {
  router.push({
    name: 'pokemon-id',
    params: { id: `${Math.max(1, Number(pokemon.value.id) - 1)}` },
  })
}
</script>

<style>
.PokemonPage-enter-active .Display > *,
.PokemonPage-leave-active .Display > * {
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}

.PokemonPage-enter-from .Display > *,
.PokemonPage-leave-to .Display > * {
  opacity: 0;
  pointer-events: none;
}

.PokemonPage-enter-from,
.PokemonPage-leave-to {
  pointer-events: none;
}
</style>