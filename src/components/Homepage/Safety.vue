<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

</script>

<template>
  <div class="w-full flex flex-col justify-center pb-10 px-10 md:px-10" :style="{backgroundColor:'#F4EDEA'}">
    <div class="flex flex-col justify-center items-center pb-10">
      <h1 class="text-4xl font-bold pt-10 text-center pb-2 inline-flex items-center">Your money is safe with us
        <img src="@/assets/gif/shield.gif" alt="" class="w-20 hidden md:flex">
      </h1>
      <img src="@/assets/gif/shield.gif" alt="" class="w-20 lg:hidden">
      <p class="text-lg text-center p-3 ">We are committed to ensuring your investment reaches its full tenure by
        providing
        the most secure standards
        available.</p>
    </div>
    <div class=" flex justify-center flex-col items-center gap-10">
      <div class="bg-blue-500 text-white flex flex-col items-start md:max-w-[600px]">
        <font-awesome-icon :icon="['fas', 'bank']" class="text-4xl rounded-lg"
                           :style="{color:'#343A40'}"/>
        <h1 class="text-justify my-4 font-bold text-2xl">Bank Level Security</h1>
        <p class="text-justify">We use state-of-the-art data encryption when handling your financial information and
          two-factor
          authentication (2FA) protection. We're also backed by top financial market operators.</p>
      </div>
      <div class="bg-blue-500 text-white flex flex-col items-start md:max-w-[600px]">
        <font-awesome-icon :icon="['fas', 'shield-halved']" class="text-4xl rounded-lg"
                           :style="{color:'#343A40'}"/>
        <h1 class="text-justify my-4 font-bold text-2xl">Secure Payments</h1>
        <p class="text-justify">Our payment processor, Lenco, is PADSS & PCIDSS compliant satisfying the highest
          level of Security Audit available.</p>
      </div>
      <div class="bg-blue-500 text-white flex flex-col items-start md:max-w-[600px]">
        <font-awesome-icon :icon="['fas', 'building']" class="text-4xl rounded-lg"
                           :style="{color:'#343A40'}"/>
        <h1 class="text-justify my-4 font-bold text-2xl">Covered by Zambia SEC</h1>
        <p class="text-justify">Trading accounts are held by our parent company, Fundalytics Technologies Limited, a
          firm duly registered by the Securities and Exchange Commission in Zambia.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>