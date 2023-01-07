<template>
  <div class="CrossButtonWrapper">
    <div :class="classes">
      <div class="Empty" />
      <PokedexButton variant="square" @click="(event) => $emit('click-top', event)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z">
          </path>
        </svg>
      </PokedexButton>
      <div class="Empty" />
      <PokedexButton variant="square" @click="(event) => $emit('click-left', event)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
          </path>
        </svg>
      </PokedexButton>
      <PokedexButton variant="square" />
      <PokedexButton variant="square" @click="(event) => $emit('click-right', event)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </PokedexButton>

      <div class="Empty" />
      <PokedexButton variant="square" @click="(event) => $emit('click-bottom', event)">

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z">
          </path>
        </svg>
      </PokedexButton>
      <div class="Empty" />
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
  },
})
const classes = defineClasses('CrossButton', props)

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

    .Button {}
  }
}
</style>