<template>
  <Html>
    <Head>
      <Title>Awesome Pokedex App</Title>
      <Meta
        name="description"
        content="Awesome Pokédex App built with Nuxt3 and free PokeAPI"
      />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta name="msapplication-TileColor" content="var(--color-primary-rgb)" />
      <Meta
        name="msapplication-TileImage"
        content="icons//ms-icon-144x144.png"
      />
      <Meta name="theme-color" content="#d1092b" />
      <Link rel="manifest" href="/manifest.json" />
    </Head>
    <Body>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script setup>
</script>
<style lang="scss">
html {
  color: var(--color-primary);
}
</style>