<template>
  <div class="container mx-auto py-8 px-4">
    <div class="flex flex-col md:flex-row justify-center items-stretch gap-6">
      <div
        v-for="(box, index) in boxes"
        :key="index"
        class="w-full md:w-2/3 p-6 rounded-lg bg-gray-800 hover:bg-gray-700 cursor-pointer flex flex-col h-auto md:h-[500px] relative overflow-hidden group"
        @click="handleBoxClick(box)"
      >
        <div v-if="!box.isOpen" class="h-full flex flex-col">
          <div class="flex items-center mb-4">
            <h2 class="text-2xl font-bold text-slate-300">{{ box.title }}</h2>
          </div>
          <p class="flex-grow text-white text-lg">{{ box.description }}</p>
          <img
            v-if="box.image"
            :src="box.image"
            :alt="box.title"
            class="mt-4 w-full h-auto max-h-[300px] object-contain rounded-lg"
          />
        </div>

        <!-- Yeni hover kutusu -->
        <div
          v-if="box.hoverImage"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-in-out translate-x-full group-hover:translate-x-0 hidden md:block"
        >
          <div class="bg-gray-300 group-hover:bg-opacity-30 p-4 rounded-l-lg shadow-lg">
            <img
              :src="box.hoverImage"
              :alt="box.title + ' sonuç'"
              class="w-32 h-32 object-cover rounded"
            />
          </div>
        </div>

        <transition name="split">
          <div
            v-if="box.isAdvanced && box.isOpen"
            class="absolute inset-0 bg-gray-800 flex flex-col"
          >
            <div class="h-1/2 border-b border-white p-4 flex flex-col justify-center items-center">
              <h3 class="text-xl font-bold text-white mb-2">{{ box.subOptions[0].title }}</h3>
              <p class="text-white text-center mb-4">{{ box.subOptions[0].description }}</p>
              <button
                @click.stop="handleSubOptionClick(box.subOptions[0])"
                class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Select
              </button>
            </div>
            <div class="h-1/2 p-4 flex flex-col justify-center items-center">
              <h3 class="text-xl font-bold text-white mb-2">{{ box.subOptions[1].title }}</h3>
              <p class="text-white text-center mb-4">{{ box.subOptions[1].description }}</p>
              <button
                @click.stop="handleSubOptionClick(box.subOptions[1])"
                class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Select
              </button>
            </div>
            <button
              @click.stop="closeBox(box)"
              class="absolute top-2 right-2 bg-gray-600 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-full"
            >
              X
            </button>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwoColumnBoxes',
  props: {
    boxes: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every((box) => 'hoverImage' in box)
      }
    }
  },
  methods: {
    handleBoxClick(box) {
      if (box.isAdvanced) {
        box.isOpen = !box.isOpen
      } else {
        this.$emit('boxClick', box)
      }
    },
    handleSubOptionClick(subOption) {
      this.$emit('subOptionClick', subOption)
    },
    closeBox(box) {
      box.isOpen = false
    }
  },
  emits: ['boxClick', 'subOptionClick']
}
</script>

<style scoped>
@media (min-width: 768px) {
  .container {
    max-width: 900px;
  }
}

.split-enter-active,
.split-leave-active {
  transition: all 0.5s;
}
.split-enter-from,
.split-leave-to {
  transform: scaleY(0);
  opacity: 0;
}

.group:hover .group-hover\:translate-x-0 {
  transform: translateY(-50%) translateX(0);
  transition-delay: 100ms;
}

.shadow-lg {
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Yeni stil */
.group:not(:hover) .translate-x-full {
  transform: translateY(-50%) translateX(calc(100% - 10px));
}

@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
