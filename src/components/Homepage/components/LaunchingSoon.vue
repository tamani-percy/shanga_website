<script setup lang="ts">

//@ts-ignore
import router from "@/router";
//@ts-ignore
import InteractiveHoverButton from "@/components/ui/interactive-hover-button/InteractiveHoverButton.vue";
</script>

<template>
  <div class="bg-[#03807A] w-full flex flex-col items-center pb-10 gap-10">
    <h1 class="text-4xl font-bold text-center text-textColor pt-10 pb-2">Launching soon 🚀</h1>
    <p class="text-lg text-center text-textColor text-wrap lg:w-1/2">We will be launching our web dashboard and mobile
      application very
      soon that will make equity development easy for the average consumer. We can't wait to share the new platform
      with you. Stay tuned for more updates. </p>
    <InteractiveHoverButton text="View Updates" @click="router.push({name:'updates'})"/>
  </div>
</template>

<style scoped>

</style>