<template>
    <div class="font-darkergrotesque p-5 mx-3 border rounded-3xl text-center">
      <h4 class="text-2xl font-extrabold tracking-wide md:text-3xl"> {{ nombreProyecto }}</h4>

      <div class="flex flex-row my-2 justify-center text-lg md:text-xl">
        <img class="w-4 h-4 mr-1 mt-1 mb-6" src="/images/icons/herramientas.png">
        <p class="font-medium italic "> {{herramientas}} </p>
      </div>

      <p class="font-medium text-lg mb-4 md:text-xl">{{ descripcionProyecto }}</p>

      <div class="py-3 px-6 border-t border-gray-300 text-gray-600 md:flex md:flex-row md:justify-between">
        <div v-for="link in links">
          <VLink :texto-link="link.textoLink" :text-view-box="link.textoViewBox"  :text-svg="link.textoSVG"/>
        </div>
      </div>
    </div>
</template>

<script>
import VLink from "./VLink";
export default {
  components: {VLink},

  props: {
    nombreProyecto: {
      type: String,
      required: true
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

  data() {
    return {
      links: [
        { textoLink: 'Github' , textoViewBox: '0 0 46.7 44.6', textoSVG: 'M41 16.7c0-4.8-2.5-7.2-2.5-7.2s1.3-5.1-.5-7.2c-2-.2-5.5 1.9-7 2.9 0 0-2.4-1-6.4-1s-6.4 1-6.4 1c-1.5-1-5-3.1-7-2.9-1.8 2.2-.5 7.2-.5 7.2S8.2 12 8.2 16.7c0 12.3 11.6 12.2 11.6 12.2s-1.2 1.3-1.4 3.2c-.8.3-1.9.6-3 .6-2.5 0-4.4-2.4-5.1-3.6-.7-1.1-2.1-2-3.4-2-.9 0-1.3.4-1.3.9s1.2.8 2 1.8c1.7 1.9 1.7 6.3 7.7 6.3.7 0 2-.2 3-.3v3.7c0 .3-.1.5-.1.7.1.7.1 1.3-.1 2 2.1.5 4.2.8 6.4.8 2.3 0 4.5-.3 6.6-.9-.1-.4-.1-.8-.1-1.1v-.8c-.1-.2-.2-.5-.2-.8v-6.6c0-2.3-1.5-4-1.5-4S41 29 41 16.7z'},
        { textoLink: 'Quiero Verlo!' , textoViewBox: '0 0 30 30', textoSVG: 'M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z'},
        { textoLink: 'Ver mas detalles' , textoViewBox: '0 0 25 25', textoSVG: 'M12.01 20c-5.065 0-9.586-4.211-12.01-8.424 2.418-4.103 6.943-7.576 12.01-7.576 5.135 0 9.635 3.453 11.999 7.564-2.241 4.43-6.726 8.436-11.999 8.436zm-10.842-8.416c.843 1.331 5.018 7.416 10.842 7.416 6.305 0 10.112-6.103 10.851-7.405-.772-1.198-4.606-6.595-10.851-6.595-6.116 0-10.025 5.355-10.842 6.584zm10.832-4.584c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 1c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z'},
      ],
    }
  }

}
</script>
