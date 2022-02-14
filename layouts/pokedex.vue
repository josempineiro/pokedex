<template>
  <div :class="classes">
    <Pokedex variant="2D">
      <slot></slot>
    </Pokedex>
  </div>
</template>

<script setup>
const classes = defineClasses('Layout')
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