<template>
  <div :class="classes">
    <Pokedex2D><slot></slot></Pokedex2D>
  </div>
</template>

<script setup>
const classes = defineClasses('Wrapper')
</script>

<style lang="scss">
.Layout {
  padding: 64px;
  height: 100%;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>