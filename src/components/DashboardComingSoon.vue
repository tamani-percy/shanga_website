<script setup lang="ts">

import SparklesText from "@/components/ui/sparkles-text/SparklesText.vue";
</script>

<template>
  <div class="p-10 mt-20 flex justify-center flex-col items-center text-center">
    <SparklesText
        text="COMING SOON"
        :colors="{ first: '#9E7AFF', second: '#FE8BBB' }"
        :sparkles-count="10"
        class="my-8"
    />
    <p class="text-xl md:text-2xl">We're putting the final touches on the new dashboard! </p>
    <p class="text-xl md:text-2xl">Stay tuned for an optimized
      experience designed just for you. </p>
    <p class="text-xl md:text-2xl">Check back soon—we’ll be ready for you!😊</p>
    <img src="/public/gifs/coming_soon.gif" alt="" class="md:w-1/4 w-[300px]">
  </div>
</template>

<style scoped>

</style>