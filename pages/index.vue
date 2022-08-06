<template>
  <div>
    <VButtonColorMode/>
    <VTitle texto-titulo="Titulo"/>
    <VSubtitle texto-sub-titulo="Sub Titulo" emoji="/images/icons/argentina.png"/>
    <VDescription texto-descripcion="consectetur adipisicing elit. Animi atque commodi doloremque et odit, sed suscipit! Impedit quas ratione voluptatem?" emoji="/images/icons/star.png"/>
    <VButton texto-button="Me interesa ver mas de tus proyectos "/>
  </div>
</template>

<script>
import VButtonColorMode from "../components/VButtonColorMode";
import VTitle from "../components/VTitle";
import VSubtitle from "../components/VSubtitle";
import VDescription from "../components/VDescription";
import VButton from "../components/VButton";

export default {
  components: {VButton, VDescription, VSubtitle, VTitle, VButtonColorMode}
}
</script>
