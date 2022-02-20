<template>
  <div class="HomePage" @click="playBeep">
    <button class="StartButton" @click="playBeep">
      <PokedexIcon :class="{ started }" />
    </button>
    <span class="StartMessage">Click to start...</span>
    <audio ref="beep" @ended="ended">
      <source src="~/assets/audio/beep.mp3" type="audio/mp3" />
    </audio>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
  key: (route) => {
    console.log(route)
    return route.fullPath
  },
  pageTransition: {
    appear: true,
    name: 'HomePage',
    duration: 5000,
    mode: 'out-in',
  },
})

const router = useRouter()
const beep = ref(null)
const started = ref(false)

function playBeep() {
  return beep.value.play()
}

function navigateToPokedex() {
  router.push({
    name: 'pokemon-id',
    params: { id: '1' },
  })
}

function start() {
  started.value = true
  playBeep()
}

function ended() {
  setTimeout(navigateToPokedex, 500)
}
</script>

<style lang="scss">
@keyframes spin {
  0% {
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.3));
    transform: scale(1);
  }
  2% {
    transform: scale(1.1);
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3));
  }
  4% {
    transform: scale(1.1) rotate(15deg);
  }
  6% {
    transform: scale(1.1) rotate(-15deg);
  }
  8% {
    transform: scale(1.1);
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3));
  }
  10% {
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.3));
    transform: scale(1);
  }
}

@keyframes active {
  33% {
    transform: scale(1.1) rotate(-15deg);
  }
  66% {
    transform: scale(1.1) rotate(15deg);
  }
  100% {
    transform: scale(1) rotate(0);
  }
}
.HomePage {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  .StartButton {
    border: none;
    padding: none;
    outline: none;
    background: none;
    cursor: pointer;
    transition-property: transform, filter;
    transition-timing-function: ease;
    transition-duration: 1s;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
  }
  .StartButton:not(:hover) {
    animation-name: spin;
  }

  .StartButton:hover:not(:focus) {
    animation-name: none;
    transform: scale(1.1);
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3));
  }

  .StartButton:focus {
    animation-delay: 0s;
    animation-name: active;
    animation-iteration-count: 1;
    animation-duration: 1s;
  }
}

.HomePage-enter-active,
.HomePage-leave-active {
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}

.HomePage-enter-from,
.HomePage-leave-to {
  opacity: 0;
}

@keyframes write {
  from {
    width: 0ch;
  }
  to {
    width: 17ch;
  }
}
.StartMessage {
  width: 0ch;
  white-space: pre;
  overflow: hidden;
  animation-delay: 2s;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: steps(17);
  animation-name: write;
  font-family: 'Mozart';
}
</style>