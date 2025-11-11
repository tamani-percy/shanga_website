<script setup lang="ts">

import OurMission from "@/components/AboutUs/components/OurMission.vue";
import MeetTheTeam from "@/components/AboutUs/components/MeetTheTeam.vue";
import OurStory from "@/components/AboutUs/components/OurStory.vue";
import OurValues from "@/components/AboutUs/components/OurValues.vue";
</script>

<template>
  <div class="pt-24">
    <h1 class="text-4xl font-bold text-center pb-10">About Shanga</h1>
    <our-mission/>
    <our-story/>
    <our-values/>
    <meet-the-team/>
  </div>
</template>