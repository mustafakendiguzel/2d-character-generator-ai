<template>
  <div>
    <div class="relative min-h-screen overflow-clip text-lg leading-8">
      <div class="relative">
        <section
          class="container relative mx-auto mb-12 mt-8 grid grid-cols-1 gap-12 px-8 sm:mt-16 md:grid-cols-2 lg:mt-24 xl:max-w-screen-lg"
        >
          <div class="mb-12 md:mb-0">
            <h1 class="text-5xl font-bold tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl">
              Generate 2D character with a click of a button
            </h1>
            <p class="mb-8 mt-6 text-lg leading-8">
              "Create custom 2D characters for your game using our AI-driven character generator.
              Whether you need heroes, villains, or NPCs, our tool helps you craft detailed, fully
              customizable characters ready for any 2D game environment. Build your unique world
              with ease and bring your game to life!"
            </p>
            <div class="relative flex justify-center md:justify-start">
              <a class="btn-info btn" href="/generate">Get started</a>
            </div>
          </div>
          <div class="relative flex items-center justify-center">
            <dotlottie-vue
              src="https://lottie.host/eaf514a6-5171-496c-8ff3-a62d0fdc612c/zlloRszfSN.lottie"
              background="transparent"
              speed="1"
              style="width: 300px; height: 300px"
              loop
              autoplay
            ></dotlottie-vue>
          </div>

          <div
            class="absolute inset-x-0 top-[calc(100%-30rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <svg
              class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fill-opacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              ></path>
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9089FC"></stop>
                  <stop offset="1" stop-color="#FF80B5"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>
      </div>
      <div class="mb-12 mt-24 flex justify-center">
        <a
          href="https://www.producthunt.com/posts/icon-generator-ai?utm_source=badge-featured&amp;utm_medium=badge&amp;utm_souce=badge-icon-generator-ai"
          target="_blank"
          rel="noreferrer"
          ><img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=398463&amp;theme=dark"
            alt="Icon Generator AI - create beautiful icons in seconds | Product Hunt"
            width="250"
            height="54"
            style="width: 250px; height: 54px"
        /></a>
      </div>
      <section class="container mx-auto mb-4 max-w-screen-lg pt-12 text-center text-4xl">
        Join the <span class="text-blue-400">130871 users </span>creating
        <span class="text-yellow-400">160073 icons</span> so far!
      </section>
      <section
        class="container relative mx-auto mb-12 max-w-screen-sm px-8 py-16 text-left md:text-center"
      >
        <p class="mb-8 mt-2 text-4xl font-bold">Like seriously, it's THIS easy</p>
      </section>
      <section class="mx-auto mb-24 max-w-7xl px-8 sm:max-w-screen-sm md:max-w-none">
        <div class="mx-auto max-w-2xl md:text-center">
          <p class="mt-2 text-4xl font-bold">Let us save your time</p>
          <p class="mt-6">
            Hiring a designer for 2D character creation can be hard and time-consuming. Describe
            your character with a custom prompt, and we'll generate it in seconds.
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl
            class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 xl:grid-cols-3"
          >
            <div class="relative pl-16" v-for="(option, index) in options" :key="index">
              <dt class="font-semibold">
                <div
                  class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg"
                  :class="getRandomColor()"
                >
                  <!-- SVG ikonları buraya -->
                  <svg
                    v-if="option.icon === 'refresh'"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="black"
                    aria-hidden="true"
                    data-slot="icon"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    ></path>
                  </svg>
                  <svg
                    v-else-if="option.icon === 'cloud'"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="black"
                    aria-hidden="true"
                    data-slot="icon"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                    ></path>
                  </svg>
                  <svg
                    v-else-if="option.icon === 'cog'"
                    stroke="black"
                    fill="black"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    class="h-6 w-6"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105-.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.1c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
                    ></path>
                  </svg>
                  <svg
                    v-else-if="option.icon === 'dollar'"
                    stroke="black"
                    fill="black"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="h-6 w-6"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0049 22.0029C6.48204 22.0029 2.00488 17.5258 2.00488 12.0029C2.00488 6.48008 6.48204 2.00293 12.0049 2.00293C17.5277 2.00293 22.0049 6.48008 22.0049 12.0029C22.0049 17.5258 17.5277 22.0029 12.0049 22.0029ZM8.50488 14.0029V16.0029H11.0049V18.0029H13.0049V16.0029H14.0049C15.3856 16.0029 16.5049 14.8836 16.5049 13.5029C16.5049 12.1222 15.3856 11.0029 14.0049 11.0029H10.0049C9.72874 11.0029 9.50488 10.7791 9.50488 10.5029C9.50488 10.2268 9.72874 10.0029 10.0049 10.0029H15.5049V8.00293H13.0049V6.00293H11.0049V8.00293H10.0049C8.62417 8.00293 7.50488 9.12222 7.50488 10.5029C7.50488 11.8836 8.62417 13.0029 10.0049 13.0029H14.0049C14.281 13.0029 14.5049 13.2268 14.5049 13.5029C14.5049 13.7791 14.281 14.0029 14.0049 14.0029H8.50488Z"
                    ></path>
                  </svg>
                  <svg
                    v-else-if="option.icon === 'hd'"
                    stroke="black"
                    fill="black"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="h-6 w-6"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M19 4H5a2 2 0 00-2 2v12a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 11H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7-1c0 .55-.45 1-1 1h-.75v1.5h-1.5V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4zm-3.5-.5h2v-3h-2v3z"
                    ></path>
                  </svg>
                </div>
                {{ option.title }}
              </dt>
              <dd class="mt-2 dark:text-gray-300">
                {{ option.description }}
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <section class="mx-auto mb-24 max-w-7xl px-8 xl:max-w-screen-lg">
        <div class="container relative z-10 mx-auto">
          <h2 class="mb-16 text-left text-4xl md:text-center">What our users say</h2>
          <div class="flex justify-center">
            <!-- Mobil görünüm için carousel -->
            <div class="w-full md:hidden">
              <div
                class="relative overflow-hidden"
                @touchstart="touchStart"
                @touchmove="touchMove"
                @touchend="touchEnd"
              >
                <div
                  class="flex transition-transform duration-300 ease-in-out"
                  :style="{ transform: `translateX(-${currentReview * 100}%)` }"
                >
                  <div v-for="(review, index) in reviews" :key="index" class="w-full flex-shrink-0">
                    <div class="rounded-4xl h-full border bg-gray-600 bg-opacity-60 p-6">
                      <div class="flex h-full flex-col justify-between">
                        <div class="mb-5 block">
                          <header class="-m-2 mb-4 flex flex-wrap">
                            <div class="w-auto p-2">
                              <img width="50" height="50" :src="review.image" :alt="review.name" />
                            </div>
                            <div class="w-auto p-2">
                              <h3 class="font-semibold leading-normal">{{ review.name }}</h3>
                              <p class="uppercase text-gray-300">{{ review.username }}</p>
                            </div>
                          </header>
                          <p class="mt-6 text-lg font-medium">
                            {{ review.comment }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-4 flex justify-center">
                  <button
                    v-for="(_, index) in reviews"
                    :key="index"
                    @click="currentReview = index"
                    class="mx-1 h-3 w-3 rounded-full bg-gray-300"
                    :class="{ 'bg-blue-500': currentReview === index }"
                  ></button>
                </div>
              </div>
            </div>

            <!-- Büyük ekranlar için grid yapısı -->
            <div class="hidden md:flex md:flex-wrap md:justify-center md:gap-8">
              <div
                v-for="(review, index) in reviews"
                :key="index"
                class="rounded-4xl border bg-gray-600 bg-opacity-60 p-6 md:w-[calc(33.333%-1rem)] mb-8"
              >
                <div class="flex h-full flex-col justify-between">
                  <div class="mb-5 block">
                    <header class="-m-2 mb-4 flex flex-wrap">
                      <div class="w-auto p-2">
                        <img width="50" height="50" :src="review.image" :alt="review.name" />
                      </div>
                      <div class="w-auto p-2">
                        <h3 class="font-semibold leading-normal">{{ review.name }}</h3>
                        <p class="uppercase text-gray-300">{{ review.username }}</p>
                      </div>
                    </header>
                    <p class="mt-6 text-lg font-medium">
                      {{ review.comment }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="container mx-auto mb-24 max-w-screen-lg px-8">
        <h2 class="mb-12 text-left text-4xl md:text-center">
          The Benefits of 2D Character Generation
        </h2>
        <p class="mx-auto mb-12 max-w-screen-sm">
          Let’s be honest, you don’t have the time or resources to find a designer, communicate back
          and forth, and refine your 2D characters repeatedly. Our AI-powered 2D character generator
          offers multiple advantages that save you time and money while delivering high-quality
          results.
        </p>
        <div class="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div class="flex flex-col gap-4">
            <img
              width="200"
              height="200"
              src="@/assets/icons/savemoney.png"
              class="mx-auto rounded-lg bg-gray-200 p-4"
              alt="a piggy bank image of someone saving money"
            />
            <div class="w-full text-center text-2xl font-bold">Save Money</div>
            <p class="mb-8">
              Hiring a designer to create custom 2D characters can be costly, especially if you need
              multiple designs or frequent updates. With our AI character generator, you can create
              affordable, detailed characters without breaking your budget.
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <img
              width="200"
              height="200"
              src="@/assets/icons/speed.png"
              class="mx-auto rounded-lg bg-gray-200 p-4"
              alt="a piggy bank image of someone saving money"
            />
            <div class="w-full text-center text-2xl font-bold">Speed</div>
            <p class="mb-8">
              Creating characters with a designer can take days or even weeks, especially if they’re
              juggling multiple projects. Our AI tool, however, generates fully customizable 2D
              characters in just seconds, allowing you to move forward with your project faster.
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <img
              width="200"
              height="200"
              src="@/assets/icons/wizard.png"
              class="mx-auto rounded-lg bg-gray-200 p-4"
              alt="a piggy bank image of someone saving money"
            />
            <div class="w-full text-center text-2xl font-bold">Consistency</div>
            <p class="mb-8">
              Our 2D character generator ensures a consistent style across all your characters,
              which is crucial for game development or other projects where uniformity matters.
              Avoid the inconsistency that may arise when working with different designers or
              varying styles.
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <img
              width="200"
              height="200"
              src="@/assets/icons/customizable.png"
              class="mx-auto rounded-lg bg-gray-200 p-4"
              alt="a piggy bank image of someone saving money"
            />
            <div class="w-full text-center text-2xl font-bold">Customizable</div>
            <p class="mb-8">
              Our AI tools give you full control over the appearance of your characters. Customize
              features like clothing, accessories, and gear to match your specific vision. This
              flexibility allows you to adapt the characters to any project seamlessly.
            </p>
          </div>
        </div>
        <p class="mx-auto mb-8 max-w-screen-sm px-12">
          Our tool is a great choice for web application developers who want to create custom icons
          quickly, affordably, and with a high degree of consistency and customizability. While a
          designer may still be necessary in certain cases, an AI icon generator can be a valuable
          addition to your design toolkit.
        </p>
      </section>
      <section class="mb-24 text-center">
        <a class="btn-info btn" href="/generate"
          >Start generating your custom 2D characters now and bring your project to life!
        </a>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const currentSlide = ref(1)
    const totalSlides = 6

    // Slayt gösterisini başlat
    const startSlideshow = () => {
      setInterval(() => {
        nextSlide()
      }, 5000) // 5000 milisaniye = 5 saniye
    }

    const options = [
      {
        icon: 'refresh',
        title: 'Quick Feedback Loop',
        description:
          'Our characters generate within seconds so you can continuously fine-tune your prompt and character options to find the best fit for your needs.'
      },
      {
        icon: 'cloud',
        title: 'Manage your Collection',
        description:
          "We store all characters you've generated in the cloud, so you'll never need to manage your collection yourself."
      },
      {
        icon: 'cog',
        title: 'Variety of Options',
        description:
          'Diversify your character designs with our various presets that help you create the characters of your dreams.'
      },
      {
        icon: 'dollar',
        title: 'Affordable Prices',
        description:
          'Get high-quality 2D characters at a fraction of the cost of hiring a professional designer.'
      },
      {
        icon: 'hd',
        title: 'High Resolution',
        description:
          'Your characters are created in high resolution, so you can modify them in your favorite image editor as needed.'
      }
    ]

    const getRandomColor = () => {
      const colors = [
        'bg-red-500',
        'bg-blue-500',
        'bg-green-500',
        'bg-yellow-500',
        'bg-indigo-500',
        'bg-purple-500',
        'bg-pink-500',
        'bg-orange-500',
        'bg-teal-500',
        'bg-cyan-500',
        'bg-lime-500',
        'bg-amber-500',
        'bg-emerald-500',
        'bg-sky-500',
        'bg-violet-500'
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    // Sonraki slayta geç
    const nextSlide = () => {
      currentSlide.value = (currentSlide.value % totalSlides) + 1
    }

    // Önceki slayta geç
    const prevSlide = () => {
      currentSlide.value = currentSlide.value === 1 ? totalSlides : currentSlide.value - 1
    }

    // Banner resmini al
    const getBannerImage = (n) => {
      return new URL(`../assets/character-examples/banner${n}.jpg`, import.meta.url).href
    }

    const reviews = [
      {
        name: 'Hagen',
        username: '@HAGEN',
        image: new URL('@/assets/user-photos/hagen.jpeg', import.meta.url).href,
        comment:
          'Creating custom 2D characters for my game has never been easier! The interface is simple, and the results are incredibly detailed. I love how I can tweak every little aspect of my characters before using them in my game. Highly recommended!'
      },
      {
        name: 'Sean Ethan',
        username: '@seanethan',
        image: new URL('@/assets/user-photos/seanethan.jpeg', import.meta.url).href,
        comment:
          'This platform is a game-changer for indie developers. It saves me tons of time and resources by allowing me to design 2D characters exactly how I envision them. The customization options are limitless, and the final designs fit perfectly in my projects!'
      }
    ]

    const currentReview = ref(0)
    const touchStartX = ref(0)
    const touchEndX = ref(0)

    const nextReview = () => {
      currentReview.value = (currentReview.value + 1) % reviews.length
    }

    const prevReview = () => {
      currentReview.value = currentReview.value === 0 ? reviews.length - 1 : currentReview.value - 1
    }

    const touchStart = (e) => {
      touchStartX.value = e.touches[0].clientX
    }

    const touchMove = (e) => {
      touchEndX.value = e.touches[0].clientX
    }

    const touchEnd = () => {
      if (touchStartX.value - touchEndX.value > 50) {
        nextReview()
      }
      if (touchEndX.value - touchStartX.value > 50) {
        prevReview()
      }
    }

    onMounted(() => {
      startSlideshow()
    })

    return {
      currentSlide,
      nextSlide,
      prevSlide,
      getBannerImage,
      options,
      getRandomColor,
      reviews,
      currentReview,
      nextReview,
      prevReview,
      touchStart,
      touchMove,
      touchEnd
    }
  }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .rounded-4xl {
    border-radius: 1rem;
  }
}
</style>
