<template>
  <div class="card flex flex-row font-ralewayRegular p-2 my-8 md:my-4 md:p-5 mx-3 rounded-3xl text-center shadow-inner border">

    <div class="basis-1/2">
      <a class="h-72 flex justify-center my-4" :href="link">
        <img alt="" class="cursor-pointer h-72" :src="imagenProyecto"/>
      </a>
    </div>

    <div class="basis-1/2">
      <h3 class="text-2xl md:text-3xl text-center font-semibold dark:text-white my-4">{{
          nombreProyecto
        }}</h3>
      <h5 class="my-3">📅 {{ fecha }} </h5>
      <h5 class="italic font-medium mr-8 my-3"> 🔧 {{ herramientas }} </h5>
      <p class="text-lg mb-4 md:text-xl">{{ descripcionProyecto }}</p>


      <div class="flex flex-row justify-center">
        <VLink class="mr-4" v-if="github" :link="linkGithub" texto-link="Github" text-view-box="0 0 46.7 44.6"
               text-svg="M41 16.7c0-4.8-2.5-7.2-2.5-7.2s1.3-5.1-.5-7.2c-2-.2-5.5 1.9-7 2.9 0 0-2.4-1-6.4-1s-6.4 1-6.4 1c-1.5-1-5-3.1-7-2.9-1.8 2.2-.5 7.2-.5 7.2S8.2 12 8.2 16.7c0 12.3 11.6 12.2 11.6 12.2s-1.2 1.3-1.4 3.2c-.8.3-1.9.6-3 .6-2.5 0-4.4-2.4-5.1-3.6-.7-1.1-2.1-2-3.4-2-.9 0-1.3.4-1.3.9s1.2.8 2 1.8c1.7 1.9 1.7 6.3 7.7 6.3.7 0 2-.2 3-.3v3.7c0 .3-.1.5-.1.7.1.7.1 1.3-.1 2 2.1.5 4.2.8 6.4.8 2.3 0 4.5-.3 6.6-.9-.1-.4-.1-.8-.1-1.1v-.8c-.1-.2-.2-.5-.2-.8v-6.6c0-2.3-1.5-4-1.5-4S41 29 41 16.7z"/>

        <VLink v-if="online" :link="linkOnline" texto-link="Online" text-view-box="0 0 30 30"
               text-svg="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/>

      </div>
    </div>
  </div>
</template>

<script>
import VLink from "./VLink";
import VSubtitle from "./VSubtitle";

export default {
  components: {VLink, VSubtitle},

  props: {
    github: {
      type: Boolean,
      required: false,
    },
    online: {
      type: Boolean,
      required: false,
    },
    link: {
      type: String,
      required: true,
    },
    linkOnline: {
      type: String,
      required: false,
      default: " - "
    },
    linkGithub: {
      type: String,
      required: false,
      default: " - "
    },
    imagenProyecto: {
      type: String,
      required: true,
    },
    nombreProyecto: {
      type: String,
      required: true
    },
    fecha: {
      type: String,
      required: true,
    },
    herramientas: {
      type: String,
      required: true,
    },
    descripcionProyecto: {
      type: String,
      required: true
    }
  },

}
</script>

<style>

</style>

