<template>
  <nav class="h-2/3 flex flex-column flex-wrap justify-center m-5 space-x-1 lg:justify-end lg:mt-5 lg:space-x-4">
    <div v-for="link in links">
      <VLinkNavbar :link="link.id" :texto-link="link.texto"/>
    </div>
    <VButtonColorMode/>
  </nav>
</template>

<script>
import VButtonColorMode from "./VButtonColorMode";
import VLinkNavbar from "./VLinkNavbar";

export default {
  components: {VLinkNavbar, VButtonColorMode},
  data() {
    return {
      // links: ['Skills', 'Experiencia', 'Proyectos'],
      links: [
        {"texto": "Inicio", "id": "#inicio"},
        {"texto": "Experiencia", "id": "#experiencia"},
        {"texto": "Habilidades", "id": "#skills"},
        {"texto": "Proyectos", "id": "#proyectos"},
      ]
    }
  }
}
</script>
