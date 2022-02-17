<template>
  <div :class="classes">
    <div class="Radar">
      <div
        v-for="(stat, index) in pokemonStats"
        :key="index"
        class="RadarAxis"
        :style="{
          '--axis-angle': `${((2 * Math.PI) / pokemonStats.length) * index}rad`,
        }"
      >
        <div class="RadarAxisPoint">
          <div class="RadarAxisLabel">{{ stat.stat.name }}</div>
        </div>
      </div>

      <div class="RadarBG" :style="styles"></div>
      <div v-if="pokemon" class="Stats" :style="stylesStats"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
})
const classes = defineClasses('PokemonStats')

import { useQuery, useResult } from '@vue/apollo-composable'
import { POKEMON_STATS_QUERY } from '@/api/pokemon/queries'

const { loading, result } = useQuery(POKEMON_STATS_QUERY, {
  name: props.pokemon?.name || props.id,
})

const pokemon = useResult(result)

const pokemonStats = computed(() => {
  return pokemon.value ? pokemon.value.stats : []
})

const parameters = computed(() => {
  return pokemonStats.value
    ? pokemonStats.value
        .map(({ base_stat }) => base_stat / 200)
        .map((ratio, index, ratios) => {
          const ratioAngle = ((2 * Math.PI) / ratios.length) * index
          return [
            50 + 50 * Math.cos(ratioAngle) * ratio,
            50 + 50 * Math.sin(ratioAngle) * ratio,
          ]
        })
    : [1, 1, 1, 1, 1, 1]
})

const points = computed(() => {
  return pokemonStats.value
    ? pokemonStats.value
        .map(({ base_stat }) => base_stat / 200)
        .map((ratio, index, ratios) => {
          const ratioAngle = ((2 * Math.PI) / ratios.length) * index
          return [
            50 + 50 * Math.cos(ratioAngle),
            50 + 50 * Math.sin(ratioAngle),
          ]
        })
    : [1, 1, 1, 1, 1, 1]
})

const styles = computed(() => ({
  clipPath: `polygon(
    ${points.value.map(([x, y]) => `${x}% ${y}%`).join(',')}
    )`,
}))

const stylesStats = computed(() => ({
  clipPath: `polygon(
    ${parameters.value.map(([x, y]) => `${x}% ${y}%`).join(',')}
    )`,
}))

watch(pokemonStats, (value) => {
  console.log(value)
})
</script>

<style lang="scss">
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
.PokemonStats {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.Radar {
  position: relative;
  width: 60%;
  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
}
.RadarBG {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(179, 179, 179, 0.5);
}
.Stats {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(16, 143, 255);
}
.RadarAxis {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(var(--axis-angle));
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 1px;
    transform: translateY(-50%);
    background: rgb(157, 165, 181);
  }
}
.RadarAxisPoint {
  transform: translate3d(-50%, -50%, 0) rotate(calc(var(--axis-angle) * -1));
  position: absolute;
  top: 50%;
  left: 100%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: pre;
}
.RadarAxisLabel {
  top: 50%;
  left: 100%;
  font-size: 10px;
}
</style>