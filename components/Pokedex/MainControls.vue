<template>
  <div :class="classes">
    <PokedexButton
      class="PrimaryButton"
      variant="circle"
      @click="(event) => $emit('click-main', event)"
    />
    <div class="SecondaryControls">
      <div class="SecondaryButtons">
        <PokedexButton
          class="SecondaryButton"
          variant="rectangle"
          color="red"
        />
        <PokedexButton
          class="SecondaryButton"
          variant="rectangle"
          color="blue"
        />
      </div>
      <PokedexDisplay
        class="MainControlsDisplay"
        variant="secondary"
        :on="!close"
      >
        <slot></slot>
      </PokedexDisplay>
    </div>
    <div class="MainCrossButton">
      <PokedexCrossButton
        @click-top="(event) => $emit('click-top', event)"
        @click-left="(event) => $emit('click-left', event)"
        @click-right="(event) => $emit('click-right', event)"
        @click-bottom="(event) => $emit('click-bottom', event)"
      />
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits([
  'click-top',
  'click-bottom',
  'click-right',
  'click-left',
  'click-main',
])
const classes = defineClasses('MainControls')
</script>

<style lang="scss">
.MainControls {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  height: 30%;
  align-items: flex-start;
}
.PrimaryButton {
  flex-shrink: 0;
}
.SecondaryButtons {
  display: flex;
  gap: 1rem;
}
.MainControlsDisplay {
  overflow: hidden;
  flex: 1;
}
.SecondaryControls {
  width: 100%;
  height: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.MainCrossButton {
  width: 100%;
}
</style>