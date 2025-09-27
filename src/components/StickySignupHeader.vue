<script setup lang="ts">
import Message from 'primevue/message';
// @ts-ignore
import router from "@/router";

const goToSignupSurvey = () => {
  router.push({name: 'coming_soon'});
};
</script>

<template>
  <div>
    <Message severity="contrast" closable>
      <div class="flex flex-row flex-wrap">
        <p class="text-base sm:text-lg m-0">
          Hey there! To ensure we can tailor your experience perfectly when we launch, would you kindly take a quick
          moment to fill out our
          <router-link :to="{name:'coming_soon'}"
                       class="font-bold text-primary-900 hover:underline"
          >
            Signup Survey.
          </router-link>
          You can optionally fill out the Platform Survey afterwards!
        </p>
      </div>
    </Message>
  </div>
</template>

<style scoped>
/* You can add specific styling here if needed */
</style>