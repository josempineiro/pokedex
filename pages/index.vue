<template>
  <div class="Home">
    <PokedexIcon />
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
})

const router = useRouter()
onMounted(() => {
  setTimeout(() => {
    router.push({
      name: 'pokemon-id',
      params: { id: '1' },
    })
  }, 2000)
})
</script>

<style lang="scss">
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.Home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.Loader {
  animation-name: spin;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
</style>