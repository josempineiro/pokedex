<template>
  <div :class="classes">
    <h1 @click="goPokedex">Index</h1>
  </div>
</template>

<script setup>
const router = useRouter()
const goPokedex = () => {
  router.push({
    name: 'pokemon-id',
    params: { id: '1' },
  })
}
</script>

<style lang="css">
</style>