<template>
  <img alt="" class="justify-center-center grayscale hover:grayscale-0 h-14 w-14" :src="srcImagen">
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
