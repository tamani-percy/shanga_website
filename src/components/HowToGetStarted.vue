<script setup lang="ts">
</script>

<template>
  <Card v-motion-pop-visible :delay="300">
    <template #title>
      <h1 class="text-4xl font-extrabold text-center text-textColor">How to get started</h1>
    </template>
    <template #content>
      <div class="w-full flex-col">

        <div class="flex md:flex-row flex-col-reverse mt-10 justify-between">
          <div
              class="max-w-4xl md:mt-12 pt-5 ms-1">
            <h1 class="text-xl mb-5 md:text-2xl text-textColor text-center md:text-left font-bold">Create an account
            </h1>
            <div
                class="max-w-lg w-full md:mt-6 mt-2 mb-4 flex items-center justify-center text-justify flex-col lg:hidden">
              <img src="/svgs/sign-up.svg" class="bg-no-repeat bg-center bg-cover w-32" alt="">
            </div>
            <p class="text-textColor max-w-2xl text-center md:text-left">Sign up on our platform by
              providing your personal
              information. This makes us serve you better by tailoring our products.</p>
          </div>
          <div class="max-w-lg md:mt-6 mt-7 justify-center text-justify flex-col hidden lg:inline-flex">
            <img src="/svgs/sign-up.svg" class="bg-no-repeat bg-center bg-cover" alt="">
          </div>
        </div>
      </div>
      <div class=" w-full flex-col mb-5">
        <div class="flex md:flex-row justify-center flex-col">
          <div
              class="max-w-4xl md:mt-6 pt-5">
            <h1 class="text-xl mb-5 md:text-2xl text-textColor text-center md:text-left font-bold">Choose your
              investment
              product</h1>
            <div
                class="max-w-lg w-full md:mt-6 mt-2 mb-4 flex items-center justify-center text-justify flex-col lg:hidden">
              <img src="/svgs/phone.svg" class="bg-no-repeat bg-center bg-cover w-32"
                   alt="">
            </div>
            <p class="text-textColor max-w-2xl text-center md:text-left">Select from a range of investment products or
              "baskets"
              that best suit your financial
              goals.
              These baskets are designed to balance risk and reward
              effectively.</p>
          </div>
          <div class="max-w-lg md:mt-6 mt-7 justify-center text-justify flex-col hidden lg:inline-flex">
            <img src="/svgs/phone.svg" class="bg-no-repeat bg-center bg-cover w-48" alt="">
          </div>
        </div>
      </div>
      <div class=" w-full flex-col mb-5">
        <div class="flex md:flex-row justify-center flex-col">
          <div
              class="max-w-4xl md:mt-6 pt-5">
            <h1 class="text-xl mb-5 md:text-2xl text-textColor text-center md:text-left font-bold">Make Your
              Investment</h1>
            <div
                class="max-w-lg w-full md:mt-6 mt-2 mb-4 flex items-center justify-center text-justify flex-col lg:hidden">
              <img src="/svgs/create-account.svg" class="bg-no-repeat bg-center bg-cover w-32"
                   alt="">
            </div>
            <p class="text-textColor max-w-2xl text-center md:text-left">Deposit funds easily through secure payment
              options
              such as bank transfers, or mobile money. Once your payment is
              confirmed,
              your money will be allocated to your selected account.</p>
          </div>
          <div class="max-w-lg md:mt-6 mt-7 justify-center text-justify flex-col hidden lg:inline-flex">
            <img src="/svgs/create-account.svg" class="bg-no-repeat bg-center bg-cover" alt="">
          </div>
        </div>
      </div>
      <div class=" w-full flex-col mb-5">
        <div class="flex md:flex-row justify-center flex-col">
          <div
              class="max-w-4xl md:mt-6 pt-5">
            <h1 class="text-xl mb-5 md:text-2xl text-textColor text-center md:text-left font-bold">Watch Your Investment
              Grow</h1>
            <div
                class="max-w-lg w-full md:mt-6 mt-2 mb-4 flex items-center justify-center text-justify flex-col lg:hidden">
              <img src="/svgs/growth.svg" class="bg-no-repeat bg-center bg-cover w-32"
                   alt="">
            </div>
            <p class="text-textColor max-w-2xl text-center md:text-left">Invest in a chosen basket, and monitor your
              portfolio’s
              performance through our user-friendly dashboard. Our professional team will manage the investments, aiming
              for steady growth over time.
            </p>
          </div>
          <div class="max-w-lg md:mt-0 mt-7 justify-center text-justify flex-col hidden lg:inline-flex">
            <img src="/svgs/growth.svg" class="bg-no-repeat bg-center bg-cover w-48" alt="">
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script lang="ts">
import Card from "primevue/card"

export default {
  components: {
    Card
  }
}
</script>

<style scoped>

.p-card {
  background-color: #343a40;
  margin-top: 10px;
}

</style>