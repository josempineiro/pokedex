<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  direction: {
    type: String,
    default: 'row',
    class: true,
    validator(value) {
      return ['row', 'column'].includes(value)
    },
  },
  align: {
    type: String,
    default: 'stretch',
    class: {
      useName: true,
    },
    validator(value) {
      return ['start', 'center', 'end', 'stretch'].includes(value)
    },
  },
  justify: {
    type: String,
    default: 'start',
    class: {
      useName: true,
    },
    validator(value) {
      return [
        'start',
        'center',
        'end',
        'space-around',
        'space-between',
      ].includes(value)
    },
  },
  gap: {
    type: [String, Number],
    default: 0,
    class: {
      useName: true,
    },
  },
  grow: {
    type: [String, Number],
    default: 0,
    class: {
      useName: true,
    },
  },
  shrink: {
    type: [String, Number],
    default: 1,
    class: {
      useName: true,
    },
  },
  basis: {
    type: [String, Number],
    default: 1,
    class: {
      useName: true,
    },
  },
})
const classes = defineClasses('FlexBox')
</script>

<style lang="scss">
.FlexBox {
  display: flex;
  &_row {
    flex-direction: row;
  }
  &_column {
    flex-direction: column;
  }
  &_align_start {
    align-items: flex-start;
  }
  &_align_center {
    align-items: center;
  }
  &_align_end {
    align-items: flex-end;
  }
  &_align_stretch {
    align-items: stretch;
  }

  &_justify_start {
    justify-content: flex-start;
  }
  &_justify_center {
    justify-content: center;
  }
  &_justify_end {
    justify-content: flex-end;
  }
  &_justify_space-around {
    justify-content: space-around;
  }
  &_justify_space-between {
    justify-content: space-between;
  }
  &_gap_1 {
    gap: 1rem;
  }
  &_gap_2 {
    gap: 2rem;
  }
  &_grow_1 {
    flex-grow: 1;
  }
  &_grow_0 {
    flex-grow: 0;
  }
  &_shrink_1 {
    flex-shrink: 1;
  }
  &_shrink_0 {
    flex-shrink: 0;
  }
  &_basis_auto {
    flex-basis: auto;
  }
  &_shrink_0 {
    flex-shrink: 0;
  }
}
</style>