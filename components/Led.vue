<template>
  <div :class="classes"></div>
</template>

<script setup>
const props = defineProps({
  on: {
    type: Boolean,
    class: true,
    default: false,
  },
  size: {
    type: String,
    class: true,
    default: 'small',
    validator() {
      return ['big', 'small']
    },
  },
  color: {
    type: String,
    class: true,
    default: 'red',
    validator() {
      return ['red', 'green', 'yellow', 'blue']
    },
  },
})
const classes = defineClasses('Led')
</script>

<style lang="scss">
.Led {
  --led-color: rgb(87, 87, 86);
  --led-reflect-color: transparent;
  --led-reflect-color-inset: rgba(238, 233, 88, 0.5);

  background: rgb(87, 87, 86);
  border-color: black;
  border-style: solid;
  border-radius: 999px;
  position: relative;
  transition-property: background, box-shadow;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  &::before,
  &::after {
    content: '';
    position: absolute;
    transition-property: background, box-shadow;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    width: 50%;
    height: 50%;
    border-radius: 9999px;
  }
  &::before {
    top: 20%;
    left: 20%;
  }
  &::after {
    top: 32%;
    left: 32%;
  }
  &_on {
    background: var(--led-color);
    box-shadow: var(--led-shadow);
    &::before {
      background: rgba(255, 255, 255, 0.25);
    }
    &::after {
      background: var(--led-color);
    }
  }
  &_green {
    --led-color: rgba(56, 125, 67);
    --led-reflect-color: rgba(56, 125, 67, 0.5);
  }
  &_red {
    --led-color: rgb(153, 6, 29);
    --led-reflect-color: rgba(153, 6, 29, 0.5);
  }
  &_yellow {
    --led-color: rgb(238, 190, 88);
    --led-reflect-color: rgba(238, 190, 88, 0.5);
  }
  &_blue {
    --led-color: rgb(24, 106, 156);
    --led-reflect-color: rgba(24, 106, 156, 0.5);
  }

  &_small {
    width: 15px;
    height: 15px;
    border-width: 1px;
    --led-shadow: 0px 0px 4px 3px var(--led-reflect-color),
      inset 0px 0px 2px 1px var(--led-reflect-color-inset);
  }

  &_big {
    width: 75px;
    height: 75px;
    border-width: 2px;
    --led-shadow: 0px 0px 12px 8px var(--led-reflect-color),
      inset 0px 0px 12px 2px var(--led-reflect-color-inset);
  }
}
</style>