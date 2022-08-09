<template>
  <section>
    <VTitle texto-titulo="Araceli Pruyas de los Angeles I."/>
    <div class="my-3 md:flex lg:flex-row md:justify-center">
        <VDescription v-for="descrip in descripciones" :key="descrip.textoDescripcion" class="md:mx-4 md:my-3" :texto-descripcion="descrip.textoDescripcion" :emoji="descrip.icon"/>
    </div>
    <VDescription texto-descripcion="Me encanta ser Frontend Developer porque me permite combinar diseño + programacion + creatividad" :emoji="'/images/icons/star.png'"/>
    <div class="my-3 md:flex md:flex-row md:justify-center">
      <VLink class="mx-5" v-for="red in redesSociales" :key="red.textoLink" :texto-link="red.textoLink" :link="red.link" :text-svg="red.textSvg"/>
    </div>
  </section>
</template>

<script>
import VTitle from "./VTitle";
import VDescription from "./VDescription";
import VLink from "./VLink";

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
