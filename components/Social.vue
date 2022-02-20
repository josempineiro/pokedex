<template>
  <ul :class="classes">
    <li v-for="item in social" :key="item.href">
      <a :href="item.href" target="_blank">
        <IconGithub v-if="item.icon === 'Github'" class="SocialIcon" />
        <IconLinkedIn v-else-if="item.icon === 'LinkedIn'" class="SocialIcon" />
      </a>
    </li>
  </ul>
</template>

<script setup>
const classes = defineClasses('Social')
const {
  data: social,
  pending,
  refresh,
} = await useAsyncData('social', () => $fetch(`/api/social`))
</script>

<style lang="scss">
.Social {
  position: fixed;
  right: 0;
  top: 0;
  padding: 1rem;
  display: flex;
  gap: 1rem;
}
.SocialIcon {
  width: 2rem;
  height: 2rem;
}
</style>