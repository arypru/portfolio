<template>
  <div class="flex flex-row items-center justify-center">
    <p class="tracking-wide leading-relaxed font-darkergrotesque font-medium text-base md:text-2xl"> {{textoLink}} </p>
    <svg class="h-4 w-4 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" :viewBox="textViewBox" xml:space="preserve">
      <path :d="textSvg"/>
    </svg>
  </div>
</template>

<script>
export default {

  props: {
    textViewBox: {
      type: String,
      required: true,
    },
    textSvg: {
      type: String,
      required: true,
    },
    textoLink: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped>
.dark-mode svg {
  fill:#FFFFFF;
}
.light-mode p {
  color:#FF0E47
}
.light-mode svg {
  fill:#FF0E47
}
</style>
