<template>
  <svg :class="classes" viewBox="0 0 100 100">
    <path
      class="Pokedex"
      d="m 10 20 A 10 10 0 0 1 20 10 L 80 10 A -10 -10 0 0 1 90 20 L 90 80 A 10 10 0 0 1 80 90 L 20 90 A 10 10 0 0 1 10 80 z"
    />
    <circle class="Led" cx="25" cy="25" r="6" />
    <path class="CoverLine" d="m 10 40 L 40 40 C 50 40 50 30 60 30 L 90 30" />
    <polygon points="20 60,25 65,20 70" class="Open" />
  </svg>
</template>

<script setup>
const props = defineProps({})
const classes = defineClasses('PokedexIcon')
</script>

<style lang="scss">
.PokedexIcon {
  width: 64px;
  height: 64px;
  .Pokedex {
    fill: var(--color-primary);
  }
  .CoverLine {
    fill: transparent;
    stroke: var(--color-darken-primary);
    stroke-width: 5px;
  }
  .Led {
    fill: rgb(24, 106, 156);
    stroke-width: 2px;
    stroke: white;
  }
  .Open {
    fill: rgb(238, 190, 88);
    stroke: var(--color-darken-primary);
    stroke-width: 2;
  }
}
</style>