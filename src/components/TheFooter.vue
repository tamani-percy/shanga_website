<script setup>

import {MyPreset} from "@/PrimevuePresets.ts";
import Divider from "primevue/divider"

const primaryColor = MyPreset.semantic.primary[200]
</script>

<template>
  <div class="flex justify-center flex-col lg:w-[900px] text-textColor">
    <div class="flex justify-between flex-col lg:flex-row pt-20">
      <div class="text-center flex flex-col lg:text-justify">
        <h1 class="text-xl font-bold">Company</h1>
        <div class="mt-10 flex-col flex">
          <router-link to="#">About Us</router-link>
          <router-link to="#" class="my-3">Terms of Use</router-link>
          <router-link to="#" class="lg:mb-0">Privacy Policy</router-link>
        </div>
      </div>
      <div class="text-center flex flex-col lg:text-justify">
        <h1 class="text-xl font-bold ">Quick Links</h1>
        <router-link to="#" class="mb-3 mt-10">Pricing</router-link>
      </div>
      <div class="text-center flex flex-col lg:text-justify">
<!--        <h1 class="text-xl font-bold ">Contact Us</h1>-->
<!--        <p class="mt-10">customer@investshanga.com</p>-->
<!--        <p>-->
<!--          +260211436532,-->
<!--          +260966324787-->
<!--        </p>-->
        <div class="space-x-2 mt-3">
          <a href="">
            <font-awesome-icon :icon="['fab', 'twitter']" class="text-2xl" :style="{color:primaryColor}"/>
          </a>
          <a href="">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="text-2xl" :style="{color:primaryColor}"/>
          </a>
          <a href="">
            <font-awesome-icon :icon="['fab', 'facebook']" class="text-2xl" :style="{color:primaryColor}"/>
          </a>
        </div>
      </div>
    </div>
    <hr class="mt-10 pb-10 "/>
    <div class="flex-col lg:flex-row flex justify-between">
      <img src="@/assets/logo/shanga_logo_white.svg" alt="" class="h-20">
      <div class="flex flex-col">
        <div class="text-center flex flex-col lg:text-justify lg:mt-0 mt-10 p-3 lg:p-0">
          <h1 class="text-xl font-bold">Lusaka</h1>
<!--          <div class="mt-5 flex-col flex">-->
<!--            <p><font-awesome-icon :icon="['fas', 'house-chimney']"/> Lusaka | Zambia</p>-->
<!--          </div>-->
        </div>
        <p class=" mb-3 font-bold text-center lg:text-left">
          <font-awesome-icon :icon="['fas', 'location-pin-lock']"/>&nbsp;Lusaka, Zambia
        </p>
      </div>
    </div>
    <div class="flex justify-between text-center mt-3 flex-col flex-wrap text-wrap p-3 lg:p-0">
      <p class="text-sm text-left">Fundalytics Technologies Limited ("Shanga") is a company duly licensed by the Securities and
        Exchange Commission,
        Zambia. Shanga does not provide investment advice and individual investors should make their own decisions to
        seek
        independent advice. The value of investments can go up as well as down and you may receive back less than your
        original investment. </p>
      <p class="text-sm text-left mt-10 mb-20">&copy; Copyright <span class="font-bold">2025</span> - Fundalytics Technologies Limited. All rights reserved. <br> Fundalytics
        Technologies Limited is licensed by the Ministry
        of Finance Zambia and authorised by
        the Securities Exchange Commission of Zambia.</p>
    </div>
  </div>
</template>

<style scoped>
.footer_div {
  width: 50%;
}

.divider.border.color {
  background-color: red !important;;
}
</style>