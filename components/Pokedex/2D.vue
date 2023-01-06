<template>
  <div :class="[...classes, { open }]">
    <div class="Case">
      <div class="CasePanel">
        <PokedexTopPanel :on="open" />
        <div class="MainPanelWrapper">
          <slot />
        </div>
      </div>
    </div>
    <div class="Hinge" />
    <PokedexCover
      :open="open"
      @close="open = false"
      @open="open = true"
    />
    <audio
      ref="beep"
      @ended="ended"
    >
      <source
        src="~/assets/audio/beep.mp3"
        type="audio/mp3"
      >
    </audio>
  </div>
</template>

<script setup>
const classes = defineClasses('Pokedex2D')
const open = ref(false)
const beep = ref(null)
watch(open, (value) => {
  if (value) {
    beep.value.play()
  }
})
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
.Pokedex2D {
  --pokedex-shadow-color: var(--color-darken-primary);
  --pokedex-main-color: var(--color-primary);
  --pokedex-reflect-color: #ffa4b4;
  --pokedex-shadow-size: 16px;
  position: relative;
  display: flex;
  justify-self: center;
  width: 100%;
  height: 100%;
  max-width: min(80vw, 110vh);
  max-height: min(66vw, 88vh);
  .Case {
    display: flex;
    flex: 1;
    position: relative;
    &::before {
      @include shadow(16px 0 0 16px);
    }
    .CasePanel {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      border-radius: 16px 0 0 16px;
      background: var(--pokedex-main-color);
      overflow: hidden;
    }
    .TopPanel {
      height: 10%;
      display: flex;
      padding: 7% 12%;
      gap: 32px;
    }
  }
  .Hinge {
    position: relative;
    flex-basis: 5%;
    width: 100%;
    top: 0%;
    height: 100%;
    background: var(--pokedex-main-color);
    background-image: linear-gradient(
      to bottom,
      var(--pokedex-main-color) 10%,
      var(--pokedex-shadow-color) 10%
    );
    &::before {
      content: '';
      position: absolute;
      top: 10%;
      left: 0;
      width: 100%;
      height: calc(90% + 16px);
      border-radius: 32px/16px;
      background-image: linear-gradient(
        to right,
        var(--pokedex-main-color) 25%,
        var(--pokedex-reflect-color) 25%,
        var(--pokedex-reflect-color) 50%,
        var(--pokedex-main-color) 50%,
        var(--pokedex-main-color) 75%,
        var(--pokedex-shadow-color) 75%
      );
    }
    &::after {
      content: '';
      height: 0;
      padding-bottom: 50%;
      top: auto;
      bottom: 0;
      position: absolute;
      left: 0;
      width: 100%;
      background: var(--pokedex-shadow-color);
      border-radius: 50%;
      pointer-events: none;
      transform: translateY(16px);
    }
  }
  .Controls {
    display: flex;
    align-items: flex-start;

    justify-content: flex-start;
    gap: 16px;
  }
}
.MainPanelWrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  background: var(--pokedex-shadow-color);
  height: 90%;
  overflow: hidden;
  clip-path: polygon(0% 10%, 40% 10%, 60% 0%, 100% 0%, 100% 100%, 0% 100%);
  padding: 25% 10% 10%;
  &::before,
  &::after {
    content: '';
    position: absolute;
    pointer-events: none;
  }
  &::before {
    top: 2%;
    width: 104%;
    height: 100%;
    left: 0;
    background: var(--pokedex-main-color);
    opacity: 0.6;
    clip-path: polygon(0% 10%, 40% 10%, 60% 0%, 100% 0%, 100% 100%, 0% 100%);
    z-index: -1;
  }
  &::after {
    top: 2%;
    width: 92%;
    left: 4%;
    height: calc(96% - 0px);
    background: var(--pokedex-shadow-color);
    transform: rotateY(180deg);
    z-index: -1;
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
  }
}

@media only screen and (min-width: 801px) {
  .Pokedex2D {
    transition: transform 200ms ease;
    transform: translateX(25%);
    &.open {
      transform: translateX(0);
    }
  }
}
</style>