<template>
  <Pokedex2D v-if="variant === '2D'"><slot></slot></Pokedex2D>
  <div v-else :class="pokedexClasses">
    <PokedexCover :open="!close" @close="close = true" @open="close = false" />
  </div>
</template>

<script>
export default {
  name: 'Pokedex',
}
</script>
<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: '2D',
    validator(value) {
      return ['retro', '2D', '3D'].includes(value)
    },
  },
})
const classes = defineClasses('Pokedex')
const close = ref(false)
const pokedexClasses = computed(() => [
  ...classes.value,
  close.value ? 'Pokedex_close' : 'Pokedex_open',
])
</script>

<style lang="scss">
.Pokedex {
  width: 100%;
  height: 100%;
  perspective: 2000px;
}
</style>