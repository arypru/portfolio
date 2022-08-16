<template>
  <section class="font-darkergrotesque text-xl md:text-2xl mb-6 xl:mb-0">
    <VSubtitle emoji="/images/icons/educacion.png" texto-sub-titulo="Educación"/>

<!--
    <div class="flex justify-center my-8">
      <a class="w-42 h-8 lg:h-32" href="https://exa.unne.edu.ar/r/?page_id=8390"><img
        class="h-32 cursor-pointer grayscale hover:grayscale-0 " src="/images/logos/unne.png"
        alt="logo"/></a>
    </div>
-->

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
        "Programacion Orientada a Objetos",
        "Taller de Programacion I y II (Desarrollo de aplicaciones web y escritorio)",
        "Ingenieria del Software (Gestión de proyectos, requisitos funcionales/no funcionales, casos de uso)",
        "Bases de Datos",
        "En desarrollo de tesis enfocada en la seguridad informatica"],
    }
  }

}

</script>
