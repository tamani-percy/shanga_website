<script setup lang="ts">

//@ts-ignore
import router from "@/router";
import Button from "primevue/button"
</script>

<template>
  <div class="w-full flex flex-col items-center p-20 gap-10">
    <h1 class="text-4xl font-bold text-center pt-10 pb-2">Ready to Start Investing?</h1>
    <p class="text-lg text-center text-wrap lg:w-1/2">Join fellow investors in building their wealth
      through smart, simple investing. </p>
    <div class="flex flex-row gap-x-2">
      <Button
          size="large"
          label="Create Account"
          @click="router.push({ name: 'coming_soon' })"
      />
      <Button
          outlined
          label="Contact Us"
          size="large"
          @click="router.push({ name: 'contact_us' })"
      />
    </div>
  </div>
</template>

<style scoped>

</style>