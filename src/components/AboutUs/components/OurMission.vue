<script setup>
import Card from "primevue/card"
</script>

<template>
  <div class="flex flex-col md:flex-row md:space-x-2 md:px-10 space-y-2 px-2 md:space-y-0">
    <Card class="w-full md:w-1/2">
      <template #title>
        <font-awesome-icon :icon="['fas','bullseye']" class="text-[#03807A] my-3 text-3xl"/>
        <h1>Professional Management</h1>
      </template>
      <template #content>
        <p class="m-0">
          To make investing accessible to everyone by providing a simple, transparent platform that helps you grow your wealth.
        </p>
      </template>
    </Card>
    <Card class="w-full md:w-1/2">
      <template #title>
        <font-awesome-icon :icon="['fas','eye']" class="text-[#03807A] my-3 text-3xl"/>
        <h1>Professional Management</h1>
      </template>
      <template #content>
        <p class="m-0">
          To help millions of people build lasting wealth through smart, diversified investing.
        </p>
      </template>
    </Card>
  </div>
</template>

<style scoped>
</style>