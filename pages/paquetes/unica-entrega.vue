<template>
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
      <div class="text-lg font-semibold">Única entrega</div>
      <div class="flex items-center justify-center mt-2">
        <div class="mr-1 text-5xl font-bold">$1649</div>
      </div>
      <div class="mt-2 space-y-3">
        <div class="text-gray-700">Recibe nuestro kit del mes</div>
        <div class="text-gray-700">Personaliza con tu nombre o un mensaje</div>
        <div class="text-gray-700">Ideal para regalo</div>
      </div>
    </div>
    <div>
      <a
        data-item-id="unica-entrega"
        data-item-price="1649"
        data-item-url="/paquetes/unica-entrega"
        data-item-name="Única entrega"
        data-item-description="Disfruta de México Divino en una sola exhibición, ideal para probar o regalar"
        data-item-image="/img/test.jpg"
        class="
          snipcart-add-item
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
          focus:shadow-outline focus:outline-none
        "
      >
        Compra
      </a>
      <p
        class="
          max-w-xs
          mt-6
          text-xs text-gray-600
          sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto
        "
      >
        Los precios incluyen IVA
      </p>
    </div>
  </div>
</template>
