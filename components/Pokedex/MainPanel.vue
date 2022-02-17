<template>
  <CssFlexBox gap="2" direction="column" grow="1" class="MainPanel">
    <PokedexMainDisplay>
      <slot></slot>
    </PokedexMainDisplay>
    <CssFlexBox gap="1" align="stretch" justify="space-between">
      <CssFlexBox basis="auto" grow="1" shrink="0">
        <PokedexButton
          class="Button"
          variant="circle"
          @click="(event) => $emit('click-main', event)"
        />
      </CssFlexBox>
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
  'click-main',
])
const classes = defineClasses('MainPanel')
</script>

<style lang="scss">
.MainPanel {
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  height: 100%;
  max-height: 100%;
}
</style>