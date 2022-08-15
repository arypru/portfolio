<template>
  <section>
    <VSubtitle emoji="/images/icons/medalla.png" texto-sub-titulo="Habilidades"/>
    <div class="space-y-12">
      <VSkill :skills="skillsFrontend" :nombre-skill="'Frontend Developer'"/>
      <VSkill :skills="skillsUxUi" :nombre-skill="'Design UI/UX'"/>
      <VSkill :skills="skillsBack" :nombre-skill="'Backend Developer'"/>
      <VSkill :skills="skillsAgile" :nombre-skill="'Agile Mindset'"/>
    </div>
  </section>
</template>

<script>
import VSubtitle from "../VSubtitle";
import SkillsJson from "/static/json/Skills.json";
import VIcon from "../VIcon";
import VSkill from "../VSkill";

export default {
  components: {VIcon, VSubtitle,VSkill},

  data() {
    return {
      skillsFrontend: ["Javascript", "CSS", "Html", "Vue.js",
        "Nuxt.js", "Tailwind CSS", "Vuetify"],

      skillsUxUi: ["Prototipado", "Figma", "Adobe Illustrator", "Adobe Photoshop",
        "Entrevistas"],

      skillsBack: ["Laravel", "MySQL", "PHP"],

      skillsAgile: ["Pair Programming", "Group Programming", "Brainstorming", "Kanban"],
    }
  }
}
</script>
