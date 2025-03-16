<script setup lang="ts">
import HowToGetStarted from "@/components/HowToGetStarted.vue";
import LandingText from "@/components/Homepage/LandingText.vue";
import HowItWorks from "@/components/HowItWorks.vue";
import Safety from "@/components/Homepage/Safety.vue";
import EstimatesCalculator from "@/components/Homepage/EstimatesCalculator.vue";
import IPhoneMockup from "@/components/iPhoneMockup.vue";
import SafariMockup from "@/components/SafariMockup.vue";
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
    <div class="bg-[#03807A] w-full flex flex-col items-center pb-10">
      <h1 class="text-4xl font-bold text-center text-textColor pt-10 pb-2">Launching soon 🚀</h1>
      <p class="text-lg text-center text-textColor text-wrap lg:w-1/2">We will be launching our web dashboard and mobile application very
        soon that will make equity development easy for the average consumer. We can't wait to share the new platform
        with you. Stay tuned for more updates. </p>
      <div class="relative flex w-full flex-col items-center justify-center p-8">
        <i-phone-mockup src="/images/shanga_mobile.png" class="size-full lg:max-w-[350px]"/>

      </div>

      <div class="relative p-4">
        <safari-mockup url="https://dash.shangaindex.com" src="/images/shanga_web.jpeg"
                       class="size-full lg:max-w-[50vw]"/>
      </div>
    </div>
    <safety/>

  </div>
  <hr>

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
hr {
  color:white;
}
</style>