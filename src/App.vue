<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import FooterPage from '@/components/FooterPage.vue'
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation.vue'
</script>

<template>
  <div>
    <Navbar />
    <div class="container mx-auto py-8">
      <BreadcrumbNavigation />
      <router-view></router-view>
    </div>
    <FooterPage />
  </div>
</template>

<style scoped></style>
