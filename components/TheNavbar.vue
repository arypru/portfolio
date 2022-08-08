<template>
  <nav class="h-2/3 flex flex-row justify-center m-5 space-x-1 lg:justify-end lg:mt-5 lg:space-x-4">
    <VButtonColorMode/>
      <div v-for="link in links">
        <VLink :texto-link="link"/>
    </div>
  </nav>
</template>

<script>
import VButtonColorMode from "./VButtonColorMode";
import VLink from "./VLink";

export default {
  components: {VButtonColorMode,VLink},
  data() {
    return {
      links: ['Experiencia', 'Proyectos', 'Contacto'],
    }
  }
}
</script>
