<template>
  <div class="flex flex-row items-center justify-center">
    <h2 class="text-3xl md:text-5xl font-amaranth mr-2"> {{textoSubTitulo}} </h2>
    <img class="w-10 h-10 md:w-14 md:h-14" :src="emoji">
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
