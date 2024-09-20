<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useCreditStore } from '@/stores/credit'

const windowWidth = ref(window.innerWidth)
const isMenuOpen = ref(false)

const isMobile = computed(() => windowWidth.value < 768)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
  if (!isMobile.value) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth)
})

const isModalOpen = ref(false)
const feedbackName = ref('')
const feedbackText = ref('')

const openFeedbackModal = () => {
  isModalOpen.value = true
}

const closeFeedbackModal = () => {
  isModalOpen.value = false
  feedbackName.value = ''
  feedbackText.value = ''
}

const submitFeedback = () => {
  // Burada geri bildirimi gönderme işlemini yapabilirsiniz
  console.log('Feedback sent:', {
    name: feedbackName.value,
    feedback: feedbackText.value
  })
  closeFeedbackModal()
}

const creditStore = useCreditStore()
const remainingCredits = computed(() => creditStore.remainingCredits)
</script>

<template>
  <div class="navbar bg-base-100 mt-2">
    <div class="flex-1 items-center ml-2 md:ml-20">
      <RouterLink to="/" class="flex items-center">
        <img src="@/assets/logo3.png" alt="Logo" class="mr-4 h-8 w-10 lg:h-12 lg:w-12" />
        <span class="text-base lg:text-lg font-semibold md:hidden xl:inline 2xl:inline"
          >2D Character Generator AI</span
        >
      </RouterLink>

      <div class="hidden md:flex lg:ml-8 space-x-4">
        <RouterLink to="/pricing" class="btn btn-ghost text-base">Pricing</RouterLink>
        <RouterLink to="/collection" class="btn btn-ghost text-base">Collection</RouterLink>
      </div>
    </div>

    <div class="flex-none hidden md:flex items-center space-x-2 mr-4">
      <button @click="openFeedbackModal" class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
    </div>

    <button class="btn btn-primary hidden md:inline-flex mr-2">
      BUY Credit
      <span class="ml-2 badge badge-outline text-white bg-black">{{ remainingCredits }}</span>
    </button>

    <div class="flex-none hidden md:block mr-10">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              alt="User avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li><a class="justify-between text-right">Profile</a></li>
          <li><a class="text-right">Settings</a></li>
          <li><a class="text-right">Logout</a></li>
        </ul>
      </div>
    </div>

    <button v-if="isMobile" @click="toggleMenu" class="md:hidden btn btn-ghost">
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
    </button>
  </div>

  <div
    v-if="isMobile && isMenuOpen"
    class="md:hidden flex flex-col items-start bg-base-300 p-4 space-y-4 rounded-lg shadow-lg mx-4"
  >
    <RouterLink
      to="/pricing"
      class="btn btn-ghost text-base text-white hover:text-primary w-full text-left"
      >Pricing</RouterLink
    >
    <RouterLink
      to="/community"
      class="btn btn-ghost text-base text-white hover:text-primary w-full text-left"
      >Community</RouterLink
    >
    <RouterLink
      to="/collection"
      class="btn btn-ghost text-base text-white hover:text-primary w-full text-left"
      >Collection</RouterLink
    >
    <RouterLink
      to="/profile"
      class="btn btn-ghost text-base text-white hover:text-primary w-full text-left"
      >Profile</RouterLink
    >
    <RouterLink
      to="/settings"
      class="btn btn-ghost text-base text-white hover:text-primary w-full text-left"
      >Settings</RouterLink
    >
    <button class="btn btn-primary w-full">
      BUY Credit
      <span class="ml-2 badge badge-outline text-white">{{ remainingCredits }}</span>
    </button>
    <button
      @click="openFeedbackModal"
      class="hidden sm:flex btn btn-ghost text-base text-white hover:text-primary w-full text-left items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      Feedback
    </button>
    <button class="btn btn-ghost text-base text-white hover:text-primary text-left w-full">
      Logout</button
    >n
  </div>

  <!-- Feedback Modal -->
  <div
    v-if="isModalOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-base-300 p-6 rounded-lg shadow-lg w-96">
      <h2 class="text-xl font-bold mb-4 text-white">Feedback</h2>
      <input
        v-model="feedbackName"
        type="text"
        placeholder="Your Name"
        class="w-full p-2 mb-4 border rounded bg-base-300 text-white placeholder-gray-400"
      />
      <textarea
        v-model="feedbackText"
        placeholder="Your Feedback"
        class="w-full p-2 mb-4 border rounded h-32 bg-base-300 text-white placeholder-gray-400"
      ></textarea>
      <div class="flex justify-end">
        <button @click="closeFeedbackModal" class="btn btn-ghost mr-2 text-white">Cancel</button>
        <button @click="submitFeedback" class="btn btn-primary">Send</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 640px) {
  .navbar {
    flex-wrap: wrap;
  }
}

.dropdown-content {
  min-width: 200px;
  max-width: 300px;
  width: auto;
}
</style>
