export default defineNuxtRouteMiddleware((to, from) => {
  if (to.fullPath === '/') {
    return navigateTo({
      name: 'pokemon-id',
      params: { id: '1' },
    })
  }
})
