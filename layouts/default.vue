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
