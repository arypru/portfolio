<template>
  <section>
    <VSubtitle class="my-8 lg:my-12" emoji="/images/icons/proyectos.png" texto-sub-titulo="Proyectos"/>
    <div class="md:grid md:grid-cols-2 lg:grid-cols-3">
      <div v-for="proyecto in proyectos" :key="proyecto.nombreProyecto">
        <VCard :link-github="proyecto.linkGithub" :link-online="proyecto.linkOnline" :link="proyecto.link" :github="proyecto.github" :online="proyecto.online" :imagen-proyecto="proyecto.imagen" :descripcion-proyecto="proyecto.descripcionProyecto" :herramientas="proyecto.herramientas" :fecha="proyecto.fecha" :nombre-proyecto="proyecto.nombreProyecto"/>
      </div>
    </div>
  </section>
</template>

<script>
import VSubtitle from "../VSubtitle";
import VCard from "../VCard";
import ProyectosJson from "/static/json/Proyectos.json";

export default {
  components: {VSubtitle, VCard},
  computed: {
    proyectos() {
      return ProyectosJson.proyectos
    },
  }
}
</script>
