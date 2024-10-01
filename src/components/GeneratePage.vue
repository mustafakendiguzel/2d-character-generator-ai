<template>
  <div class="container mx-auto py-8">
    <div class="flex justify-center mb-8">
      <div class="relative w-64 h-12 bg-gray-200 rounded-full">
        <button
          @click="selectGenerator('generator')"
          :class="buttonClass('generator')"
          class="absolute border-gray-200 top-0 left-0 w-1/2 h-full rounded-full z-10 transition-all duration-300"
        >
          Generator
        </button>
        <button
          @click="selectGenerator('deep-generator')"
          :class="buttonClass('deep-generator')"
          class="absolute border-gray-200 top-0 right-0 w-1/2 h-full rounded-full z-10 transition-all duration-300"
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
          class="p-6 rounded-lg hover:bg-gray-700 cursor-pointer bg-gray-800 flex flex-col h-full relative"
        >
          <div class="flex items-center mb-4">
            <img src="@/assets/icons/character.png" alt="Character Icon" class="w-12 h-12 mr-2" />
            <h2 class="text-2xl font-bold text-slate-300">Character Generation</h2>
          </div>
          <p class="flex-grow">
            Create custom 2D characters for your game using our AI-driven character generator.
          </p>
          <div class="absolute top-0 right-0 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              @mouseover="showModal = 'character'"
              @mouseleave="showModal = null"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div
              v-if="showModal === 'character'"
              class="absolute top-0 right-0 mt-2 mr-2 w-64 bg-gray-800 bg-opacity-100 p-4 rounded-lg shadow-lg transition-opacity duration-300 opacity-90 z-20"
              :style="{ transform: 'translate(50%, -10%)' }"
            >
              <h3 class="text-lg font-bold">Character Generation</h3>
              <p>Detailed information about character generation.</p>
              <img src="" alt="Character Details" class="mt-2" />
            </div>
          </div>
        </div>
        <div
          class="p-6 rounded-lg hover:bg-gray-700 cursor-pointer bg-gray-800 flex flex-col h-full relative"
        >
          <div class="flex items-center mb-4">
            <img src="@/assets/icons/item.png" alt="Item Icon" class="w-12 h-12 mr-2" />
            <h2 class="text-2xl font-bold text-slate-300">Item Generator</h2>
          </div>
          <p class="flex-grow">Generate unique items for your game with ease.</p>
          <div class="absolute top-0 right-0 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              @mouseover="showModal = 'item'"
              @mouseleave="showModal = null"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div
              v-if="showModal === 'item'"
              class="absolute top-0 right-0 mt-2 mr-2 w-64 bg-gray-800 bg-opacity-100 p-4 rounded-lg shadow-lg transition-opacity duration-300 opacity-90 z-20"
              :style="{ transform: 'translate(50%, -10%)' }"
            >
              <h3 class="text-lg font-bold">Item Generator</h3>
              <p>Detailed information about item generation.</p>
              <img src="" alt="Item Details" class="mt-2" />
            </div>
          </div>
        </div>
        <div
          class="p-6 rounded-lg hover:bg-gray-700 cursor-pointer bg-gray-800 flex flex-col h-full relative"
        >
          <div class="flex items-center mb-4">
            <img src="@/assets/icons/background.png" alt="Background Icon" class="w-12 h-12 mr-2" />
            <h2 class="text-2xl font-bold text-slate-300">Background Generator (Soon)</h2>
          </div>
          <p class="flex-grow">Coming soon: Create stunning backgrounds for your game.</p>
          <div class="absolute top-0 right-0 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              @mouseover="showModal = 'background'"
              @mouseleave="showModal = null"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div
              v-if="showModal === 'background'"
              class="absolute top-0 right-0 mt-2 mr-2 w-64 bg-gray-800 bg-opacity-100 p-4 rounded-lg shadow-lg transition-opacity duration-300 opacity-90 z-20"
              :style="{ transform: 'translate(50%, -10%)' }"
            >
              <h3 class="text-lg font-bold">Background Generator</h3>
              <p>Detailed information about background generation.</p>
              <img src="" alt="Background Details" class="mt-2" />
            </div>
          </div>
        </div>
        <div
          class="p-6 rounded-lg hover:bg-gray-700 cursor-pointer bg-gray-800 flex flex-col h-full relative"
        >
          <div class="flex items-center mb-4">
            <img src="@/assets/icons/icon.png" alt="Icon and Symbol Icon" class="w-12 h-12 mr-2" />
            <h2 class="text-2xl font-bold text-slate-300">Icon and Symbol Generator (Soon)</h2>
          </div>
          <p class="flex-grow">Coming soon: Generate icons and symbols for your game.</p>
          <div class="absolute top-0 right-0 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              @mouseover="showModal = 'icon'"
              @mouseleave="showModal = null"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div
              v-if="showModal === 'icon'"
              class="absolute top-0 right-0 mt-2 mr-2 w-64 bg-gray-800 bg-opacity-100 p-4 rounded-lg shadow-lg transition-opacity duration-300 opacity-90 z-20"
              :style="{ transform: 'translate(50%, -10%)' }"
            >
              <h3 class="text-lg font-bold">Icon and Symbol Generator</h3>
              <p>Detailed information about icon and symbol generation.</p>
              <img src="" alt="Icon Details" class="mt-2" />
            </div>
          </div>
        </div>
      </div>
      <div v-else key="deep-generator" class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          class="p-8 rounded-lg hover:bg-gray-700 cursor-pointer bg-gray-800 flex flex-col h-full relative"
        >
          <div class="flex items-center mb-4">
            <img src="@/assets/icons/background.png" alt="Background Icon" class="w-12 h-12 mr-2" />
            <h2 class="text-2xl font-bold text-slate-300">Single Character (Soon)</h2>
          </div>
          <p class="flex-grow">Coming soon: Create stunning backgrounds for your game.</p>
          <div class="absolute top-0 right-0 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              @mouseover="showModal = 'single-character'"
              @mouseleave="showModal = null"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div
              v-if="showModal === 'single-character'"
              class="absolute top-0 right-0 mt-2 mr-2 w-64 bg-gray-800 bg-opacity-100 p-4 rounded-lg shadow-lg transition-opacity duration-300 opacity-90 z-20"
              :style="{ transform: 'translate(50%, -10%)' }"
            >
              <h3 class="text-lg font-bold">Single Character</h3>
              <p>Detailed information about single character generation.</p>
              <img src="" alt="Single Character Details" class="mt-2" />
            </div>
          </div>
        </div>
        <div
          class="p-8 rounded-lg hover:bg-gray-700 cursor-pointer bg-gray-800 flex flex-col h-full relative"
        >
          <div class="flex items-center mb-4">
            <img src="@/assets/icons/icon.png" alt="Icon and Symbol Icon" class="w-12 h-12 mr-2" />
            <h2 class="text-2xl font-bold text-slate-300">Icon and Symbol Generator (Soon)</h2>
          </div>
          <p class="flex-grow">Coming soon: Generate icons and symbols for your game.</p>
          <div class="absolute top-0 right-0 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              @mouseover="showModal = 'deep-icon'"
              @mouseleave="showModal = null"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div
              v-if="showModal === 'deep-icon'"
              class="absolute top-0 right-2 mt-2 mr-2 w-64 bg-gray-800 bg-opacity-100 p-4 rounded-lg shadow-lg transition-opacity duration-300 opacity-90 z-20"
              :style="{ transform: 'translate(50%, -10%)' }"
            >
              <h3 class="text-lg font-bold">Icon and Symbol Generator</h3>
              <p>Detailed information about icon and symbol generation.</p>
              <img src="" alt="Icon Details" class="mt-2" />
            </div>
          </div>
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
      selectedGenerator: 'generator',
      showModal: null
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
.hover\:bg-gray-700:hover {
  background-color: #242e3d;
}
</style>
