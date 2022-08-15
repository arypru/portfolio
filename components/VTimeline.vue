<template>
      <ul class="relative border-l border-gray-200">
        <li class="ml-4 space-y-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="text-lg lg:mb-1 md:text-xl font-normal leading-none">{{ tiempo }}</time>
          <h3 class="text-xl md:text-2xl font-semibold dark:text-white mt-3 mb-1 text-center md:text-left">{{ rol }}</h3>
          <p v-for="front in experiencia" class="text-lg md:text-xl font-normal leading-relaxed"> • {{front}} </p>
        </li>
      </ul>
</template>

<script>

export default {
  props : {
    tiempo: {
      type: String,
      required:true,
      default: "-"
    },
    rol : {
      type: String,
      required: true,
      default: "-"
    },
    experiencia: {
      type: Array,
      required: true,
      default: [],
    }
  },

}
</script>
