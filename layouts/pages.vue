<template>
  <div>
    <div
      class="bg-white fixed z-20 w-screen"
      :class="{ 'bg-white text-gray-900 shadow': !view.topOfPage }"
    >
      <div
        class="
          px-4
          py-5
          mx-auto
          sm:max-w-xl
          md:max-w-full
          lg:max-w-screen-xl
          md:px-24
          lg:px-8
        "
      >
        <div class="relative flex items-center justify-between">
          <NuxtLink
            to="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center"
            v-scroll-to="'#inicio'"
          >
            <nuxt-img
              class="ml-2 w-16 mx-auto"
              format="webp"
              src="/img/logo-md.png"
            />
          </NuxtLink>
          <ul class="flex items-center hidden space-x-8 lg:flex text-gray-900">
            <li>
              <NuxtLink
                to="/nosotros"
                aria-label="Our product"
                title="Our product"
                class="
                  font-medium
                  tracking-wide
                  transition-colors
                  duration-200
                  hover:text-teal-accent-400
                "
                >Nosotros</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/paquetes"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide transition-colors duration-200"
                >Paquetes</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/galeria"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide transition-colors duration-200"
                >Galería</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/contacto"
                aria-label="Product pricing"
                title="Product pricing"
                class="
                  font-medium
                  tracking-wide
                  transition-colors
                  duration-200
                  hover:text-teal-accent-400
                "
                >Contacto</NuxtLink
              >
            </li>
          </ul>

          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="
                p-2
                -mr-1
                transition
                duration-200
                rounded
                focus:outline-none focus:shadow-outline
              "
              @click="isMenuOpen = true"
            >
              <svg
                class="w-5 text-gray-900"
                :class="{ 'text-gray-900': !view.topOfPage }"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                ></path>
              </svg>
            </button>
            <transition name="home">
              <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Mexico Divino"
                        title="Mexico Divino"
                        class="inline-flex items-center"
                      >
                        <span
                          class="
                            ml-2
                            text-xl
                            font-bold
                            tracking-wide
                            text-gray-800
                          "
                          >México Divino</span
                        >
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="
                          p-2
                          -mt-2
                          -mr-2
                          transition
                          duration-200
                          rounded
                          hover:bg-gray-200
                          focus:bg-gray-200
                          focus:outline-none
                          focus:shadow-outline
                        "
                        @click="isMenuOpen = false"
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <NuxtLink
                          to="/nosotros"
                          aria-label="Our product"
                          title="Our product"
                          class="
                            font-medium
                            tracking-wide
                            text-gray-700
                            transition-colors
                            duration-200
                            hover:text-deep-purple-accent-400
                          "
                          >Nosotros</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink
                          to="/paquetes"
                          aria-label="Our product"
                          title="Our product"
                          class="
                            font-medium
                            tracking-wide
                            text-gray-700
                            transition-colors
                            duration-200
                            hover:text-deep-purple-accent-400
                          "
                          >Paquetes</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink
                          to="/galeria"
                          aria-label="Our product"
                          title="Our product"
                          class="
                            font-medium
                            tracking-wide
                            text-gray-700
                            transition-colors
                            duration-200
                            hover:text-deep-purple-accent-400
                          "
                          >Galería</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink
                          to="/contacto"
                          aria-label="Product pricing"
                          title="Product pricing"
                          class="
                            font-medium
                            tracking-wide
                            text-gray-700
                            transition-colors
                            duration-200
                            hover:text-deep-purple-accent-400
                          "
                          >Contacto</NuxtLink
                        >
                      </li>
                      <li>
                        <a
                          href="/"
                          class="
                            inline-flex
                            bg-gray-900
                            items-center
                            justify-center
                            w-full
                            h-12
                            px-6
                            font-medium
                            tracking-wide
                            text-white
                            transition
                            duration-200
                            rounded
                            shadow-md
                            bg-deep-purple-accent-400
                            hover:bg-deep-purple-accent-700
                            focus:shadow-outline focus:outline-none
                          "
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Whatsapp
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <Nuxt />
  </div>
</template>
<script>
export default {
  transition: 'home',
  data() {
    return {
      isMenuOpen: false,
      view: {
        topOfPageLogo: true,
        topOfPage: true,
      },
    }
  },
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug).fetch()
    return { articles }
  },
  watch: {
    $route() {
      this.isMenuOpen = false
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('scroll', this.handleScrollLogo)
  },
  methods: {
    handleScrollLogo() {
      if (window.pageYOffset > 700) {
        if (this.view.topOfPageLogo) this.view.topOfPageLogo = false
      } else {
        if (!this.view.topOfPageLogo) this.view.topOfPageLogo = true
      }
    },
    handleScroll() {
      if (window.pageYOffset > 20) {
        if (this.view.topOfPage) this.view.topOfPage = false
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true
      }
    },
  },
}
</script>
<style>
.home-enter-active {
  animation: bounceInRight 1s;
}
.home-leave-active {
  animation: bounceOutRight 1s;
}
.home-enter {
  animation: bounceInRight 1s;
}
.home-leave-active {
  animation: bounceOutRight 1s;
}
</style>
