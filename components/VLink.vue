<template>
  <div class="flex flex-row items-center justify-center">
    <a target="_blank" :href="link" class="mr-1 cursor-pointer hover:underline tracking-wide leading-relaxed font-darkergrotesque font-medium text-xl md:text-3xl"> {{textoLink}} </a>
    <svg class="h-4 w-4 md:h-6 md:w-6 mt-1" xmlns="http://www.w3.org/2000/svg" :viewBox="textViewBox" xml:space="preserve">
      <path :d="textSvg"/>
    </svg>
  </div>
</template>

<script>
export default {

  props: {
    link: {
      type: String,
      required: false,
    },
    textViewBox: {
      type: String,
      required: false,
    },
    textSvg: {
      type: String,
      required: false,
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
  fill:#f17997;
}
.light-mode a {
  color:rgb(187, 50, 76)
}
.light-mode svg {
  fill:rgb(187, 50, 76)
}
</style>
