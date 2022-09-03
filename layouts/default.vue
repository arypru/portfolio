<template>
  <div>
    <TheNavbar/>
    <div class="container px-4 lg:px-24">
      <Nuxt />
    </div>
    <TheFooter/>
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar";
import TheFooter from "../components/TheFooter"
export default {
  components: {TheNavbar, TheFooter}
}
</script>

<style>
@font-face {
  font-family: Delinda-Agatha;
  src: url('/fonts/Delinda Agatha.otf');
}

@font-face {
  font-family: Raleway-Regular;
  src: url('/fonts/Raleway-Regular.ttf');
}
</style>
