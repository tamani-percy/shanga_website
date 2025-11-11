<script setup lang="ts">
import LandingText from "@/components/Homepage/components/LandingText.vue";
import HowItWorks from "@/components/Homepage/components/HowItWorks.vue";
import EstimatesCalculator from "@/components/Homepage/components/EstimatesCalculator.vue";
import CoreFeatureCards from "@/components/Homepage/components/CoreFeatureCards.vue";
import LaunchingSoon from "@/components/Homepage/components/LaunchingSoon.vue";
import ReadyToStart from "@/components/Homepage/components/ReadyToStart.vue";
</script>

<template>
  <div class="flex flex-col !w-full items-center justify-center">
    <landing-text/>
    <core-feature-cards/>
    <how-it-works/>

    <div ref="estimationCalculator" class="w-full justify-center items-center flex flex-col">
      <estimates-calculator/>
    </div>
    <launching-soon/>
    <ready-to-start/>

  </div>
  <hr>

</template>

<script lang="ts">

export default {
  name: "LandingPage",
};
</script>

<style scoped>
hr {
  color: white;
}
</style>