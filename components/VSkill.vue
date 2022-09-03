<template>
  <div class="font-ralewayRegular">
    <h3 class="text-2xl font-semibold mb-3"> {{ nombreSkill }} </h3>
    <div class="flex flex-row flex-wrap">
      <p v-for="skill in skills"
         class="px-4 py-2 m-1.5 bg-transparent border border-fucsia text-xl rounded">
        {{ skill }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nombreSkill: {
      type:String,
      required: true,
      default: "- "
    },
    skills: {
      type: Array,
      required: true,
      default: []
    }
  }
}
</script>
