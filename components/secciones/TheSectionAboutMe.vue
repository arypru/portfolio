<template>
  <section>
    <div class="grid lg:grid-cols-3 gap-4 m-4 lg:py-24">
      <div class="lg:col-span-2 place-self-center items-center pt-4">
        <VTitle class="md:ml-20 xl:ml-24" texto-titulo="Pruyas Araceli"/>
        <div class="my-5 md:flex lg:flex-row md:justify-center font-bold">
          <VDescription v-for="descrip in descripciones" :key="descrip.textoDescripcion" class="md:mx-4 md:my-3" :texto-descripcion="descrip.textoDescripcion" :emoji="descrip.icon"/>
        </div>
        <VDescription texto-descripcion="Me encanta codificar y poder mediante el frontend combinar el diseño, la programación y la creatividad entregando software de calidad y que brinde una buena experiencia al usuario." :emoji="'/images/icons/star.png'"/>
        <VDescription texto-descripcion="Disfruto de cada oportunidad que tengo para aprender y me adapto rápido a los cambios, además, me gusta rodearme de gente que me haga mejorar constantemente a nivel personal y profesional. " :emoji="'/images/icons/design.png'"/>
        <div class="my-8 md:flex md:flex-row md:justify-center">
          <VLink class="mx-5" v-for="red in redesSociales" :key="red.textoLink" :texto-link="red.textoLink" :link="red.link" :text-svg="red.textSvg" :text-view-box="red.viewBox"/>
        </div>
      </div>

        <div class="hidden lg:block">
          <img class="grayscale hover:grayscale-0" loading="lazy" src="/images/experiencia/frontend.svg" alt="Hola">
        </div>
    </div>

  </section>
</template>

<script>
import VTitle from "../VTitle";
import VDescription from "../VDescription";
import VLink from "../VLink";

import descripcionesJson from "/static/json/DescripcionSobreMi.json";
import redesSocialesJson from "/static/json/RedesSociales.json"

export default {
  components: {VTitle,VDescription,VLink},

  computed: {
    descripciones() {
      return descripcionesJson.descripciones
    },

    redesSociales() {
      return redesSocialesJson.redesSociales
    }
  }

}
</script>
