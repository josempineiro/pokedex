<template>
  <div :class="classes">
    <Pokedex variant="2D" />
  </div>
</template>

<script setup>
const props = defineProps({})
const classes = defineClasses('PokedexPage')
definePageMeta({})
const router = useRouter()
const route = useRoute()
const next = () => {
  router.push(
    route.fullPath.replace(route.params.id, `${Number(route.params.id) + 1}`)
  )
}
const prev = () => {
  router.push(
    route.fullPath.replace(route.params.id, `${Number(route.params.id) - 1}`)
  )
}

const close = ref(false)

const toggle = () => {
  close.value = !close.value
}
</script>

<style lang="scss">
.PokedexPage {
  padding: 64px;
  height: 100%;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>