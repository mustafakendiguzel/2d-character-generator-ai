<template>
  <nav class="flex mb-4 ml-4 sm:ml-8 md:ml-12 lg:ml-16" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li v-for="(item, index) in breadcrumbs" :key="index" class="inline-flex items-center">
        <router-link
          :to="item.path"
          class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
        >
          {{ item.name }}
        </router-link>
        <svg
          v-if="index < breadcrumbs.length - 1"
          class="w-6 h-6 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </li>
    </ol>
  </nav>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'BreadcrumbNavigation',
  setup() {
    const route = useRoute()

    const breadcrumbs = computed(() => {
      const pathArray = route.path.split('/').filter(Boolean)

      return [
        { name: 'Home', path: '/' },
        ...pathArray.map((segment, index) => ({
          name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
          path: '/' + pathArray.slice(0, index + 1).join('/')
        }))
      ]
    })

    return {
      breadcrumbs
    }
  }
}
</script>
