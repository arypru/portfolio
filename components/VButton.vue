<template>
  <button class="text-center bg-transparent font-darkergrotesque text-xl px-11 md:text-3xl py-1 md:px-20 rounded-full">
    {{textoButton}}
  </button>
</template>

<script>
export default {
  props: {
    textoButton: {
      type: String,
      required: true,
    }
  }
}
</script>


<style scoped>
.light-mode button {
  color:#FF0E47;
  border: 1px solid #FF0E47;
}

.light-mode button:hover{
  color:#FFF;
  background-color: #FF0E47;
}

.dark-mode button {
  color:#FFFF;
  border: 1px solid #FFFF;
}

.dark-mode button:hover{
  color:#FF0E47;
  background-color: #FFF;
}
</style>
