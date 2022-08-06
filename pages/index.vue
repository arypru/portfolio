<template>
  <div>
    <VButtonColorMode/>
    <p class="underline decoration-wavy font-darkergrotesque">Prueba Darker Grotesque</p>
    <VTitle texto-titulo="Titulo"/>

    <div class="flex flex-row items-center justify-center">
      <h2 class="text-5xl font-amaranth"> Hola pepe </h2>
      <img class="w-14 h-14" src="/images/icons/medalla.png">
    </div>


  </div>
</template>
<script>
import VTitle from "../components/VTitle";
export default {
  components: {VTitle}
}
</script>
