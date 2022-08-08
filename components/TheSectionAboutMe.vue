<template>
  <section>
    <VTitle texto-titulo="Araceli Pruyas de los Angeles I."/>
    <div class="my-3 md:flex lg:flex-row md:justify-center">
        <VDescription v-for="descrip in descripciones" :key="descrip.textoDescripcion" class="md:mx-4 md:my-3" :texto-descripcion="descrip.textoDescripcion" :emoji="descrip.icon"/>
    </div>
    <VDescription texto-descripcion="Me encanta ser Frontend Developer porque me permite combinar diseño + programacion + creatividad" :emoji="'/images/icons/star.png'"/>
  </section>
</template>

<script>
import VTitle from "./VTitle";
import VDescription from "./VDescription";

export default {
  components: {VTitle,VDescription,VIcon},

  data() {
    return {
      descripciones: [
        {textoDescripcion:'Frontend Developer',icon:'/images/icons/computer.png'},
        {textoDescripcion:'Vue.js', icon:'/images/vuejs.svg'},
        {textoDescripcion:'Argentina', icon:'/images/icons/argentina.png'},
      ],
    }
  }
}
</script>
