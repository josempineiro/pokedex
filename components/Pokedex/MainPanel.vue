<template>
  <CssFlexBox gap="2" direction="column" grow="1">
    <PokedexMainDisplay>
      <slot></slot>
    </PokedexMainDisplay>
    <CssFlexBox gap="1" align="stretch" justify="space-between">
      <PokedexButton class="Button" variant="circle" />
      <CssFlexBox direction="column" gap="2">
        <CssFlexBox direction="row" gap="1">
          <PokedexButton class="Button" variant="rectangle" color="red" />
          <PokedexButton class="Button" variant="rectangle" color="blue" />
        </CssFlexBox>
        <CssFlexBox grow="1">
          <PokedexDisplay variant="secondary" :on="!close">
            <slot name="secondary-display"></slot>
          </PokedexDisplay>
        </CssFlexBox>
      </CssFlexBox>
      <div>
        <PokedexCrossButton
          @click-top="(event) => $emit('click-top', event)"
          @click-left="(event) => $emit('click-left', event)"
          @click-right="(event) => $emit('click-right', event)"
          @click-bottom="(event) => $emit('click-bottom', event)"
        />
      </div>
    </CssFlexBox>
  </CssFlexBox>
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
const emit = defineEmits([
  'click-top',
  'click-bottom',
  'click-right',
  'click-left',
])
const classes = defineClasses('MainPanel')
</script>

<style lang="scss">
.MainPanel {
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  background: var(--pokedex-shadow-color);
  height: 90%;
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