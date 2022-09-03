<template>
  <div class="flex flex-row items-center justify-center my-10">
    <h2 class="text-6xl font-delindaAgatha mr-2"> {{textoSubTitulo}} </h2>
    <img alt ="" class="w-10 h-10 md:w-14 md:h-14" :src="emoji">
  </div>
</template>

<script>
export default {
  props: {
    textoSubTitulo: {
      type: String,
      required: true,
    },
    emoji:{
      type: String,
      required: true
    }
  }

}
</script>
