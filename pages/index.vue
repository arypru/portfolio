<template>
  <div>
    <TheSectionAboutMe/>
    <VDivider/>
    <TheSectionSkillsTech/>
 </div>
</template>

<script>
import TheSectionAboutMe from "../components/secciones/TheSectionAboutMe";
import VDivider from "../components/VDivider";
import TheSectionSkillsTech from "../components/secciones/TheSectionSkillsTech";

export default {
  components: {VDivider, TheSectionAboutMe, TheSectionSkillsTech}
}
</script>
