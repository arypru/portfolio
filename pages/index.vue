<template>
  <div>
    <TheSectionAboutMe/>
    <VDivider/>
    <TheSectionSkillsTech/>
    <VDivider/>
    <TheSectionProyect/>
 </div>

</template>

<script>
import TheSectionAboutMe from "../components/secciones/TheSectionAboutMe";
import VDivider from "../components/VDivider";
import TheSectionSkillsTech from "../components/secciones/TheSectionSkillsTech";
import TheSectionProyect from "../components/secciones/TheSectionProyect"

export default {
  components: {VDivider, TheSectionAboutMe, TheSectionSkillsTech, TheSectionProyect}
}
</script>
