<template>
  <div>
    <h1 class="text-6xl font-amaranth">{{ textoTitulo }}</h1>
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
