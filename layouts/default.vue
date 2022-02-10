<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script setup>
const classes = defineClasses('Layout')
</script>

<style lang="scss">
.Layout {
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: var(--color-background);
  transition-property: background-color;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
}
</style>