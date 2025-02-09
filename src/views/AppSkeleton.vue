<script setup>

import Navbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import {MyPreset} from "@/PrimevuePresets";

const primaryColor = MyPreset.semantic.primary[500];

</script>

<template>
  <navbar/>
  <router-view/>
  <footer class="justify-center items-center flex flex-col" :style="{backgroundColor:primaryColor}">
    <the-footer/>
  </footer>
</template>

<style scoped>
</style>