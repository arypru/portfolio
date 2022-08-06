<template>
  <div>
    <VButtonColorMode/>
    <p class="underline decoration-wavy font-darkergrotesque">Prueba Darker Grotesque</p>
    <VTitle texto-titulo="Titulo"/>
    <VSubtitle texto-sub-titulo="Sub Titulo" emoji="/images/icons/argentina.png"/>
  </div>
</template>
<script>
import VTitle from "../components/VTitle";
import VSubtitle from "../components/VSubtitle";
export default {
  components: {VSubtitle, VTitle}
}
</script>
