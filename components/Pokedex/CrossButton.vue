<template>
  <div class="CrossButtonWrapper">
    <div :class="classes">
      <div class="Empty"></div>
      <PokedexButton
        variant="square"
        @click="(event) => $emit('click-top', event)"
      >
        ▲
      </PokedexButton>
      <div class="Empty"></div>
      <PokedexButton
        variant="square"
        @click="(event) => $emit('click-left', event)"
      >
        ◀
      </PokedexButton>
      <PokedexButton variant="square"></PokedexButton>
      <PokedexButton
        variant="square"
        @click="(event) => $emit('click-right', event)"
      >
        ▶
      </PokedexButton>

      <div class="Empty"></div>
      <PokedexButton
        variant="square"
        @click="(event) => $emit('click-bottom', event)"
      >
        ▼
      </PokedexButton>
      <div class="Empty"></div>
    </div>
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
const classes = defineClasses('CrossButton')

const emit = defineEmits([
  'click-top',
  'click-bottom',
  'click-right',
  'click-left',
])
</script>

<style lang="scss">
.CrossButtonWrapper {
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  .CrossButton {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    .Empty {
      background: transparent;
    }
    .Button {
    }
  }
}
</style>