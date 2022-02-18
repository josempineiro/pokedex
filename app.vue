<template>
  <Html>
    <Head>
      <Title>Leman.dev</Title>
      <Meta name="description" content="Pokedex" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta name="msapplication-TileColor" content="#ffffff" />
      <Meta
        name="msapplication-TileImage"
        content="icons//ms-icon-144x144.png"
      />
      <Meta name="theme-color" content="#ffffff" />
    </Head>
    <Body>
      <NuxtLayout name="default">
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