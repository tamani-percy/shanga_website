<script setup>
import Card from "primevue/card"
</script>

<template>
  <h1 class="text-4xl font-bold text-center py-10">Our Values</h1>
  <div class="flex flex-col md:flex-row md:space-x-2 md:px-10 space-y-2 px-2 md:space-y-0">
    <Card class="w-full md:w-1/3">
      <template #title>
       <div class="flex flex-col justify-center text-center">
         <font-awesome-icon :icon="['fas','award']" class="text-[#03807A] my-3 text-3xl"/>
         <h1>Professional Management</h1>
       </div>
      </template>
      <template #content>
        <p class="m-0 text-center">
          We're open about what we do, what we charge, and how your money performs.
        </p>
      </template>
    </Card>
    <Card class="w-full md:w-1/3">
      <template #title>
        <div class="flex flex-col justify-center text-center">
          <font-awesome-icon :icon="['fas','shield']" class="text-[#03807A] my-3 text-3xl"/>
          <h1>Security</h1>
        </div>
      </template>
      <template #content>
        <p class="m-0 text-center">
          Your money and information are protected with bank-level security.
        </p>
      </template>
    </Card>
    <Card class="w-full md:w-1/3">
      <template #title>
        <div class="flex flex-col justify-center text-center">
          <font-awesome-icon :icon="['fas','user-group']" class="text-[#03807A] my-3 text-3xl"/>
          <h1>Accessibility</h1>
        </div>
      </template>
      <template #content>
        <p class="m-0 text-center">
          Investment opportunities should be available to everyone, regardless of wealth.
        </p>
      </template>
    </Card>
  </div>
</template>

<style scoped>
</style>