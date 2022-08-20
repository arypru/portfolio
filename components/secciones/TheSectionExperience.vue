<template>
  <section>
    <VSubtitle emoji="/images/icons/computer.png" texto-sub-titulo="Experiencia"/>
    <div class="font-darkergrotesque text-xl md:text-2xl mb-6 xl:mb-0">

      <div class="flex justify-center my-8">
        <a class="w-42 h-8 lg:h-14" href="https://www.instagram.com/susticorrientes/"><img
          class="cursor-pointer grayscale hover:grayscale-0 h-8 lg:h-14" src="/images/logos/logoSusti-Verde.svg"
          alt="logo"/></a>
      </div>

        <VTimeline :rol="'Frontend Developer'" :tiempo="'Agosto 2020 - Marzo 2022'" :experiencia="frontExperiencia"/>
        <VTimeline class="py-12" :rol="'UX/UI Designer'" :tiempo="'Enero 2021 - Marzo 2022'" :experiencia="uiuxExperiencie"/>
        <VTimeline :rol="'Lider del Equipo'" :tiempo="'Octubre 2021 - Marzo 2022'" :experiencia="teachLeader"/>
    </div>
  </section>
</template>

<script>

import VSubtitle from "../VSubtitle";
import VButton from "../VButton";
import VTimeline from "../VTimeline"

export default {
  components: {VSubtitle, VButton, VTimeline},
  data() {
    return {
      frontExperiencia: ["Desarrollos que adaptan la interfaz de usuario a diferentes breakpoints",
        "Optimización de código mediante la creación de componentes y código reutilizable para futuros proyectos",
        "Colaboración con el equipo de diseño y resto del equipo asegurando un producto final de excelencia",
        "Cooperación con los desarrolladores backend en el proceso de consumir la API",
        "Participación desde el prototipo hasta el lanzamiento del Padrón Definitivo y Consultas del Escrutinio Provisorio Elecciones 2021"],

      uiuxExperiencie: ["Participación en entrevistas, a modo de generar una investigación de usuarios (User research)",
        "Utilización de metodología Design Thinking",
        "Generación de ideas produciendo soluciones para todo tipo de usuario",
        "Prototipos de pantallas mediante dibujos y con herramientas (por ejemplo, Figma)",
        "Armado de UI Element"],

      teachLeader: ["Responsable de la gestión de 6 personas con diferentes niveles de experiencia, de los cuales 3 desempeñaban el rol de Backend y 3 de Frontend.",
        "Abogar por un estilo de trabajo basado en compartir conocimiento y en el desarrollo colectivo",
        "Utilización de Brainstorming para el intercambio de ideas de todo el equipo para lograr un desarrollo más participativo",
        "Utilización de Método Kanban para la gestión de proyectos, mediante Post-its y Projects de Github",
        "Leer, entender y elaborar documentos técnicas que proveen información sobre el diseño de las aplicaciones"
      ]
    }
  }
}
</script>
