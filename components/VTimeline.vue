<template>
      <ul class="relative border-l border-gray-200 dark:border-gray-700">
        <li class="ml-4 pt-7">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">{{ tiempo }}</time>
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">{{ rol }}</h3>
          <p v-for="front in experiencia" class=" text-xl font-normal text-gray-500 dark:text-gray-400"> • {{front}} </p>
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
