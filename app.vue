<template>
  <Html>
    <Head>
      <Title>Awesome Pokedex App</Title>
      <Meta charset="utf-8" />
      <Meta
        name="description"
        content="Awesome Pokédex App built with Nuxt3 and free PokeAPI"
      />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta name="msapplication-TileColor" content="#d1092b" />
      <Meta name="msapplication-TileImage" content="/icons/Pokedex.svg" />
      <Meta name="theme-color" content="#d1092b" />
      <Link rel="manifest" href="/manifest.json" />
      <Meta
        name="google-site-verification"
        content="12SzhX8l1tk3jBwLdqfOAbsJ-5DaB-AWcHKd7nJICI8"
      />
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