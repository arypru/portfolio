<template>
  <section>
    <VSubtitle emoji="/images/icons/medalla.png" texto-sub-titulo="Habilidades"/>

    <h3 class="text-2xl font-semibold "> Frontend Developer</h3>
    <div class="flex flex-row py-8">
        <span v-for="skill in skillsFrontend"
              class="px-4 py-2 my-1.5 font-darkergrotesque bg-transparent border border-fucsia text-xl rounded">
        {{ skill }}
      </span>
    </div>

    <h3 class="text-2xl font-semibold"> Frontend Developer </h3>
    <div class="space-x-4 flex flex-row flex-wrap">
      <p v-for="skill in skillsUxUi"
         class="px-4 py-2 my-1.5 font-darkergrotesque bg-transparent border border-fucsia text-xl rounded">
        {{ skill }}
      </p>
    </div>

    <h3 class="text-2xl font-semibold"> Design UI/UX</h3>
    <div class="space-x-4 flex flex-row flex-wrap">
      <p v-for="skill in skillsUxUi"
         class="px-4 py-2 my-1.5 font-darkergrotesque bg-transparent border border-fucsia text-xl rounded">
        {{ skill }}
      </p>
    </div>

    <h3 class="text-2xl font-semibold"> Backend Developer</h3>
    <div class="space-x-4 flex flex-row flex-wrap">
      <p v-for="skill in skillsBack"
         class="px-4 py-2 my-1.5 font-darkergrotesque bg-transparent border border-fucsia text-xl rounded">
        {{ skill }}
      </p>
    </div>

    <h3 class="text-2xl font-semibold"> Agile mindset </h3>
    <div class="space-x-4 flex flex-row flex-wrap">
      <p v-for="skill in skillsAgile"
         class="px-4 py-2 my-1.5 font-darkergrotesque bg-transparent border border-fucsia text-xl rounded">
        {{ skill }}
      </p>
    </div>
    <!--<div class="flex flex-row flex-wrap justify-evenly space-x-6 space-y-4 md:my-4 lg:my-6 ">
      <VIcon v-for="skill in skills" :key="skill.textoSkill" :src-imagen="skill.srcImagen" :texto-skills="skill.textoSkill"/>
    </div>-->


  </section>
</template>

<script>
import VSubtitle from "../VSubtitle";
import SkillsJson from "/static/json/Skills.json";
import VIcon from "../VIcon";

export default {
  components: {VIcon, VSubtitle},

  data() {
    return {
      skillsFrontend: ["Javascript", "CSS", "Html", "Vue.js",
        "Vuetify", "Tailwind CSS", "Nuxt.js"],

      skillsUxUi: ["Prototipado", "Figma", "Adobe Illustrator", "Adobe Photoshop",
        "Entrevistas"],

      skillsBack: ["Laravel", "MySQL", "PHP"],

      skillsAgile: ["Pair Programming", "Group Programming", "Brainstorming", "Kanban"],
    }
  }
}
</script>
