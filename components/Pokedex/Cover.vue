<template>
  <div class="PokedexCoverScene">
    <div :class="[classes, open ? 'PokedexCover_open' : 'PokedexCover_close']">
      <div class="PokedexCoverFace PokedexCoverFace_front"></div>
      <div class="PokedexCoverFace PokedexCoverFace_back">CONTENT</div>
      <div class="PokedexCoverFace PokedexCoverFace_right"></div>
      <div class="PokedexCoverFace PokedexCoverFace_diagonal"></div>
      <div class="PokedexCoverFace PokedexCoverFace_left"></div>
      <div class="PokedexCoverFace PokedexCoverFace_top"></div>
      <div class="PokedexCoverFace PokedexCoverFace_bottom"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})
const classes = defineClasses('PokedexCover')
</script>

<style lang="scss">
.PokedexCoverScene {
  width: 100%;
  height: 100%;
  perspective: 2000px;
}

.PokedexCover {
  width: 90%;
  height: 100%;
  right: 10%;
  position: absolute;
  transform-style: preserve-3d;
  transform-origin: right;
  transition-property: transform, right;
  transition-duration: 1s;
  transition-timing-function: ease;
}
.PokedexCover_open {
  transform: rotateY(180deg);
  right: 0%;
}
.PokedexCover_close {
  transform: rotateY(0deg);
}

.PokedexCoverFace {
  position: absolute;
  border: 1px solid black;
  line-height: 200px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
  background: #d1092b;
}

.PokedexCoverFace_front {
  width: 100%;
  height: 100%;
  transform: rotateY(0deg) translateZ(5px);
  clip-path: polygon(0% 10%, 40% 10%, 60% 0%, 100% 0%, 100% 100%, 0 100%);
  &::before,
  &::after {
    content: '';
    z-index: 1;
    height: 1px;
    position: absolute;
    background-color: black;
  }
  &::before {
    width: 26%;
    top: -1px;
    right: 40%;
    transform: rotate(-40deg);
    transform-origin: right;
  }
  &::after {
    width: 40%;
    top: calc(10% - 1px);
    left: 0;
  }
}
.PokedexCoverFace_back {
  width: 100%;
  height: 100%;
  transform: rotateY(180deg) translateZ(5px);
  clip-path: polygon(0% 0%, 40% 0%, 60% 10%, 100% 10%, 100% 100%, 0 100%);
  &::before,
  &::after {
    content: '';
    z-index: 1;
    height: 1px;
    position: absolute;
    background-color: black;
  }
  &::before {
    width: 26%;
    top: -1px;
    left: 40%;
    transform: rotate(40deg);
    transform-origin: left;
  }
  &::after {
    width: 40%;
    top: calc(10% - 1px);
    right: 0;
  }
}
.PokedexCoverFace_right {
  width: 10px;
  height: 100%;
  transform: rotateY(90deg) translateX(-5px);
  left: 100%;
  transform-origin: left;
}
.PokedexCoverFace_diagonal {
  height: 10px;
  width: 40%;
  right: 40%;
  top: 0%;
  transform: rotateX(90deg) translateY(-5px) rotateY(-40deg);
  transform-origin: top right;
}
.PokedexCoverFace_left {
  width: 10px;
  height: 90%;
  transform: rotateY(-90deg) translateZ(5px);
  top: 10%;
}
.PokedexCoverFace_top {
  width: 40%;
  left: 60%;
  height: 10px;
  transform: rotateX(90deg) translateZ(5px);
}
.PokedexCoverFace_bottom {
  width: 100%;
  height: 10px;
  transform: rotateX(-90deg) translateZ(395px);
}
</style>