<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator(value) {
      return ['primary', 'secondary'].includes(value)
    },
    class: true,
  },
  on: {
    type: Boolean,
    default: false,
    class: true,
  },
})
const classes = defineClasses('Display')
</script>

<style lang="scss">
.Display {
  position: relative;
  background: black;
  height: 100%;
  width: 100%;
  display: flex;
  --display-bg-color: black;
  background: var(--display-bg-color);
  align-items: stretch;
  justify-content: center;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-image: linear-gradient(
      -45deg,
      white 10%,
      transparent 10%,
      transparent 25%,
      white 25%,
      white 50%,
      transparent 50%,
      transparent 75%,
      white 75%,
      white 80%,
      transparent 80%
    );
    opacity: 0.1;
  }
  &_secondary {
    box-shadow: inset 1px 1px 0px 1px black;
  }
  &_primary {
    border-style: solid;
    border-width: 3px 1px 1px 3px;
    border-color: black;
    border-right-color: white;
    border-bottom-color: white;
  }
  &_on {
    --display-bg-color: #54bcbd;
    &.Display_secondary {
      --display-bg-color: #4da55a;
    }
    &::after {
      opacity: 0.04;
    }
  }
}
</style>