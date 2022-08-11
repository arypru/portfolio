<template>
  <div>
    <TheSectionAboutMe/>
    <VDivider/>
    <TheSectionSkillsTech/>
    <VDivider/>
    <TheSectionExperience/>
    <VDivider/>
    <TheSectionProyect/>
 </div>

</template>

<script>
import TheSectionAboutMe from "../components/secciones/TheSectionAboutMe";
import VDivider from "../components/VDivider";
import TheSectionSkillsTech from "../components/secciones/TheSectionSkillsTech";
import TheSectionProyect from "../components/secciones/TheSectionProyect";
import TheSectionExperience from "../components/secciones/TheSectionExperience"

export default {
  components: {VDivider, TheSectionAboutMe, TheSectionSkillsTech, TheSectionProyect, TheSectionExperience}
}
</script>
