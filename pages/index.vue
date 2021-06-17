<template>
  <div class="no-highlight">
    <section
      class="text-gray-600 body-font bg-vinos h-screen md:h-full"
      id="inicio"
    >
      <div
        class="
          container
          mx-auto
          flex flex-col
          px-5
          py-24
          justify-center
          items-center
        "
      >
        <nuxt-img
          class="
            lg:w-2/6
            md:w-3/6
            w-5/6
            mt-24
            mb-10
            object-cover object-center
            rounded
            h-full
          "
          alt="hero"
          src="/images/logo-md.svg"
        />
        <div
          class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center"
        >
          <h1
            class="title-font sm:text-3xl text-2xl mb-4 font-medium text-white"
          >
            Descubre México a través de una experiencia única y a la puerta de
            tu hogar.
          </h1>

          <a href="#" v-scroll-to="'#first-el'">
            <div class="flex flex-col my-12 text-white text-xl">
              <span class="mx-auto text-center text-4xl">
                <div class="mt-4">
                  <span class="animate-ping absolute inline-flex">
                    <font-awesome-icon :icon="['fas', 'chevron-down']" />
                  </span>
                  <span class="relative inline-flex">
                    <font-awesome-icon :icon="['fas', 'chevron-down']" />
                  </span>
                </div>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section
      id="first-el"
      class="mx-auto text-gray-600 body-font h-screen md:h-full lg:px-8 pb-16"
    >
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        class="flex px-6 pt-24 xl:flex-row flex-col items-center"
      >
        <div
          class="text-center items-center md:w-3/4 mb-12 lg:flex-grow lg:w-1/2"
        >
          <h1
            class="
              mx-auto
              title-font
              sm:text-4xl
              text-3xl
              font-medium
              text-gray-900
            "
          >
            Directo a tus manos
          </h1>
          <p class="leading-relaxed mt-4 xl:mx-8">
            En México Divino buscamos celebrar la diversidad y tradición
            alrededor de México al mismo tiempo que apoyamos el consumo local.
            Para lograrlo, mes con mes seleccionamos dos vinos o licores de un
            estado diferente, para hacértelos llegar hasta la puerta de tu hogar
            acompañados de una muestra artesanal y gastronómica..
          </p>
        </div>
        <nuxt-img
          class="rounded"
          alt="hero"
          format="webp"
          src="/images/agave.jpg"
        />
      </div>

      <a href="#" v-scroll-to="'#video-el'">
        <div class="flex flex-col my-8 text-4xl">
          <span class="mx-auto text-center">
            <span class="animate-ping absolute inline-flex">
              <font-awesome-icon :icon="['fas', 'angle-double-down']" />
            </span>
            <span class="relative inline-flex">
              <font-awesome-icon :icon="['fas', 'angle-double-down']" />
            </span>
          </span>
        </div>
      </a>
    </section>

    <section
      class="
        text-gray-600
        body-font
        mx-4
        md:mx-12
        lg:mx-12
        xl:mx-24
        h-screen
        md:h-full
        mb-5
      "
    >
      <!--Video-->
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        id="video-el"
        class="flex lg:flex-row mx-4 flex-col items-center"
      >
        <div class="w-screen md:mt-40 mt-24 mb-12">
          <div class="aspect-w-16 aspect-h-9">
            <iframe
              src="https://player.vimeo.com/video/463986420"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div
          class="
            my-4
            md:pl-8
            flex flex-col
            md:items-start md:text-left
            items-center
            text-center
          "
        >
          <h1
            class="
              title-font
              sm:text-4xl
              text-3xl
              mb-8
              font-medium
              text-gray-900
              md:pt-8
            "
          >
            ¿Qué es México divino?
          </h1>
          <p class="mb-8 leading-relaxed">
            Somos una empresa comprometida con México y queremos que así como
            nosotros, tú te sientas orgulloso de ser parte de la historia,
            cultura y tradición de este país.
          </p>
        </div>
      </div>
      <a href="#" v-scroll-to="'#steps-el'">
        <div class="flex">
          <div class="mt-4 text-4xl mx-auto">
            <span class="animate-ping absolute inline-flex">
              <font-awesome-icon :icon="['fas', 'angle-double-down']" />
            </span>
            <span class="relative inline-flex">
              <font-awesome-icon :icon="['fas', 'angle-double-down']" />
            </span>
          </div>
        </div>
      </a>
    </section>

    <section id="steps-el" class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div
          class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div
            class="h-full w-6 absolute inset-0 flex items-center justify-center"
          >
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div
            class="
              flex-shrink-0
              w-6
              h-6
              rounded-full
              mt-10
              sm:mt-0
              inline-flex
              items-center
              justify-center
              bg-gray-900
              text-white
              relative
              z-10
              title-font
              font-medium
              text-sm
            "
          >
            1
          </div>
          <div
            class="
              flex-grow
              md:pl-8
              pl-6
              flex
              sm:items-center
              items-start
              flex-col
              sm:flex-row
            "
          >
            <div
              class="
                flex-shrink-0
                w-24
                h-24
                bg-gray-200
                text-gray-900
                rounded-full
                inline-flex
                items-center
                justify-center
              "
            >
              <font-awesome-icon class="text-4xl" :icon="['fas', 'envelope']" />
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                Contáctanos
              </h2>
              <p class="leading-relaxed">
                Por Whatsapp, Facebook o Instagram, envíanos un mensaje y con
                mucho gusto te atenderemos.
              </p>
            </div>
          </div>
        </div>
        <div
          class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div
            class="h-full w-6 absolute inset-0 flex items-center justify-center"
          >
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div
            class="
              flex-shrink-0
              w-6
              h-6
              rounded-full
              mt-10
              sm:mt-0
              inline-flex
              items-center
              justify-center
              bg-gray-900
              text-white
              relative
              z-10
              title-font
              font-medium
              text-sm
            "
          >
            2
          </div>
          <div
            class="
              flex-grow
              md:pl-8
              pl-6
              flex
              sm:items-center
              items-start
              flex-col
              sm:flex-row
            "
          >
            <div
              class="
                flex-shrink-0
                w-24
                h-24
                bg-gray-200
                text-gray-900
                rounded-full
                inline-flex
                items-center
                justify-center
              "
            >
              <font-awesome-icon
                :icon="['fas', 'calendar-check']"
                class="text-4xl"
              />
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                Revisión
              </h2>
              <p class="leading-relaxed">
                A partir de aquí nosotros nos encargamos, procesaremos tu compra
                y prepararemos todo lo necesario.
              </p>
            </div>
          </div>
        </div>
        <div
          class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div
            class="h-full w-6 absolute inset-0 flex items-center justify-center"
          >
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div
            class="
              flex-shrink-0
              w-6
              h-6
              rounded-full
              mt-10
              sm:mt-0
              inline-flex
              items-center
              justify-center
              bg-gray-900
              text-white
              relative
              z-10
              title-font
              font-medium
              text-sm
            "
          >
            3
          </div>
          <div
            class="
              flex-grow
              md:pl-8
              pl-6
              flex
              sm:items-center
              items-start
              flex-col
              sm:flex-row
            "
          >
            <div
              class="
                flex-shrink-0
                w-24
                h-24
                bg-gray-200
                text-gray-900
                rounded-full
                inline-flex
                items-center
                justify-center
              "
            >
              <font-awesome-icon :icon="['fas', 'clock']" class="text-4xl" />
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                Solo espera
              </h2>
              <p class="leading-relaxed">
                Tu compra estará camino directo a tu casa, departamento u
                oficina.
              </p>
            </div>
          </div>
        </div>
        <div
          class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div
            class="h-full w-6 absolute inset-0 flex items-center justify-center"
          >
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div
            class="
              flex-shrink-0
              w-6
              h-6
              rounded-full
              mt-10
              sm:mt-0
              inline-flex
              items-center
              justify-center
              bg-gray-900
              text-white
              relative
              z-10
              title-font
              font-medium
              text-sm
            "
          >
            4
          </div>
          <div
            class="
              flex-grow
              md:pl-8
              pl-6
              flex
              sm:items-center
              items-start
              flex-col
              sm:flex-row
            "
          >
            <div
              class="
                flex-shrink-0
                w-24
                h-24
                bg-gray-200
                text-gray-900
                rounded-full
                inline-flex
                items-center
                justify-center
              "
            >
              <font-awesome-icon
                :icon="['fas', 'wine-glass-alt']"
                class="text-4xl"
              />
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                Disfruta
              </h2>
              <p class="leading-relaxed">
                Una vez en tus manos, descubre todo lo que México Divino es, y
                tiene para tí.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Paquetes-->
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 mx-auto">
        <div
          class="flex flex-col text-center w-full mb-12"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h1
            class="
              sm:text-4xl
              text-3xl
              font-medium
              title-font
              mb-2
              text-gray-900
            "
          >
            "Así te sabe"
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            México hasta la puerta de tu hogar.
          </p>
        </div>
        <div
          class="flex flex-wrap -m-4 py-8"
          data-aos="slide-up"
          data-aos-duration="1500"
        >
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full md:ml-auto">
            <div
              class="
                h-full
                p-6
                rounded-lg
                border-2 border-gray-300
                flex flex-col
                relative
                overflow-hidden
              "
            >
              <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                Único
              </h2>
              <h1
                class="
                  text-5xl text-gray-900
                  pb-4
                  mb-4
                  border-b border-gray-200
                  leading-none
                "
              >
                $1699
              </h1>
              <p class="flex items-center text-gray-600 mb-2">
                <span
                  class="
                    w-4
                    h-4
                    mr-2
                    inline-flex
                    items-center
                    justify-center
                    bg-gray-400
                    text-white
                    rounded-full
                    flex-shrink-0
                  "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >IVA Incluido
              </p>
              <p class="flex items-center text-gray-600 mb-2">
                <span
                  class="
                    w-4
                    h-4
                    mr-2
                    inline-flex
                    items-center
                    justify-center
                    bg-gray-400
                    text-white
                    rounded-full
                    flex-shrink-0
                  "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >Recibe nuestro kit del mes
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span
                  class="
                    w-4
                    h-4
                    mr-2
                    inline-flex
                    items-center
                    justify-center
                    bg-gray-400
                    text-white
                    rounded-full
                    flex-shrink-0
                  "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >Personaliza con tu nombre o un mensaje
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=524427541011&text=%C2%A1Hola%20M%C3%A9xico%20Divino%20%F0%9F%8D%B7!%20Me%20interesa%20adquirir%20su%20paquete%20%C3%9Anico."
                class="
                  flex
                  items-center
                  mt-auto
                  text-white
                  bg-gray-400
                  border-0
                  py-2
                  px-4
                  w-full
                  focus:outline-none
                  hover:bg-gray-900
                  rounded
                  shadow
                "
              >
                COMPRA
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 w-full">
            <div
              class="
                animate-pulse
                h-full
                p-6
                mx-4
                rounded-lg
                border-2 border-yellow-500
                flex flex-col
                relative
                overflow-hidden
              "
            >
              <span
                class="
                  bg-yellow-500
                  text-white
                  px-3
                  py-1
                  tracking-widest
                  text-xs
                  absolute
                  right-0
                  top-0
                  rounded-bl
                "
                >POPULAR</span
              >
              <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                Suscripción
              </h2>
              <h1
                class="
                  text-5xl text-gray-900
                  leading-none
                  flex
                  items-center
                  pb-4
                  mb-4
                  border-b border-gray-200
                "
              >
                <span>$1499</span>
                <span class="text-lg ml-1 font-normal text-gray-500">/mes</span>
              </h1>
              <p class="flex items-center text-gray-600 mb-2">
                <span
                  class="
                    w-4
                    h-4
                    mr-2
                    inline-flex
                    items-center
                    justify-center
                    bg-yellow-500
                    text-white
                    rounded-full
                    flex-shrink-0
                  "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >IVA Incluido
              </p>
              <p class="flex items-center text-gray-600 mb-2">
                <span
                  class="
                    w-4
                    h-4
                    mr-2
                    inline-flex
                    items-center
                    justify-center
                    bg-yellow-500
                    text-white
                    rounded-full
                    flex-shrink-0
                  "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >Un kit mensual
              </p>
              <p class="flex items-center text-gray-600 mb-2">
                <span
                  class="
                    w-4
                    h-4
                    mr-2
                    inline-flex
                    items-center
                    justify-center
                    bg-yellow-500
                    text-white
                    rounded-full
                    flex-shrink-0
                  "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >Acceso al programa de recompensas
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span
                  class="
                    w-4
                    h-4
                    mr-2
                    inline-flex
                    items-center
                    justify-center
                    bg-yellow-500
                    text-white
                    rounded-full
                    flex-shrink-0
                  "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >Sommelier en línea
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=524427541011&text=%C2%A1Hola%20M%C3%A9xico%20Divino%20%F0%9F%8D%B7!%20Me%20interesa%20adquirir%20su%20paquete%20de%20suscripci%C3%B3n."
                class="
                  flex
                  items-center
                  mt-auto
                  text-white
                  bg-yellow-500
                  border-0
                  py-2
                  px-4
                  w-full
                  focus:outline-none
                  hover:bg-yellow-400
                  shadow
                  rounded
                "
              >
                SUSCRÍBETE
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full md:mr-auto">
            <div
              class="
                h-full
                p-6
                rounded-lg
                border-2 border-gray-300
                flex flex-col
                relative
                overflow-hidden
              "
            >
              <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                Enterprise
              </h2>
              <h1
                class="
                  text-5xl text-gray-900
                  leading-none
                  flex
                  items-center
                  pb-4
                  mb-4
                  border-b border-gray-200
                "
              >
                <span>Cotiza</span>
              </h1>
              <p class="flex items-center text-gray-600 mb-2">
                <span
                  class="
                    w-4
                    h-4
                    mr-2
                    inline-flex
                    items-center
                    justify-center
                    bg-gray-400
                    text-white
                    rounded-full
                    flex-shrink-0
                  "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >Regalos empresariales
              </p>
              <p class="flex items-center text-gray-600 mb-2">
                <span
                  class="
                    w-4
                    h-4
                    mr-2
                    inline-flex
                    items-center
                    justify-center
                    bg-gray-400
                    text-white
                    rounded-full
                    flex-shrink-0
                  "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >Venta a restaurantes y bares
              </p>

              <p class="flex items-center text-gray-600 mb-6">
                <span
                  class="
                    w-4
                    h-4
                    mr-2
                    inline-flex
                    items-center
                    justify-center
                    bg-gray-400
                    text-white
                    rounded-full
                    flex-shrink-0
                  "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >Cotizaciones para grupos y eventos
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=524427541011&text=%C2%A1Hola%20M%C3%A9xico%20Divino%20%F0%9F%8D%B7!%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20su%20suscripci%C3%B3n%20y/o%20kits%20personalizados."
                class="
                  flex
                  items-center
                  mt-auto
                  text-white
                  bg-gray-400
                  border-0
                  py-2
                  px-4
                  w-full
                  focus:outline-none
                  hover:bg-gray-900
                  shadow
                  rounded
                "
              >
                CONTÁCTANOS
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="flex text-gray-600 body-font h-screen justify-center items-center"
    >
      <div class="container px-5 py-2">
        <div class="w-full m-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="inline-block w-8 h-8 text-gray-400 mb-8"
            viewBox="0 0 975.036 975.036"
          >
            <path
              d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
            ></path>
          </svg>
          <p class="leading-relaxed text-lg italic text-3xl">
            En esta pandemia lograron traer lo mejor del país a la puerta de mi
            casa.<br />¡Gracias México Divino!
          </p>
          <span
            class="inline-block h-1 w-10 rounded bg-indigo-500 mt-5 mb-4"
          ></span>
          <h2
            class="text-gray-900 font-medium title-font tracking-wider text-sm"
          >
            Víctor Daniel Ordoñez
          </h2>
          <p class="text-gray-500">suscriptor de México Divino</p>
        </div>
      </div>
    </section>

    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-20 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1
            class="
              sm:text-3xl
              text-2xl
              font-medium
              title-font
              mb-4
              text-gray-900
            "
          >
            Contáctanos
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            No te quedes con duda, manda un mensaje y te atenderemos a la
            brevedad
          </p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600"
                  >Nombre</label
                >
                <input
                  id="name"
                  type="text"
                  name="name"
                  class="
                    w-full
                    bg-gray-100 bg-opacity-50
                    rounded
                    border border-gray-300
                    focus:border-indigo-500
                    focus:bg-white
                    focus:ring-2
                    focus:ring-indigo-200
                    text-base
                    outline-none
                    text-gray-700
                    py-1
                    px-3
                    leading-8
                    transition-colors
                    duration-200
                    ease-in-out
                  "
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600"
                  >Email</label
                >
                <input
                  id="email"
                  type="email"
                  name="email"
                  class="
                    w-full
                    bg-gray-100 bg-opacity-50
                    rounded
                    border border-gray-300
                    focus:border-indigo-500
                    focus:bg-white
                    focus:ring-2
                    focus:ring-indigo-200
                    text-base
                    outline-none
                    text-gray-700
                    py-1
                    px-3
                    leading-8
                    transition-colors
                    duration-200
                    ease-in-out
                  "
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-600"
                  >Mensaje</label
                >
                <textarea
                  id="message"
                  name="message"
                  class="
                    w-full
                    bg-gray-100 bg-opacity-50
                    rounded
                    border border-gray-300
                    focus:border-indigo-500
                    focus:bg-white
                    focus:ring-2
                    focus:ring-indigo-200
                    h-32
                    text-base
                    outline-none
                    text-gray-700
                    py-1
                    px-3
                    resize-none
                    leading-6
                    transition-colors
                    duration-200
                    ease-in-out
                  "
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button
                class="
                  shadow
                  animate-pulse
                  flex
                  mx-auto
                  text-white
                  border-0
                  py-2
                  bg-gray-800
                  px-8
                  focus:outline-none
                  hover:bg-indigo-600
                  rounded
                  text-lg
                "
              >
                Envíar
              </button>
            </div>

            <div
              class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"
            >
              <a class="text-indigo-500">hola@mexicodivino.com.mx</a>
              <p class="leading-normal my-5">
                Santiago de Querétaro <br />México
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  transition: 'home',
  //scrollToTop: true,
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug).fetch()

    return {
      articles,
    }
  },
}
</script>
<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 30%, 0);
    -ms-transform: translate3d(0, 30%, 0);
    transform: translate3d(0, 30%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.fadeInUp {
  animation-name: fadeInUp;
  animation-timing-function: ease-out;
}

.home-enter-active,
.home-leave-active {
  transition: opacity 2s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}

.slide-right-enter-active {
  animation: slideInRight 0.5s;
}

.no-highlight {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
</style>
