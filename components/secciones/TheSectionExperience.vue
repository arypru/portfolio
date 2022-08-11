<template>
  <section>
    <VSubtitle emoji="/images/icons/computer.png" texto-sub-titulo="Experiencia"/>

    <div class="grid xl:grid-cols-3 xl:gap-4 text-center tracking-wide leading-relaxed my-8">

      <div class="font-darkergrotesque text-xl md:text-2xl mb-6 xl:mb-0">
        <a class="flex justify-center" href="https://www.instagram.com/susticorrientes/"><img
          class="cursor-pointer grayscale hover:grayscale-0 h-8 lg:h-14" src="/images/logos/logoSusti-Verde.svg"
          alt="logo"/></a>
        <p class="font-bold my-3">Agosto 2020 -  Marzo 2022 </p>
        <p class=" font-medium mr-2">
          Desarrollos de sistemas orientadas a distintas áreas de las instituciones del Estado apostando a la
          modernización de las mismas.
          El Padrón Definitivo y Consultas del Escrutinio Provisorio Elecciones 2021 para la provincia de Corrientes
          fuerón uno de los muchos desarrollos que contribuí.
        </p>
        <VButton class="mt-4" texto-button="Quiero saber más"/>
      </div>

      <div class="lg:col-span-2 flex flex-wrap justify-evenly lg:flex-nowrap items-center space-y-8 lg:space-y-0">
        <div v-for="rol in roles" :key="rol.textoRol">
          <img alt="" class="grayscale hover:grayscale-0 h-52 w-62" :src="rol.imagen">
          <p class="font-darkergrotesque text-2xl font-bold tracking-wide "> {{ rol.textoRol }} </p>
        </div>
      </div>
    </div>

  </section>
</template>

<script>

import VSubtitle from "../VSubtitle";
import VButton from "../VButton";

export default {
  components: {VSubtitle, VButton},

  data() {
    return {
      roles: [
        {imagen: '/images/experiencia/frontend.svg', textoRol: 'Frontend Developer'},
        {imagen: '/images/experiencia/design.svg', textoRol: 'Design UX/UI'},
        {imagen: '/images/experiencia/mentoria.svg', textoRol: 'Coaching'},
        {imagen: '/images/experiencia/liderazgo.svg', textoRol: 'Liderazgo equipo'},
      ]
    }
  }
}
</script>
