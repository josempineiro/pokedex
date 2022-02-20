<template>
  <div :class="classes">
    <Pokedex2D><slot></slot></Pokedex2D>
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

.Layout.Appear-enter-active,
.Layout.Appear-leave-active {
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}

.Layout.Appear-enter-from,
.Layout.Appear-leave-to {
  opacity: 0;
}
</style>