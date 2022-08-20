<template>
  <transition name="fade">
    <div id="pagetop" class=" fixed right-0 bottom-0 mr-14" v-show="scY > 300" @click="toTop">
      <img class="cursor-pointer h-20 w-20" src="/images/up.png"/> </div>
  </transition>
</template>

<script>
export default {
  data(){
    return {
      scTimer: 0,
      scY: 0,
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
  },
}
</script>
