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
          src="/img/jade.webp"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">
            Suscripción
          </h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
            Jade
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
              >$1449.00</span
            >
            <button
              data-item-id="suscripcion-jade"
              data-item-price="1449"
              data-item-url="/paquetes/suscripcion-jade"
              data-item-name="Suscripción jade"
              data-item-description="Recibe nuestro kit del mes ( 2 vinos y/o licores, muestra artesanal, gastronómica y cultural y empaque especial) "
              data-item-image="/img/jade.webp"
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
