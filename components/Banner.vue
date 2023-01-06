<template>
  <div :class="classes">
    Leman.dev
  </div>
</template>

<script setup>
const props = defineProps({})
const classes = defineClasses('Banner')
</script>

<style lang="scss">
.Banner {
  position: fixed;
  bottom: 0;
  right: 0;
  font-size: 2rem;
  padding: 1rem;
  background: linear-gradient(
    to right,
    var(--color-primary) 20%,
    var(--color-secondary) 50%,
    var(--color-tertiary) 80%
  );
  background-size: 100% auto;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>