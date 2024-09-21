<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import FooterPage from '@/components/FooterPage.vue'
</script>

<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <FooterPage />
  </div>
</template>

<style scoped></style>
