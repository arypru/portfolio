<template>
    <section>
      <VSubtitle emoji="/images/icons/medalla.png" texto-sub-titulo="Habilidades"/>
      <div class="flex flex-row flex-wrap justify-evenly space-x-6 space-y-4 md:my-4 lg:my-6 ">
        <VIcon v-for="skill in SkillsFrontEnd" :key="skill.textoSkill" :src-imagen="skill.srcImagen" :texto-skills="skill.textoSkill"/>
      </div>
      <div class="flex flex-row flex-wrap justify-evenly space-x-6 space-y-4  md:my-4 lg:my-6 ">
        <VIcon v-for="skill in SkillsDesign" :key="skill.textoSkill" :src-imagen="skill.srcImagen" :texto-skills="skill.textoSkill"/>
      </div>
      <h4 class="font-darkergrotesque text-2xl font-extrabold tracking-wide mb-2 md:text-3xl text-center"> Otros </h4>
      <p class="tracking-wide leading-relaxed font-darkergrotesque font-medium mr-2 text-xl md:text-2xl text-center"> Vuex - VueRouter - VueCLI - Laravel - SQL - Github </p>
    </section>
</template>

<script>
import VSubtitle from "../VSubtitle";
import SkillsJson from "/static/json/Skills.json";
import VIcon from "../VIcon";

export default {
  components: {VIcon, VSubtitle},

  computed: {
    SkillsFrontEnd() {
      return SkillsJson.skillsFrontend
    },

    SkillsDesign() {
      return SkillsJson.skillsDesign
    },
  }
}
</script>
