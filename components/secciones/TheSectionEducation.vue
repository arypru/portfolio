<template>
  <section class="font-darkergrotesque text-xl md:text-2xl mb-6 xl:mb-0">
    <VSubtitle emoji="/images/icons/educacion.png" texto-sub-titulo="Educación"/>
    <VTimeline :experiencia="skillsEducacion" :rol="'Licenciatura en Sistemas de Información'" :tiempo="'2017-2023'"/>
  </section>
</template>

<script>
import VSubtitle from "../VSubtitle";
import VTimeline from "../VTimeline";

export default {
  components: {VSubtitle, VTimeline},

  data() {
    return {
      skillsEducacion: ["Algoritmos y Estructura de Datos",
        "Programación Orientada a Objetos",
        "Taller de Programación I y II (Desarrollo de aplicaciones web y escritorio)",
        "Ingeniería del Software (Gestión de proyectos, requisitos funcionales/no funcionales, casos de uso)",
        "Bases de Datos",
        "En desarrollo de tesis enfocada en la seguridad informática"],
    }
  }

}

</script>
