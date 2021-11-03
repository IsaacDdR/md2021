<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <nuxt-img
          alt="ecommerce"
          class="
            lg:w-1/2
            w-full
            lg:h-auto
            h-64
            object-cover object-center
            rounded
          "
          width="600px"
          height="500px"
          format="webp"
          src="/img/unica-entrega.webp"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
            Única entrega
          </h1>

          <p class="leading-relaxed">
            Fam locavore kickstarter distillery. Mixtape chillwave tumeric
            sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
            juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
            seitan poutine tumeric. Gastropub blue bottle austin listicle
            pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
          </p>

          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900"
              >$1649.00</span
            >
            <button
              data-item-id="unica-entrega"
              data-item-price="1649"
              data-item-url="/paquetes/unica-entrega"
              data-item-name="Única entrega"
              data-item-description="Disfruta de México Divino en una sola exhibición, ideal para probar o regalar"
              data-item-image="/img/unica-entrega.webp"
              class="
                snipcart-add-item
                flex
                ml-auto
                text-white
                bg-indigo-500
                border-0
                py-2
                px-6
                focus:outline-none
                hover:bg-indigo-600
                rounded
              "
            >
              Suscríbete
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  layout: 'pages',
}
</script>
