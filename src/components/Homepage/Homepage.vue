<script setup lang="ts">
import HowToGetStarted from "@/components/HowToGetStarted.vue";
import LandingText from "@/components/Homepage/LandingText.vue";
import HowItWorks from "@/components/HowItWorks.vue";
import Safety from "@/components/Homepage/Safety.vue";

</script>

<template>
  <div class="flex flex-col !w-full items-center justify-center">
    <landing-text/>
    <how-it-works/>
    <div ref="gettingStartedContainer" class="w-full justify-center items-center flex flex-col">
      <how-to-get-started/>
    </div>
    <safety/>
  </div>
</template>

<script lang="ts">
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
export default {
  name: "LandingPage",
  mounted() {
    const container:any = this.$refs.gettingStartedContainer

    gsap.to(container, {
      scale: 0.9, // Scale down to 50%
      ease: "power1.out",
      scrollTrigger: {
        trigger: container,
        start: "top top", // Start scaling as the component reaches the top of the viewport
        scrub: 1,         // Smooth scaling while scrolling
      },
    });
  },
};
</script>

<style scoped>
</style>