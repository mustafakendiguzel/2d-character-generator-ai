<template>
  <div class="character-draw-page">
    <h1 class="text-4xl font-bold text-center my-8">Karakter Çizim Sayfası</h1>
    <div class="flex justify-center">
      <DrawArea class="w-4/5" />
    </div>
  </div>
</template>

<script>
import DrawArea from '@/components/DrawArea.vue'

export default {
  name: 'CharacterDrawPage',
  components: {
    DrawArea
  }
}
</script>

<style scoped></style>
