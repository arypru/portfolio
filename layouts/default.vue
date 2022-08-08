<template>
  <div>
    <TheNavbar/>
    <div class="container md mx-auto px-3 lg:px-14">
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
