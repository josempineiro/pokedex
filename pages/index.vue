<template>
  <div
    class="HomePage"
    @click="navigateToPokedex"
  >
    <button class="StartButton">
      <PokedexIcon />
    </button>
    <span class="LoadingMessage">Loading...</span>
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

function navigateToPokedex() {
  router.push({
    name: 'pokemon-id',
    params: { id: '1' },
  })
}

onMounted(() => {
  setTimeout(navigateToPokedex, 3000)
})
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
    animation-name: spin;
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

@keyframes loading {
  from {
    width: 0ch;
  }
  to {
    width: 10ch;
  }
}
.LoadingMessage {
  width: 0ch;
  white-space: pre;
  overflow: hidden;
  animation-delay: 1s;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: steps(10);
  animation-name: loading;
  font-family: 'Mozart';
}
</style>