<template>
  <div>
    <VButtonColorMode/>
    <VTitle texto-titulo="Titulo"/>
    <VSubtitle texto-sub-titulo="Sub Titulo" emoji="/images/icons/argentina.png"/>
    <VDescription texto-descripcion="consectetur adipisicing elit. Animi atque commodi doloremque et odit, sed suscipit! Impedit quas ratione voluptatem?" emoji="/images/icons/star.png"/>
    <VButton texto-button="Me interesa ver mas de tus proyectos "/>
    <VDivider/>
    <VIcon src-imagen="/images/vuejs.svg"/>
    <VCard nombre-proyecto="Sistema de Expedientes" herramientas="Vue.js - Vuetify - Axios" descripcion-proyecto=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, nam? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, impedit. Lorem ipsum dolor sit amet."/>
  </div>
</template>

<script>
import VButtonColorMode from "../components/VButtonColorMode";
import VTitle from "../components/VTitle";
import VSubtitle from "../components/VSubtitle";
import VDescription from "../components/VDescription";
import VButton from "../components/VButton";
import VIcon from "../components/VIcon";
import VDivider from "../components/VDivider";
import VCard from "../components/VCard";

export default {
  components: {VIcon, VButton, VDescription, VSubtitle, VTitle, VButtonColorMode,VDivider, VCard}
}
</script>
