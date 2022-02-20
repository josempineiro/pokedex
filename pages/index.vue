<template>
  <div class="HomePage">
    <NuxtLink to="/pokemon/1"> <PokedexIcon /></NuxtLink>
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
    duration: 500,
    mode: 'out-in',
  },
})

const router = useRouter()
onMounted(() => {
  setTimeout(() => {
    router.push({
      name: 'pokemon-id',
      params: { id: '1' },
    })
  }, 3000)
})
</script>

<style lang="scss">
@keyframes spin {
  0% {
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.3));
    opacity: 0;
  }
  25% {
    transform: scale(1.1);
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3));
    opacity: 1;
  }
  40% {
    transform: scale(1.1) rotate(15deg);
  }
  60% {
    transform: scale(1.1) rotate(-15deg);
  }
  75% {
    transform: scale(1.1);
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3));
    opacity: 1;
  }
  100% {
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.3));
    opacity: 0;
  }
}
.HomePage {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  .PokedexIcon {
    animation-name: spin;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-delay: 1s;
    opacity: 0;
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
</style>