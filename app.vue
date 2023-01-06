<template>
  <Html>
    <Head>
      <Title>Awesome Pokedex App</Title>
      <Meta charset="utf-8" />

      <meta
        name="title"
        content="Awesome Pokedex App"
      >
      <Meta
        name="description"
        content="Awesome Pokédex App built with Nuxt3 and free PokeAPI"
      />
      <Meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <Meta
        name="msapplication-TileColor"
        content="#d1092b"
      />
      <Meta
        name="msapplication-TileImage"
        content="/icons/Pokedex.svg"
      />
      <Meta
        name="theme-color"
        content="#d1092b"
      />
      <Link
        rel="manifest"
        href="/manifest.json"
      />
      <Meta
        name="google-site-verification"
        content="12SzhX8l1tk3jBwLdqfOAbsJ-5DaB-AWcHKd7nJICI8"
      />

      <!-- Open Graph / Facebook -->
      <meta
        property="og:type"
        content="website"
      >
      <meta
        property="og:url"
        content="https://pokedex.leman.dev/"
      >
      <meta
        property="og:title"
        content="Awesome Pokedex App"
      >
      <meta
        property="og:description"
        content="Awesome Pokédex App built with Nuxt3 and free PokeAPI"
      >
      <meta
        property="og:image"
        content="https://pokedex.leman.dev/images/preview.png"
      >

      <!-- Twitter -->
      <meta
        property="twitter:card"
        content="summary_large_image"
      >
      <meta
        property="twitter:url"
        content="https://pokedex.leman.dev/"
      >
      <meta
        property="twitter:title"
        content="Awesome Pokedex App"
      >
      <meta
        property="twitter:description"
        content="Awesome Pokédex App built with Nuxt3 and free PokeAPI"
      >
      <meta
        property="twitter:image"
        content="https://pokedex.leman.dev/images/preview.png"
      >
    </Head>
    <Body>
      <Social />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <Banner />
    </Body>
  </Html>
</template>

<script setup>
</script>
<style lang="scss">
html {
  color: var(--color-text);
}
</style>