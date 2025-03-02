<script setup lang="ts">
import HowToGetStarted from "@/components/HowToGetStarted.vue";
import LandingText from "@/components/Homepage/LandingText.vue";
import HowItWorks from "@/components/HowItWorks.vue";
import Safety from "@/components/Homepage/Safety.vue";
import EstimatesCalculator from "@/components/Homepage/EstimatesCalculator.vue";

</script>

<template>
  <div class="flex flex-col !w-full items-center justify-center">
    <landing-text/>
    <how-it-works/>

    <div ref="estimationCalculator" class="w-full justify-center items-center flex flex-col">
      <estimates-calculator/>
    </div>

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
    const container: any = this.$refs.gettingStartedContainer
    const otherContainer: any = this.$refs.estimationCalculator

    gsap.to(container, {
      scale: 0.9,
      ease: "power1.out",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        scrub: 1,
      },
    });

    gsap.to(otherContainer, {
      scale: 0.9,
      ease: "power1.out",
      scrollTrigger: {
        trigger: otherContainer,
        start: "top top",
        scrub: 2,
      },
    });
  },
};
</script>

<style scoped>
</style>