<template>
  <div>
    <section class="text-gray-600 body-font bg-vinos h-screen md:h-full">
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
          format="webp"
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
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font h-screen md:h-full">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        class="mx-auto flex px-5 pt-32 md:flex-row flex-col items-center"
      >
        <div
          class="
            lg:flex-grow
            md:w-1/2
            lg:pr-24
            md:pr-16
            flex flex-col
            md:items-start
            md:text-left
            mb-16
            md:mb-0
            items-center
            text-center
          "
        >
          <h1
            class="
              title-font
              sm:text-4xl
              text-3xl
              mb-4
              font-medium
              text-gray-900
            "
          >
            Knausgaard typewriter readymade marfa
          </h1>
          <p class="leading-relaxed">
            Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid
            swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.
          </p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <nuxt-img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
      <a href="#" v-scroll-to="'#element'">
        <div class="flex my-12">
          <p class="mx-auto">Ve de que trata..</p>
        </div>
      </a>
    </section>

    <section
      class="
        text-gray-600
        body-font
        mx-8
        md:mx-12
        lg:mx-12
        xl:mx-24
        h-screen
        md:h-full
        mb-5
      "
    >
      <div id="element" class="flex lg:flex-row mx-4 flex-col items-center">
        <div class="w-screen mt-28">
          <div class="aspect-w-16 aspect-h-9">
            <iframe
              autoplay="true"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div
          class="
            md:pl-8
            flex flex-col
            md:items-start
            md:text-left
            items-center
            text-center
          "
        >
          <h1
            class="
              title-font
              sm:text-4xl
              text-3xl
              mb-4
              font-medium
              text-gray-900
            "
          >
            Knausgaard typewriter readymade marfa
          </h1>
          <p class="mb-8 leading-relaxed">
            Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid
            swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.
          </p>
        </div>
      </div>
    </section>

    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
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
        <div class="flex flex-wrap -m-4">
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
              <button
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
                  hover:bg-gray-500
                  rounded
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
              </button>
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div
              class="
                h-full
                p-6
                rounded-lg
                border-2 border-indigo-500
                flex flex-col
                relative
                overflow-hidden
              "
            >
              <span
                class="
                  bg-indigo-500
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
                >Sommelier en línea
              </p>
              <button
                class="
                  flex
                  items-center
                  mt-auto
                  text-white
                  bg-indigo-500
                  border-0
                  py-2
                  px-4
                  w-full
                  focus:outline-none
                  hover:bg-indigo-600
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
              </button>
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
                >Cotizaciones para grupos y eventos
              </p>

              <button
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
                  hover:bg-gray-500
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
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
              bg-indigo-500
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
                bg-indigo-100
                text-indigo-500
                rounded-full
                inline-flex
                items-center
                justify-center
              "
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                Shooting Stars
              </h2>
              <p class="leading-relaxed">
                VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                bespoke try-hard cliche palo santo offal.
              </p>
            </div>
          </div>
        </div>
        <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
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
              bg-indigo-500
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
                bg-indigo-100
                text-indigo-500
                rounded-full
                inline-flex
                items-center
                justify-center
              "
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                The Catalyzer
              </h2>
              <p class="leading-relaxed">
                VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                bespoke try-hard cliche palo santo offal.
              </p>
            </div>
          </div>
        </div>
        <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
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
              bg-indigo-500
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
                bg-indigo-100
                text-indigo-500
                rounded-full
                inline-flex
                items-center
                justify-center
              "
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                The 400 Blows
              </h2>
              <p class="leading-relaxed">
                VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                bespoke try-hard cliche palo santo offal.
              </p>
            </div>
          </div>
        </div>
        <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
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
              bg-indigo-500
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
                bg-indigo-100
                text-indigo-500
                rounded-full
                inline-flex
                items-center
                justify-center
              "
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                Neptune
              </h2>
              <p class="leading-relaxed">
                VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                bespoke try-hard cliche palo santo offal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1
            class="
              text-2xl
              font-medium
              title-font
              mb-4
              text-gray-900
              tracking-widest
            "
          >
            OUR TEAM
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 lg:w-1/2">
            <div
              class="
                h-full
                flex
                sm:flex-row
                flex-col
                items-center
                sm:justify-start
                justify-center
                text-center
                sm:text-left
              "
            >
              <img
                alt="team"
                class="
                  flex-shrink-0
                  rounded-lg
                  w-48
                  h-48
                  object-cover object-center
                  sm:mb-0
                  mb-4
                "
                src="https://dummyimage.com/200x200"
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Holden Caulfield
                </h2>
                <h3 class="text-gray-500 mb-3">UI Developer</h3>
                <p class="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span class="inline-flex">
                  <a class="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
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
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
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
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                      ></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div
              class="
                h-full
                flex
                sm:flex-row
                flex-col
                items-center
                sm:justify-start
                justify-center
                text-center
                sm:text-left
              "
            >
              <img
                alt="team"
                class="
                  flex-shrink-0
                  rounded-lg
                  w-48
                  h-48
                  object-cover object-center
                  sm:mb-0
                  mb-4
                "
                src="https://dummyimage.com/201x201"
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Alper Kamu
                </h2>
                <h3 class="text-gray-500 mb-3">Designer</h3>
                <p class="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span class="inline-flex">
                  <a class="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
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
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
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
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                      ></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div
              class="
                h-full
                flex
                sm:flex-row
                flex-col
                items-center
                sm:justify-start
                justify-center
                text-center
                sm:text-left
              "
            >
              <img
                alt="team"
                class="
                  flex-shrink-0
                  rounded-lg
                  w-48
                  h-48
                  object-cover object-center
                  sm:mb-0
                  mb-4
                "
                src="https://dummyimage.com/204x204"
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Atticus Finch
                </h2>
                <h3 class="text-gray-500 mb-3">UI Developer</h3>
                <p class="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span class="inline-flex">
                  <a class="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
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
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
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
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                      ></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div
              class="
                h-full
                flex
                sm:flex-row
                flex-col
                items-center
                sm:justify-start
                justify-center
                text-center
                sm:text-left
              "
            >
              <img
                alt="team"
                class="
                  flex-shrink-0
                  rounded-lg
                  w-48
                  h-48
                  object-cover object-center
                  sm:mb-0
                  mb-4
                "
                src="https://dummyimage.com/206x206"
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Henry Letham
                </h2>
                <h3 class="text-gray-500 mb-3">Designer</h3>
                <p class="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span class="inline-flex">
                  <a class="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
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
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
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
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                      ></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-2 mx-auto">
        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
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
          <p class="leading-relaxed text-lg">
            En esta pandemia lograron traer lo mejor del país a la puerta de mi
            casa.<br />¡Gracias México Divino!
          </p>
          <span
            class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"
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
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-20 mx-auto flex flex-wrap">
        <div class="flex w-full mb-20 flex-wrap">
          <h1
            class="
              sm:text-3xl
              text-2xl text-center
              font-medium
              title-font
              text-gray-900
              lg:w-1/3
              lg:mb-0
              mb-4
            "
          >
            Galería
          </h1>
          <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/500x300"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/501x301"
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/600x360"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/601x361"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/502x302"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/503x303"
              />
            </div>
          </div>
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
            Contact Us
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600"
                  >Name</label
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
                    focus:ring-2 focus:ring-indigo-200
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
                    focus:ring-2 focus:ring-indigo-200
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
                  >Message</label
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
                    focus:ring-2 focus:ring-indigo-200
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
                  flex
                  mx-auto
                  text-white
                  bg-indigo-500
                  border-0
                  py-2
                  px-8
                  focus:outline-none
                  hover:bg-indigo-600
                  rounded
                  text-lg
                "
              >
                Button
              </button>
            </div>
            <div
              class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"
            >
              <a class="text-indigo-500">example@email.com</a>
              <p class="leading-normal my-5">
                49 Smith St. <br />Saint Cloud, MN 56301
              </p>
              <span class="inline-flex">
                <a class="text-gray-500">
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
                <a class="ml-4 text-gray-500">
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
                <a class="ml-4 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path
                      d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                    ></path>
                  </svg>
                </a>
                <a class="ml-4 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                    ></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  transition: 'slide-right',
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
</style>
