<template>
  <div class="h-[80vh] w-full relative">
    <flickering-grid class="absolute inset-0"/>
    <TypewriterEffect
        class="z-50 absolute  text-white top-1/2 font-bold text-5xl left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style="color:white"
        :strings="['Demystifying investments...', 'Stocks made simple...', 'Investing, without the jargon...','Your financial journey, simplified...']"
        autoStart loop/>
  </div>
</template>

<script setup lang="ts">
import FlickeringGrid from "@/components/FlickeringGrid.vue";
// @ts-ignore
import TypewriterEffect from "vue-typewriter-effect";

</script>

<style scoped>

TypewriterEffect {
  position: absolute;
  z-index: 50; /* Ensure it is high enough */
}

</style>