<template>
  <div
    :class="classes"
    @click="$emit('close')"
  >
    <div class="PokedexCoverPanel">
      <slot />
    </div>
    <div class="PokedexCoverFront">
      <button
        class="OpenButton"
        @click.stop="$emit('open')"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
    class: true,
  },
})
const emit = defineEmits(['close', 'open'])
const classes = defineClasses('PokedexCover')
</script>

<style lang="scss">
@mixin shadow($border-radius) {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(16px);
  background: var(--pokedex-shadow-color);
  border-radius: $border-radius;
  pointer-events: none;
}

.PokedexCover {
  position: relative;
  flex: 1;
  top: 10%;
  height: 90%;
  right: 0%;
  transition: right 200ms ease, transform 200ms ease;
  &::before {
    @include shadow(0 0 16px 0);
    clip-path: polygon(0% 0%, 40% 0%, 60% 10%, 100% 10%, 100% 100%, 0% 100%);
  }
  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: calc(100% - 10%);
    height: calc(100% - 10%);
    clip-path: polygon(
      0% 0%,
      40% 0%,
      60% 10%,
      100% 10%,
      100% 100%,
      0% 100%,
      0% 4px,
      4px 4px,
      4px calc(100% - 4px),
      calc(100% - 4px) calc(100% - 4px),
      calc(100% - 4px) calc(10% + 4px),
      calc(60% - 2px) calc(10% + 4px),
      calc(40% - 2px) 4px,
      0% 4px
    );

    pointer-events: none;
    top: 3%;
    width: 92%;
    left: 4%;
    height: calc(94%);
    border-radius: 0 0 8px 0;
    background: var(--pokedex-shadow-color);
  }
  .PokedexCoverPanel {
    width: 100%;
    height: 100%;
    position: relative;
    background: var(--pokedex-main-color);
    border-radius: 0 0 16px 0;
    clip-path: polygon(0% 0%, 40% 0%, 60% 10%, 100% 10%, 100% 100%, 0% 100%);
    backface-visibility: hidden;
  }

  & {
    transform: translateX(-100%) rotateY(180deg);
    right: 5%;
    .PokedexCoverFront {
      transform: rotateY(0deg);
    }
  }
  &_open {
    transform: translateX(0) rotateY(0deg);
    right: 0;
    .PokedexCoverFront {
      transform: rotateY(180deg);
    }
  }
  .PokedexCoverFront {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-primary);
    backface-visibility: hidden;
    transition: transform 0ms ease;
    clip-path: polygon(0% 0%, 40% 0%, 60% 10%, 100% 10%, 100% 100%, 0% 100%);
    transition-delay: 50ms;
    z-index: 1;
  }
  .OpenButton {
    background: transparent;
    border-width: 32px;
    border-color: transparent;
    border-right-color: var(--color-tertiary);
    border-style: solid;
    position: absolute;
    right: 5%;
    top: 50%;
    cursor: pointer;
  }
}
</style>