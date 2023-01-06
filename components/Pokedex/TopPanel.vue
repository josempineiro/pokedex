<template>
  <div :class="classes">
    <Led
      class="BigLed"
      :on="on"
      size="big"
      color="blue"
    />
    <div class="Leds">
      <Led
        class="ErrorLed"
        :on="on"
        size="small"
        color="red"
      />
      <Led
        class="WarningLed"
        :on="on"
        size="small"
        color="yellow"
      />
      <Led
        class="PowerLed"
        :on="on"
        size="small"
        color="green"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  on: {
    type: Boolean,
    default: false,
    class: true,
  },
})
const classes = defineClasses('TopPanel')
</script>

<style lang="scss">
.TopPanel {
  display: flex;
  gap: 1rem;
  .Leds {
    display: flex;
    gap: 1rem;
  }
}
</style>