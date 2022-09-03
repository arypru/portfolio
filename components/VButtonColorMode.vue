<template>
  <div>
    <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
      <input type="checkbox" @click="change_color_mode()" :checked="($colorMode.value === 'light') ? 'checked' : false" id="default-toggle" class="sr-only peer">
      <img alt="" v-if="($colorMode.value === 'dark')" class="w-8 h-8 cursor-pointer" src="/images/icons/dark.png"/>
      <img alt="" v-if="($colorMode.value === 'light')" class="w-8 h-8 cursor-pointer" src="/images/icons/light.png"/>
      <span class="ml-2 cursor-pointer tracking-wide leading-relaxed font-ralewayRegular font-medium text-xl md:text-2xl">{{ $colorMode.value }}</span>
    </label>
  </div>
</template>

<script>

export default {

  methods: {
    change_color_mode() {
      if (this.$colorMode.value === 'dark') {
        this.$colorMode.value = 'light'
        this.$colorMode.preference = 'light'
      } else {
        this.$colorMode.value = 'dark'
        this.$colorMode.preference = 'dark'
      }
    }
  }
}
</script>
