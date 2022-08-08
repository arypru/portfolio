<template>
  <div class="flex flex-row items-center justify-center">
    <p class="tracking-wide leading-relaxed font-darkergrotesque font-medium mr-2 text-xl md:text-2xl">{{ textoDescripcion }} </p>
    <img class="w-6 h-6 md:w-8 md:h-8" :src="emoji" alt="emoji">
  </div>
</template>

<script>
export default {
  props: {
    textoDescripcion: {
      type: String,
      required: true,
    },
    emoji:{
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
