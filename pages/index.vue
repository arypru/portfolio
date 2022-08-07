<template>
  <div>
    <VButtonColorMode/>
    <VTitle texto-titulo="Titulo"/>
    <VSubtitle texto-sub-titulo="Sub Titulo" emoji="/images/icons/argentina.png"/>
    <VDescription texto-descripcion="consectetur adipisicing elit. Animi atque commodi doloremque et odit, sed suscipit! Impedit quas ratione voluptatem?" emoji="/images/icons/star.png"/>
    <VButton texto-button="Me interesa ver mas de tus proyectos "/>
    <VLink texto-link="Github" text-view-box="0 0 46.7 44.6"  text-svg="M41 16.7c0-4.8-2.5-7.2-2.5-7.2s1.3-5.1-.5-7.2c-2-.2-5.5 1.9-7 2.9 0 0-2.4-1-6.4-1s-6.4 1-6.4 1c-1.5-1-5-3.1-7-2.9-1.8 2.2-.5 7.2-.5 7.2S8.2 12 8.2 16.7c0 12.3 11.6 12.2 11.6 12.2s-1.2 1.3-1.4 3.2c-.8.3-1.9.6-3 .6-2.5 0-4.4-2.4-5.1-3.6-.7-1.1-2.1-2-3.4-2-.9 0-1.3.4-1.3.9s1.2.8 2 1.8c1.7 1.9 1.7 6.3 7.7 6.3.7 0 2-.2 3-.3v3.7c0 .3-.1.5-.1.7.1.7.1 1.3-.1 2 2.1.5 4.2.8 6.4.8 2.3 0 4.5-.3 6.6-.9-.1-.4-.1-.8-.1-1.1v-.8c-.1-.2-.2-.5-.2-.8v-6.6c0-2.3-1.5-4-1.5-4S41 29 41 16.7z"/>
    <VIcon src-imagen="/images/vuejs.svg"/>
  </div>
</template>

<script>
import VButtonColorMode from "../components/VButtonColorMode";
import VTitle from "../components/VTitle";
import VSubtitle from "../components/VSubtitle";
import VDescription from "../components/VDescription";
import VButton from "../components/VButton";
import VLink from "../components/VLink";
import VIcon from "../components/VIcon";

export default {
  components: {VIcon, VLink, VButton, VDescription, VSubtitle, VTitle, VButtonColorMode}
}
</script>
