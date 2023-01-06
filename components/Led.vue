<template>
  <div :class="classes">
    <div class="Base">
      <div class="Capsule">
        <div class="Reflect" />
      </div>
    </div>
  </div>
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
      return ['big', 'medium', 'small']
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
  --led-border-width: 1px;
  border: var(--led-border-width) solid white;
  border-color: white;
  border-bottom-color: gainsboro;
  border-right-color: gainsboro;
  border-radius: 100%;
  &_small {
    width: 15px;
    height: 15px;
    --led-border-width: 1px;
  }
  &_medium {
    width: 30px;
    height: 30px;
    --led-border-width: 1px;
  }
  &_big {
    width: 75px;
    height: 75px;
    --led-border-width: 4px;
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

  .Base {
    display: flex;
    width: 100%;
    height: 100%;
    border-width: var(--led-border-width);
    border-style: solid;
    border-color: white;
    border-bottom-color: gainsboro;
    border-right-color: gainsboro;
    border-radius: 100%;
  }

  &_small .Base {
    border-color: white;
    --led-border-width: 1px;
  }
  &_medium .Base {
    border-color: white;
    --led-border-width: 2px;
  }
  &_big .Base {
    border-color: white;
    --led-border-width: 4px;
  }
  .Capsule {
    display: flex;
    width: 100%;
    height: 100%;
    background: var(--led-color);
    box-shadow: var(--led-shadow);
    position: relative;
    overflow: hidden;
    transition-property: background, box-shadow;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    border-radius: 100%;
    filter: brightness(1.2);
    &::before,
    &::after {
      content: '';
      position: absolute;
      transition-property: background, box-shadow;
      transition-duration: 0.2s;
      transition-timing-function: ease;
    }
    &::before {
      width: 105%;
      height: 105%;
      top: -10%;
      left: -10%;
      background: rgba(255, 255, 255, 0.25);
      border-radius: 100%;
    }
    &::after {
      width: 40%;
      height: 20%;
      top: 20%;
      left: 10%;
      background: rgba(255, 255, 255, 0.75);
      border-radius: 100%;
      transform: rotate(-45deg);
    }
    .Reflect {
      width: 15%;
      height: 15%;
      position: absolute;
      top: 50%;
      left: 50%;
      background: rgba(255, 255, 255, 0.25);
      border-radius: 100%;
      transform: translate3d(-50%, -50%, 0);
    }
  }
  &:not(.Led_on) .Capsule {
    filter: brightness(0.8);
  }
}
</style>