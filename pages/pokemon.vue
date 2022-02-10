<template>
  <div :class="classes">
    <div class="Pokedex" @click="toggle">
      <div :class="!close ? 'Led Led_on' : 'Led'"></div>
      <div :class="!close ? 'Led Led_1 Led_1_on' : 'Led Led_1'"></div>
      <div :class="!close ? 'Led Led_2 Led_2_on' : 'Led Led_2'"></div>
      <div :class="!close ? 'Led Led_3 Led_3_on' : 'Led Led_3'"></div>
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
      <div
        :class="close ? 'PokedexCover PokedexCover_close' : 'PokedexCover'"
      ></div>
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
.PokedexPage {
  padding: 64px;
  height: 100vh;
  overflow: hidden;
  display: flex;
  width: 100%;
  justify-content: center;
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
    width: 90%;
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
  .PokedexCover {
    background: #d1092b;
    position: absolute;
    top: 10%;
    left: 10%;
    transform: translateX(100%);
    width: 90%;
    height: 90%;
    border-radius: 4px;
    background: #d1092b;
    clip-path: polygon(0% 0%, 40% 0%, 60% 10%, 100% 10%, 100% 100%, 0 100%);
    z-index: 11111;
    transition: transform 2s ease;
    &_close {
      transform: translateX(-46px) rotateY(-180deg);
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
        2px 2px,
        calc(40% - 1px) 2px,
        calc(60% - 1px) calc(10% + 2px),
        calc(100% - 2px) calc(10% + 2px),
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
        4px 4px,
        calc(40% - 2px) 4px,
        calc(60% - 2px) calc(10% + 4px),
        calc(100% - 4px) calc(10% + 4px),
        calc(100% - 4px) calc(100% - 4px),
        4px calc(100% - 4px)
      );
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
.Led {
  position: absolute;
  width: 75px;
  height: 75px;
  background: #186a9c;
  border-radius: 99px;
  border: 2px solid black;
  border-radius: 100%;
  top: 30px;
  left: 50px;
  transition: all 0.2s ease;
  &::before {
    transition: all 0.2s ease;
    content: '';
    position: absolute;
    top: 20%;
    left: 20%;
    width: 50%;
    height: 50%;
    border-radius: 99px;
    background: #76accd;
  }
  &::after {
    transition: all 0.2s ease;
    content: '';
    position: absolute;
    top: 32%;
    left: 32%;
    width: 50%;
    height: 50%;
    border-radius: 99px;
    background: #186a9c;
  }
  &_on {
    background: #70b0d7;
    box-shadow: 0px 0px 12px 15px rgb(247 162 227 / 50%),
      inset 0px 0px 12px 2px #c9ee58;
    &::before {
      background: #dce4e9;
    }
    &::after {
      background: #76accd;
    }
  }
}
.Led_1 {
  position: absolute;
  width: 15px;
  height: 15px;
  background: #575756;
  border-radius: 99px;
  border: 1px solid black;
  border-radius: 100%;
  top: 30px;
  left: 150px;
  transition: background, box-shadow 0.2s ease;
  transition-property: background, box-shadow;
  &::before {
    transition: background, box-shadow 0.2s ease;
    transition-property: background, box-shadow;
    content: '';
    position: absolute;
    top: 20%;
    left: 20%;
    width: 50%;
    height: 50%;
    border-radius: 99px;
    background: rgb(114, 114, 114);
  }
  &::after {
    transition: background, box-shadow 0.2s ease;
    transition-property: background, box-shadow;
    content: '';
    position: absolute;
    top: 32%;
    left: 32%;
    width: 50%;
    height: 50%;
    border-radius: 99px;
    background: #575756;
  }
  &_on {
    background: #99061d;
    box-shadow: 0px 0px 4px 4px #99061d, inset 0px 0px 4px 2px #99061d;
    &::before {
      background: hsl(41, 87%, 82%);
    }
    &::after {
      background: #99061d;
    }
  }
}
.Led_2 {
  position: absolute;
  width: 15px;
  height: 15px;
  background: #575756;
  border-radius: 99px;
  border: 1px solid black;
  border-radius: 100%;
  top: 30px;
  left: 180px;
  transition: background, box-shadow 0.2s ease;
  transition-property: background, box-shadow;
  &::before {
    transition: background, box-shadow 0.2s ease;
    transition-property: background, box-shadow;
    content: '';
    position: absolute;
    top: 20%;
    left: 20%;
    width: 50%;
    height: 50%;
    border-radius: 99px;
    background: rgb(114, 114, 114);
  }
  &::after {
    transition: background, box-shadow 0.2s ease;
    transition-property: background, box-shadow;
    content: '';
    position: absolute;
    top: 32%;
    left: 32%;
    width: 50%;
    height: 50%;
    border-radius: 99px;
    background: #575756;
  }
  &_on {
    background: #eebe58;
    box-shadow: 0px 0px 4px 4px #f9ce72, inset 0px 0px 4px 2px #eebe58;
    &::before {
      background: hsl(41, 87%, 82%);
    }
    &::after {
      background: #eebe58;
    }
  }
}
.Led_3 {
  position: absolute;
  width: 15px;
  height: 15px;
  background: #575756;
  border-radius: 99px;
  border: 1px solid black;
  border-radius: 100%;
  top: 30px;
  left: 210px;
  transition: background, box-shadow 0.2s ease;
  transition-property: background, box-shadow;
  &::before {
    transition: background, box-shadow 0.2s ease;
    transition-property: background, box-shadow;
    content: '';
    position: absolute;
    top: 20%;
    left: 20%;
    width: 50%;
    height: 50%;
    border-radius: 99px;
    background: rgb(114, 114, 114);
  }
  &::after {
    transition: background, box-shadow 0.2s ease;
    transition-property: background, box-shadow;
    content: '';
    position: absolute;
    top: 32%;
    left: 32%;
    width: 50%;
    height: 50%;
    border-radius: 99px;
    background: #575756;
  }
  &_on {
    background: #387d43;
    box-shadow: 0px 0px 4px 4px #387d43, inset 0px 0px 4px 2px #387d43;
    &::before {
      background: hsl(41, 87%, 82%);
    }
    &::after {
      background: #387d43;
    }
  }
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