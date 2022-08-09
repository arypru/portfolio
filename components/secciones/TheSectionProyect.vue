<template>
  <section>
    <VSubtitle class="my-8 lg:my-12" emoji="/images/icons/proyectos.png" texto-sub-titulo="Proyectos"/>
    <div class="grid md:grid-cols-2 lg:grid-cols-3">
      <div v-for="proyecto in proyectos" :key="proyecto.nombreProyecto">
        <VCard :descripcion-proyecto="proyecto.descripcionProyecto" :herramientas="proyecto.herramientas" :nombre-proyecto="proyecto.nombreProyecto"/>
      </div>
    </div>
    <div class="flex justify-center my-8">
      <VButton texto-button="Me interesa ver más de tus proyectos"/>
    </div>
  </section>
</template>

<script>
import VSubtitle from "../VSubtitle";
import VCard from "../VCard";
import ProyectosJson from "/static/json/Proyectos.json";
import VButton from "../VButton";

export default {
  components: {VSubtitle, VCard,VButton},
  computed: {
    proyectos() {
      return ProyectosJson.proyectos
    },
  }
}
</script>
