<template>
  <div class="flex flex-col items-center justify-center">
    <img alt="" class="justify-center-center grayscale hover:grayscale-0 h-14 w-14" :src="srcImagen">
    <p class="tracking-wide leading-relaxed font-darkergrotesque font-medium mr-2 text-xl md:text-2xl">{{ textoSkills }} </p>
  </div>
</template>

<script>
export default {
  props:{
    srcImagen: {
      type: String,
      required: true,
    },

    textoSkills : {
      type: String,
      required: true,
    }
  }
}
</script>
