<template>
  <div class="space-y-12">
    <TheSectionAboutMe id="inicio"/>
    <VDivider/>
    <div class="lg:grid lg:grid-cols-2 lg:gap-20">
      <div>
        <TheSectionExperience id="experiencia"/>
      </div>
      <div>
        <TheSectionSkillsTech id="skills"/>
        <TheSectionEducation/>
      </div>
    </div>
    <VDivider/>
    <TheSectionProyect id="proyectos"/>
    <VscrollTopButton/>
  </div>

</template>

<script>
import TheSectionAboutMe from "../components/secciones/TheSectionAboutMe";
import VDivider from "../components/VDivider";
import TheSectionSkillsTech from "../components/secciones/TheSectionSkillsTech";
import TheSectionProyect from "../components/secciones/TheSectionProyect";
import TheSectionExperience from "../components/secciones/TheSectionExperience";
import TheSectionEducation from "../components/secciones/TheSectionEducation";
import VscrollTopButton from "../components/VscrollTopButton";

export default {
  components: {
    VscrollTopButton,
    VDivider,
    TheSectionAboutMe,
    TheSectionSkillsTech,
    TheSectionProyect,
    TheSectionExperience,
    TheSectionEducation
  },

}
</script>
