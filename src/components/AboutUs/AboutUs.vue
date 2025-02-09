<script setup lang="ts">

import OurMission from "@/components/AboutUs/OurMission.vue";
import MeetTheTeam from "@/components/AboutUs/MeetTheTeam.vue";
import {MyPreset} from "@/PrimevuePresets.ts";

const tertiaryColor = MyPreset.semantic.tertiary[500]

</script>

<template>
  <div class="pt-24" :style="{backgroundColor:tertiaryColor}">
    <our-mission/>
    <meet-the-team/>
  </div>
</template>