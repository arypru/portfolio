<template>
  <div>
    <VButtonColorMode/>
    <VTitle texto-titulo="Titulo"/>
    <VSubtitle texto-sub-titulo="Sub Titulo" emoji="/images/icons/argentina.png"/>
    <VDescription texto-descripcion="consectetur adipisicing elit. Animi atque commodi doloremque et odit, sed suscipit! Impedit quas ratione voluptatem?" emoji="/images/icons/star.png"/>
  </div>
</template>

<script>
import VButtonColorMode from "../components/VButtonColorMode";
import VTitle from "../components/VTitle";
import VSubtitle from "../components/VSubtitle";
import VDescription from "../components/VDescription";

export default {
  components: {VDescription, VSubtitle, VTitle, VButtonColorMode}
}
</script>
