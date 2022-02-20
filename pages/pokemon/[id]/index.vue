<template>
  <PokedexMainPanel
    :class="classes"
    @click-left="prev"
    @click-right="next"
    @click-main="goStats"
  >
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
    name: 'Appear',
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
    params: { id: route.params.id },
  })
}

const next = () => {
  router.push(
    route.fullPath.replace(route.params.id, `${Number(route.params.id) + 1}`)
  )
}

const prev = () => {
  router.push(
    route.fullPath.replace(
      route.params.id,
      `${Math.max(1, Number(route.params.id) - 1)}`
    )
  )
}
</script>

<style>
.Appear-enter-active .Display > *,
.Appear-leave-active .Display > * {
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}

.Appear-enter-from .Display > *,
.Appear-leave-to .Display > * {
  opacity: 0;
}
</style>