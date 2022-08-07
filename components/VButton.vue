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
  color:rgb(187, 50, 76);
  border: 1px solid rgb(187, 50, 76);
}

.light-mode button:hover{
  color:#FFF;
  background-color: rgb(187, 50, 76);
}

.dark-mode button {
  color:#FFBACA;
  border: 1px solid #FFBACA;
}

.dark-mode button:hover{
  color:rgb(187, 50, 76);
  background-color: #FFF;
}
</style>
