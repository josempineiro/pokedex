<template>
  <div :class="classes">
    <div class="Case">
      <div class="CasePanel">
        <div class="TopPanel">
          <Led class="BigLed" :on="!close" size="big" color="blue" />
          <CssFlexBox class="Leds" gap="1">
            <Led class="ErrorLed" :on="!close" size="small" color="red" />
            <Led class="WarningLed" :on="!close" size="small" color="yellow" />
            <Led class="PowerLed" :on="!close" size="small" color="green" />
          </CssFlexBox>
        </div>
        <CssFlexBox class="MainPanelWrapper">
          <slot> </slot>
        </CssFlexBox>
      </div>
    </div>
    <div class="Hinge"></div>
    <div class="Cover">
      <div class="CoverPanel"></div>
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
const classes = defineClasses('Pokedex2D')
const close = ref(false)
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
  --pokedex-shadow-color: #610514;
  --pokedex-main-color: #d1092b;
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
  .Cover {
    position: relative;
    flex: 1;
    top: 10%;
    height: 90%;
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
    .CoverPanel {
      width: 100%;
      height: 100%;
      position: relative;
      background: var(--pokedex-main-color);
      border-radius: 0 0 16px 0;
      clip-path: polygon(0% 0%, 40% 0%, 60% 10%, 100% 10%, 100% 100%, 0% 100%);
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
  max-height: 100%;
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
</style>