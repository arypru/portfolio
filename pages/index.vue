<template>
  <div class="space-y-12">
    <TheSectionAboutMe/>
    <VDivider/>
    <div class="lg:grid lg:grid-cols-2 lg:gap-20">
      <div>
        <TheSectionExperience/>
      </div>
      <div>
        <TheSectionSkillsTech/>
        <TheSectionEducation/>
      </div>
    </div>
    <VDivider/>
    <TheSectionProyect/>
 </div>

</template>

<script>
import TheSectionAboutMe from "../components/secciones/TheSectionAboutMe";
import VDivider from "../components/VDivider";
import TheSectionSkillsTech from "../components/secciones/TheSectionSkillsTech";
import TheSectionProyect from "../components/secciones/TheSectionProyect";
import TheSectionExperience from "../components/secciones/TheSectionExperience";
import TheSectionEducation from "../components/secciones/TheSectionEducation"

export default {
  components: {VDivider, TheSectionAboutMe, TheSectionSkillsTech, TheSectionProyect, TheSectionExperience,TheSectionEducation}
}
</script>
