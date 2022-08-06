<template>
  <div>
    <h1 class="text-4xl md:text-6xl font-amaranth text-center">{{ textoTitulo }}</h1>
  </div>
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
