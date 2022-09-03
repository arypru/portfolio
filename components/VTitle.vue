<template>
    <h1 class="py-6 text-6xl md:text-8xl lg:text-8xl xl:text-9xl font-delindaAgatha">{{ textoTitulo }}</h1>
</template>

<script>
export default {
  props: {
    textoTitulo: {
      type: String,
      required: true,
    }
  }
}
</script>

<style>

h1{
  width: 13.2ch;
  animation: typing 2s steps(22), .5s step-end infinite;
  white-space: nowrap;
  overflow: hidden;
  animation-delay: 2ms;
  animation-iteration-count: infinite;
  animation-direction: alternate;

}
@keyframes typing {
  from {
    width: 0
  }
}

</style>
