<template>
  <div :class="classes">
    <div class="DisplayLeds">
      <Led class="ErrorLed" :on="!close" size="small" color="red" />
      <Led class="ErrorLed" :on="!close" size="small" color="red" />
    </div>
    <PokedexDisplay :on="!close">
      <slot></slot>
    </PokedexDisplay>
    <div class="DisplayControls">
      <Led class="ErrorLed" :on="!close" size="medium" color="red" />
      <div class="Gratting">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  on: {
    type: Boolean,
    default: false,
  },
})
const classes = defineClasses('MainDisplay')
</script>

<style lang="scss">
.MainDisplay {
  background: #d3d3d3;
  border-radius: 8px;
  padding: 10% 10% 15%;
  width: 100%;
  height: 60%;
  align-self: flex-start;
  margin: 0 auto;
  z-index: 1;
  display: flex;
  position: relative;
  box-shadow: 3px 6px 0px 0px var(--pokedex-shadow-color);
  clip-path: polygon(
    0% 0%,
    calc(100% + 3px) 0%,
    calc(100% + 3px) calc(100% + 6px),
    15% calc(100% + 6px),
    0% 90%
  );
  .DisplayLeds {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 12%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .DisplayControls {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 17%;
    padding: 0 10% 0 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .Gratting {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5% 0;
    > * {
      width: 100%;
      height: 10%;
      background: black;
      border-radius: 9999px;
    }
  }
}
</style>