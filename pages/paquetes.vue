<template>
  <div
    class="
      px-4
      py-24
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      lg:px-8
    "
  >
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <!--
      <div>
        <p
          class="
            inline-block
            px-3
            py-px
            mb-4
            text-xs
            font-semibold
            tracking-wider
            text-teal-900
            uppercase
            rounded-full
            bg-teal-accent-400
          "
        >
          Our Pricing
        </p>
      </div>
      -->
      <h2
        class="
          md:mt-20
          max-w-lg
          mb-6
          font-sans
          text-3xl
          font-bold
          leading-none
          tracking-tight
          text-gray-900
          sm:text-4xl
          md:mx-auto
        "
      >
        <span class="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            class="
              absolute
              top-0
              left-0
              z-0
              hidden
              w-32
              -mt-8
              -ml-20
              text-yellow-500
              lg:w-32
              lg:-ml-28 lg:-mt-10
              sm:block
            "
          >
            <defs>
              <pattern
                id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect
              fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
              width="52"
              height="24"
            ></rect>
          </svg>
          <span class="relative">México</span>
        </span>
        en tus manos, costos increíbles.
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        Compra, suscríbete, cotiza y disfruta.
      </p>
    </div>
    <div
      class="
        grid
        max-w-md
        gap-10
        row-gap-5
        lg:max-w-screen-lg
        sm:row-gap-10
        lg:grid-cols-3
        xl:max-w-screen-lg
        sm:mx-auto
      "
    >
      <div
        class="
          flex flex-col
          justify-between
          p-8
          transition-shadow
          duration-300
          bg-white
          border
          rounded
          shadow-sm
          sm:items-center
          hover:shadow
        "
      >
        <div class="text-center">
          <div class="text-lg font-semibold">Único</div>
          <div class="flex items-center justify-center mt-2">
            <div class="mr-1 text-5xl font-bold">$1699</div>
          </div>
          <div class="mt-2 space-y-3">
            <div class="text-gray-700">Recibe nuestro kit del mes</div>
            <div class="text-gray-700">
              Personaliza con tu nombre o un mensaje
            </div>
            <div class="text-gray-700">Característica</div>
          </div>
        </div>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=524427541011&text=%C2%A1Hola%20M%C3%A9xico%20Divino%20%F0%9F%8D%B7!%20Me%20interesa%20adquirir%20su%20paquete%20%C3%9Anico.s"
            class="
              inline-flex
              items-center
              justify-center
              w-full
              h-12
              px-6
              mt-6
              font-medium
              tracking-wide
              text-white
              transition
              duration-200
              bg-gray-800
              rounded
              shadow-md
              hover:bg-gray-900
              focus:shadow-outline
              focus:outline-none
            "
          >
            Compra
          </a>
          <p
            class="
              max-w-xs
              mt-6
              text-xs text-gray-600
              sm:text-sm sm:text-center
              sm:max-w-sm
              sm:mx-auto
            "
          >
            Los precios incluyen IVA
          </p>
        </div>
      </div>
      <div
        class="
          relative
          flex flex-col
          justify-between
          p-8
          transition-shadow
          duration-300
          bg-white
          border
          rounded
          shadow-sm
          sm:items-center
          hover:shadow
          border-deep-purple-accent-400
        "
      >
        <div class="absolute inset-x-0 top-0 flex justify-center -mt-3">
          <div
            class="
              inline-block
              px-3
              py-1
              text-xs
              font-medium
              tracking-wider
              text-white
              uppercase
              rounded
              bg-deep-purple-accent-400
            "
          >
            Most Popular
          </div>
        </div>
        <div class="text-center">
          <div class="text-lg font-semibold">Suscripción</div>
          <div class="flex items-center justify-center mt-2 text-yellow-500">
            <div class="mr-1 text-5xl font-bold">$1499</div>
            <div>/mes</div>
          </div>
          <div class="mt-2 space-y-3">
            <div class="text-gray-700">Un kit mensual</div>
            <div class="text-gray-700">Acceso al programa de recompensas</div>
            <div class="text-gray-700">Sommelier en línea</div>
          </div>
        </div>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=524427541011&text=%C2%A1Hola%20M%C3%A9xico%20Divino%20%F0%9F%8D%B7!%20Me%20interesa%20adquirir%20su%20paquete%20de%20suscripci%C3%B3n."
            class="
              inline-flex
              items-center
              justify-center
              w-full
              h-12
              px-6
              mt-6
              font-medium
              tracking-wide
              text-white
              transition
              duration-200
              rounded
              shadow-md
              bg-yellow-500
              focus:shadow-outline
              focus:outline-none
            "
          >
            SUSCRÍBETE
          </a>
          <p
            class="
              max-w-xs
              mt-6
              text-xs text-gray-600
              sm:text-sm sm:text-center
              sm:max-w-sm
              sm:mx-auto
            "
          >
            Los precios incluyen IVA
          </p>
        </div>
      </div>
      <div
        class="
          flex flex-col
          justify-between
          p-8
          transition-shadow
          duration-300
          bg-white
          border
          rounded
          shadow-sm
          sm:items-center
          hover:shadow
        "
      >
        <div class="text-center">
          <div class="text-lg font-semibold">Enterprise</div>
          <div class="flex items-center justify-center mt-2">
            <div class="mr-1 text-5xl font-bold">Cotiza</div>
          </div>
          <div class="mt-2 space-y-3">
            <div class="text-gray-700">Regalos empresariales</div>
            <div class="text-gray-700">Venta a restaurantes y bares</div>
            <div class="text-gray-700">Cotizaciones para grupos y eventos</div>
          </div>
        </div>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=524427541011&text=%C2%A1Hola%20M%C3%A9xico%20Divino%20%F0%9F%8D%B7!%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20su%20suscripci%C3%B3n%20y/o%20kits%20personalizados."
            class="
              inline-flex
              items-center
              justify-center
              w-full
              h-12
              px-6
              mt-6
              font-medium
              tracking-wide
              text-white
              transition
              duration-200
              bg-gray-800
              rounded
              shadow-md
              hover:bg-gray-900
              focus:shadow-outline
              focus:outline-none
            "
          >
            Contáctanos
          </a>
          <p
            class="
              max-w-xs
              mt-6
              text-xs text-gray-600
              sm:text-sm sm:text-center
              sm:max-w-sm
              sm:mx-auto
            "
          >
            Los precios incluyen IVA
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'pages',
}
</script>
