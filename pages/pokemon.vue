<template>
  <div :class="classes">
    <div class="Pokedex" @click="toggle">
      <div class="PokedexHeader">
        <Led class="BigLed" :on="!close" size="big" color="blue" />
        <div class="Leds">
          <Led class="ErrorLed" :on="!close" size="small" color="red" />
          <Led class="WarningLed" :on="!close" size="small" color="yellow" />
          <Led class="PowerLed" :on="!close" size="small" color="green" />
        </div>
      </div>
      <div class="PokedexPanel">
        <div class="DisplayFrame">
          <div class="Display">
            <div class="DisplayContent">
              <NuxtNestedPage />
            </div>
          </div>
        </div>
        <div class="Controls">
          <div class="CrossButton">
            <div class="Up" @click="prev"></div>
            <div class="Down" @click="next"></div>
            <div class="Left" @click="prev"></div>
            <div class="Right" @click="next"></div>
          </div>
        </div>
      </div>
      <div class="PokedexCoverWrapper">
        <PokedexCover :open="!close" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({})
const classes = defineClasses('PokedexPage')
definePageMeta({})
const router = useRouter()
const route = useRoute()
const next = () => {
  router.push(
    route.fullPath.replace(route.params.id, `${Number(route.params.id) + 1}`)
  )
}
const prev = () => {
  router.push(
    route.fullPath.replace(route.params.id, `${Number(route.params.id) - 1}`)
  )
}

const close = ref(false)

const toggle = () => {
  close.value = !close.value
}
</script>

<style lang="scss">
.PokedexCoverWrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 111;
}
.PokedexPage {
  padding: 64px;
  height: 100vh;
  display: flex;
  width: 100%;
  justify-content: center;
}
.Leds {
  display: flex;
  gap: 12px;
}
.Pokedex {
  background: #d1092b;
  border-radius: 4px;
  flex-basis: 50%;
  position: relative;
  max-width: 50vh;
  &::after {
    content: '';
    width: 10%;
    height: 90%;
    top: 10%;
    right: 0;
    background-image: linear-gradient(
      to right,
      #8b051b 20%,
      #e9657d 20%,
      #e9657d 40%,
      #d1092b 40%,
      #d1092b 80%,
      #8b051b 80%
    );
    position: absolute;
    border-width: 2px 0 0;
    border-color: black;
    border-style: solid;
    box-sizing: border-box;
  }
  .PokedexPanel {
    position: relative;
    top: 10%;
    height: 90%;
    width: 100%;
    padding-top: 25%;
    &::before {
      content: '';
      position: absolute;
      background: black;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 4px;
      clip-path: polygon(
        2px calc(10% + 2px),
        calc(40% + 1px) calc(10% + 2px),
        calc(60% + 1px) 2px,
        calc(100% - 2px) 2px,
        calc(100% - 2px) calc(100% - 2px),
        2px calc(100% - 2px)
      );
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background: #d1092b;
      width: 100%;
      height: 100%;

      border-radius: 2px;
      clip-path: polygon(
        4px calc(10% + 4px),
        calc(40% + 2px) calc(10% + 4px),
        calc(60% + 2px) 4px,
        calc(100% - 4px) 4px,
        calc(100% - 4px) calc(100% - 4px),
        4px calc(100% - 4px)
      );
    }
  }
  .PokedexCoverr {
    background: #d1092b;
    position: absolute;
    top: 10%;
    width: 100%;
    height: 90%;
    border-radius: 4px;
    background: #d1092b;
    transform: rotateY(180deg);
    clip-path: polygon(0% 10%, 40% 10%, 60% 0%, 100% 0%, 100% 100%, 0 100%);
    z-index: 11111;
    transition: transform 2s ease;
    transform-origin: right;
    display: flex;
    align-items: center;
    justify-content: center;
    &_close {
      transform: rotateY(0);
    }
    &::before {
      content: '';
      position: absolute;
      background: black;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      clip-path: polygon(
        2px calc(10% + 2px),
        calc(40% + 1px) calc(10% + 2px),
        calc(60% + 1px) 2px,
        calc(100% + 2px) 2px,
        calc(100% - 2px) calc(100% - 2px),
        2px calc(100% - 2px)
      );
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background: #d1092b;
      width: 100%;
      height: 100%;

      clip-path: polygon(
        4px calc(10% + 4px),
        calc(40% + 2px) calc(10% + 4px),
        calc(60% + 2px) 4px,
        calc(100% - 4px) 4px,
        calc(100% - 4px) calc(100% - 4px),
        4px calc(100% - 4px)
      );
    }
    .CoverContent {
      z-index: 1111;
    }
    &.PokedexCoverFront {
      backface-visibility: hidden;
    }
  }
}
.DisplayFrame {
  position: relative;
  padding: 30% 0;
  width: 80%;
  z-index: 1111;
  top: 0;
  left: 0;
  padding: 8%;
  border-radius: 4px;
  margin: 0 10%;
  background: #dedede;
  overflow: hidden;
  display: flex;
  &::after {
    content: '';
    bottom: 0;
    left: 0;
    border-width: 16px;
    border-color: transparent;
    border-style: solid;
    position: absolute;
    border-top-color: #d1092b;
    transform: translate3d(-16px, 16px, 0) rotate(45deg);
  }
  .Display {
    background: black;
    overflow: hidden;
    border-radius: 2px;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
      content: '';
      display: block;
      padding-top: 100%;
      width: 100%;
    }
    .DisplayContent {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.Controls {
  justify-content: flex-end;
  display: flex;
  position: relative;
  z-index: 1;
  margin: 10%;
  width: 80%;
  margin-top: 10%;
}
.CrossButton {
  position: relative;
  height: 100px;
  width: 100px;
  background-image: linear-gradient(
      to right,
      transparent 33%,
      black 33%,
      black 66%,
      transparent 66%
    ),
    linear-gradient(
      to bottom,
      transparent 33%,
      black 33%,
      black 66%,
      transparent 66%
    );
  .Up,
  .Bottom,
  .Left,
  .Right {
    position: absolute;
    width: 33px;
    height: 33px;
    background: rgba(255, 255, 255, 0.05);
    border: 5px solid transparent;
    border-radius: 999px;
    cursor: pointer;
  }
  .Up {
    top: 0;
    left: 33%;
  }
  .Bottom {
    bottom: 0;
    left: 33%;
  }
  .Left {
    top: 33%;
    left: 0;
  }
  .Right {
    top: 33%;
    right: 0;
  }
}
.PokedexHeader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 32px;
  gap: 32px;
  align-items: flex-start;
}

@media screen and (max-width: 768px) {
  .PokedexPage {
    padding: 16px;
  }
  .Pokedex {
    flex-basis: 100%;
  }
}
</style>