<template>
  <div class="container mx-auto py-8">
    <div class="flex justify-center mb-8">
      <div class="relative w-64 h-12 bg-gray-200 rounded-full">
        <button
          @click="selectGenerator('generator')"
          :class="buttonClass('generator')"
          class="absolute top-0 left-0 w-1/2 h-full rounded-full z-10 transition-all duration-300"
        >
          Generator
        </button>
        <button
          @click="selectGenerator('deep-generator')"
          :class="buttonClass('deep-generator')"
          class="absolute top-0 right-0 w-1/2 h-full rounded-full z-10 transition-all duration-300"
        >
          Deep Generator
        </button>
        <div
          class="absolute top-0 h-full w-1/2 bg-blue-500 rounded-full transition-all duration-300 ease-in-out"
          :style="{ left: selectedGenerator === 'generator' ? '0' : '50%' }"
        ></div>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div
        v-if="selectedGenerator === 'generator'"
        key="generator"
        class="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div
          class="p-6 rounded-lg hover:bg-gray-100 cursor-pointer bg-gray-800 flex flex-col h-full"
        >
          <div class="flex items-center mb-4">
            <img src="@/assets/icons/character.png" alt="Character Icon" class="w-12 h-12 mr-2" />
            <h2 class="text-2xl font-bold">Character Generation</h2>
          </div>
          <p class="flex-grow">
            Create custom 2D characters for your game using our AI-driven character generator.
          </p>
        </div>
        <div
          class="p-6 rounded-lg hover:bg-gray-100 cursor-pointer bg-gray-800 flex flex-col h-full"
        >
          <div class="flex items-center mb-4">
            <img src="@/assets/icons/item.png" alt="Item Icon" class="w-12 h-12 mr-2" />
            <h2 class="text-2xl font-bold">Item Generator</h2>
          </div>
          <p class="flex-grow">Generate unique items for your game with ease.</p>
        </div>
        <div
          class="p-6 rounded-lg hover:bg-gray-100 cursor-pointer bg-gray-800 flex flex-col h-full"
        >
          <div class="flex items-center mb-4">
            <img src="@/assets/icons/background.png" alt="Background Icon" class="w-12 h-12 mr-2" />
            <h2 class="text-2xl font-bold">Background Generator (Soon)</h2>
          </div>
          <p class="flex-grow">Coming soon: Create stunning backgrounds for your game.</p>
        </div>
        <div
          class="p-6 rounded-lg hover:bg-gray-100 cursor-pointer bg-gray-800 flex flex-col h-full"
        >
          <div class="flex items-center mb-4">
            <img src="@/assets/icons/icon.png" alt="Icon and Symbol Icon" class="w-12 h-12 mr-2" />
            <h2 class="text-2xl font-bold">Icon and Symbol Generator (Soon)</h2>
          </div>
          <p class="flex-grow">Coming soon: Generate icons and symbols for your game.</p>
        </div>
      </div>
      <div v-else key="deep-generator" class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          class="p-6 rounded-lg hover:bg-gray-100 cursor-pointer bg-gray-800 flex flex-col h-full"
        >
          <div class="flex items-center mb-4">
            <img src="@/assets/icons/background.png" alt="Background Icon" class="w-12 h-12 mr-2" />
            <h2 class="text-2xl font-bold">Single Character (Soon)</h2>
          </div>
          <p class="flex-grow">Coming soon: Create stunning backgrounds for your game.</p>
        </div>
        <div
          class="p-6 rounded-lg hover:bg-gray-100 cursor-pointer bg-gray-800 flex flex-col h-full"
        >
          <div class="flex items-center mb-4">
            <img src="@/assets/icons/icon.png" alt="Icon and Symbol Icon" class="w-12 h-12 mr-2" />
            <h2 class="text-2xl font-bold">Icon and Symbol Generator (Soon)</h2>
          </div>
          <p class="flex-grow">Coming soon: Generate icons and symbols for your game.</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'GeneratePage',
  data() {
    return {
      selectedGenerator: 'generator'
    }
  },
  methods: {
    selectGenerator(generator) {
      this.selectedGenerator = generator
    },
    buttonClass(generator) {
      return this.selectedGenerator === generator ? 'text-white' : 'text-black'
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
button {
  position: relative;
  z-index: 10;
  transition: color 0.3s;
}
</style>
