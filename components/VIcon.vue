<template>
  <img alt="" class="justify-center-center grayscale hover:grayscale-0 h-14 w-14" :src="scrImagen">
</template>

<script>
export default {
  props:{
    srcImagen: {
      type: String,
      required: true,
    }
  }
}
</script>
