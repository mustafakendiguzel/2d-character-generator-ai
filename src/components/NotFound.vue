<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <img src="@/assets/icons/spiderman.png" alt="404 Not Found" class="w-64 h-64 mb-8" />
    <p class="text-xl text-white mb-8">Page not found</p>
    <router-link
      to="/"
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      Go To Home
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>
