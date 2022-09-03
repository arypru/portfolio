<template>
  <div class="flex flex-row items-center justify-center mb-8">
    <p class="tracking-wide leading-relaxed font-ralewayRegular  mr-2 text-lg md:text-xl">{{ textoDescripcion }}
    <img class="inline-block w-6 h-6 md:w-8 md:h-8" :src="emoji" alt="emoji"></p>
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
