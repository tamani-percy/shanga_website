<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

</script>

<template>
  <div class="w-full flex justify-center pb-10" :style="{backgroundColor:'#F4EDEA'}">
    <div class="lg:w-[900px] flex justify-between flex-col-reverse lg:flex-row gap-x-10">
      <div class="lg:w-[700px]">
        <h1 class="text-4xl font-bold pt-10 text-center pb-2">Your money is safe with us</h1>
        <p class="text-sm text-center p-3">We are committed to ensuring your investment reaches its full tenure by providing
          the most secure standards
          available.</p>

        <div class="flex justify-center">
          <img src="@/assets/gif/shield.gif" alt="" class="lg:max-w-xl lg:h-fit h-[200px] pb-0 lg:hidden">
        </div>

        <div class="grid grid-cols-1 px-10 lg:px-0 lg:grid-cols-2 grid-rows-1 lg:grid-rows-2 gap-10 lg:pt-14">
          <div class="bg-blue-500 text-white flex flex-col items-start">
            <font-awesome-icon :icon="['fas', 'bank']" class="text-4xl rounded-lg"
                               :style="{color:'#343A40'}"/>
            <h1 class="text-justify my-4 font-bold text-2xl">Bank Level Security</h1>
            <p class="text-justify">We use state-of-the-art data encryption when handling your financial information and
              two-factor
              authentication (2FA) protection. We're backed by top financial market operators and we not only meet
              traditional banking security standards, we exceed them.</p>
          </div>
          <div class="bg-blue-500 text-white flex flex-col items-start">
            <font-awesome-icon :icon="['fas', 'shield-halved']" class="text-4xl rounded-lg"
                               :style="{color:'#343A40'}"/>
            <h1 class="text-justify my-4 font-bold text-2xl">Secure Payments</h1>
            <p class="text-justify">Our payment processor DPO Pay is PADSS & PCIDSS compliant satisfying the highest
              level of Security Audit available.</p>
          </div>
          <div class="bg-blue-500 text-white flex flex-col items-start">
            <font-awesome-icon :icon="['fas', 'building']" class="text-4xl rounded-lg"
                               :style="{color:'#343A40'}"/>
            <h1 class="text-justify my-4 font-bold text-2xl">Covered by Zambia SEC</h1>
            <p class="text-justify">Trading accounts are held by our parent company, Fundalytics Technologies Limited, a
              firm duly registered by the Securities and Exchange Commission in Zambia.</p>
          </div>
        </div>
      </div>
      <div class="justify-center items-center lg:w-[200px] hidden lg:flex">
        <img src="@/assets/gif/shield.gif" alt="" class="max-w-md h-fit pb-0">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>