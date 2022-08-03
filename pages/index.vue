<template>
  <div>
    <p class="underline decoration-wavy font-amaranth">Prueba Amaranth</p>
    <p class="underline decoration-wavy font-darkergrotesque">Prueba Darker Grotesque</p>

    <div>
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>

  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
