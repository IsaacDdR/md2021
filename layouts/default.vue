<template>
  <div>
    <div
      class="bg-transparent fixed z-20 w-screen"
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
              v-if="!view.topOfPageLogo"
              class="ml-2 w-16 mx-auto"
              format="webp"
              src="/img/logo-md.png"
            />
            <span
              v-else
              class="ml-2 text-xl font-bold tracking-wide text-gray-100"
              :class="{ 'text-gray-900': !view.topOfPage }"
              >México Divino</span
            >
          </NuxtLink>
          <ul
            class="flex items-center hidden space-x-8 lg:flex text-gray-100"
            :class="{ 'text-gray-900': !view.topOfPage }"
          >
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
          <ul
            class="
              bg-gray-100
              rounded-lg
              flex
              items-center
              hidden
              space-x-8
              lg:flex
            "
            :class="{ 'bg-gray-900 text-gray-100': !view.topOfPage }"
          >
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=524427541011&text=%C2%A1Hola%20M%C3%A9xico%20Divino%20%F0%9F%8D%B7!%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20su%20suscripci%C3%B3n%20y/o%20kits%20personalizados."
                class="
                  inline-flex
                  items-center
                  justify-center
                  h-12
                  px-6
                  font-medium
                  tracking-wide
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
                class="w-5 text-gray-100"
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
                          href="https://api.whatsapp.com/send?phone=524427541011&text=%C2%A1Hola%20M%C3%A9xico%20Divino%20%F0%9F%8D%B7!%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20su%20suscripci%C3%B3n%20y/o%20kits%20personalizados."
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
    <footer class="text-gray-600 body-font">
      <div
        class="
          container
          px-5
          py-8
          mx-auto
          flex
          items-center
          sm:flex-row
          flex-col
        "
      >
        <a
          class="
            flex
            title-font
            font-medium
            items-center
            md:justify-start
            justify-center
            text-gray-900
          "
        >
          <nuxt-img format="webp" src="/img/logo-md.png" class="w-16" />
        </a>
        <p
          class="
            text-sm text-gray-700
            sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0
            mt-4
          "
        >
          © Todos los derechos reservados 2021 —
          <a
            href="https://www.cintatic.com/"
            class="text-gray-500 ml-1"
            rel="noopener noreferrer"
            target="_blank"
            >Sitio hecho por cintatic.com</a
          >
        </p>
        <span
          class="
            inline-flex
            sm:ml-auto sm:mt-0
            mt-4
            justify-center
            sm:justify-start
          "
        >
          <a
            href="https://www.facebook.com/M%C3%A9xico-Divino-115205333661204"
            class="text-gray-500 hover:text-gray-900"
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              ></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500 hover:text-gray-900">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/mex_divino/"
            class="ml-3 text-gray-500 hover:text-gray-900"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path
                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
              ></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
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
