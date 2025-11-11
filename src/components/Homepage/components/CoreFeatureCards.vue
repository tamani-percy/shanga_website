<script setup>
import {MyPreset} from "@/PrimevuePresets.ts";
import Card from "primevue/card"

const primaryColor = MyPreset.semantic.primary[500];
</script>

<template>
  <div class=" bg-[#03807A] w-full flex justify-between flex-col md:flex-row gap-x-10 p-10">
    <Card class="w-full md:w-1/3">
      <template #title>
        <font-awesome-icon :icon="['fas','arrow-trend-up']" class="text-[#03807A] my-3 text-3xl"/>
        <h1>Smart Index Investing</h1>
      </template>
      <template #content>
        <p class="m-0">
          We create baskets of investments including stocks, bonds, ETFs, and commodities. This spreads your risk and
          helps your money grow.
        </p>
      </template>
    </Card>
    <Card class="w-full md:w-1/3">
      <template #title>
        <font-awesome-icon :icon="['fas','shield']" class="text-[#03807A] my-3 text-3xl"/>
        <h1>Professional Management</h1>
      </template>
      <template #content>
        <p class="m-0">
          We pool your money with other investors to build diverse portfolios. You get affordable, safe investing without the complexity.
        </p>
      </template>
    </Card>
    <Card class="w-full md:w-1/3">
      <template #title>
        <font-awesome-icon :icon="['fas','user-group']" class="text-[#03807A] my-3 text-3xl"/>
        <h1>Accessible to Everyone</h1>
      </template>
      <template #content>
        <p class="m-0">
          Start investing with amounts that work for you. Simple, straightforward, no hassle.
        </p>
      </template>
    </Card>
  </div>
</template>