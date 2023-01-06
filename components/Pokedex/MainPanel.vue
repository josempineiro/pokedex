<template>
  <div class="MainPanel">
    <PokedexMainDisplay>
      <slot />
    </PokedexMainDisplay>
    <PokedexMainControls
      @click-main="(event) => $emit('click-main', event)"
      @click-top="(event) => $emit('click-top', event)"
      @click-left="(event) => $emit('click-left', event)"
      @click-right="(event) => $emit('click-right', event)"
      @click-bottom="(event) => $emit('click-bottom', event)"
    >
      <slot name="secondary-display" />
    </PokedexMainControls>
  </div>
</template>

<script setup>
const props = defineProps({
  prop: {
    type: String,
    default: 'value',
    validator(value) {
      return true
    },
    class: true,
  },
})
const emit = defineEmits([
  'click-top',
  'click-bottom',
  'click-right',
  'click-left',
  'click-main',
])
const classes = defineClasses('MainPanel')
</script>

<style lang="scss">
.MainPanel {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  gap: 2rem;
  height: 100%;
}
</style>