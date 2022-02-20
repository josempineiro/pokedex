<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'circle',
    class: true,
    validator(value) {
      return ['circle', 'rectangle', 'square'].includes(value)
    },
  },
  color: {
    type: String,
    default: 'black',
    class: true,
    validator(value) {
      return ['black', 'blue', 'red', 'white'].includes(value)
    },
  },
})
const classes = defineClasses('Button')
</script>

<style lang="scss">
.Button {
  transition: box-shadow 0.2s ease;
  box-shadow: 2px 4px 0px 0px var(--pokedex-shadow-color);
  background: var(--btn-color);
  border: none;
  outline: none;
  cursor: pointer;
  &_black {
    --btn-color: rgb(0, 46, 40);
  }
  &_red {
    --btn-color: rgb(153, 6, 29);
  }
  &_yellow {
    --btn-color: rgb(238, 190, 88);
  }
  &_blue {
    --btn-color: rgb(24, 106, 156);
  }
  &:active {
    box-shadow: 0px 0px 0px 0px var(--pokedex-shadow-color);
  }
}

.Button_circle {
  width: 50px;
  height: 50px;
  border-radius: 100px;
}
.Button_square {
}
.Button_rectangle {
  width: 50px;
  height: 10px;
  border-radius: 100px;
}
</style>