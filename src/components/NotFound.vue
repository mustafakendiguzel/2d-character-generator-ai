<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <img src="" alt="404 Not Found" class="w-64 h-64 mb-8" />
    <h1 class="text-4xl font-bold text-gray-800 mb-2">404</h1>
    <p class="text-xl text-gray-600 mb-8">Sayfa bulunamadı</p>
    <router-link
      to="/"
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      Ana Sayfaya Dön
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>
