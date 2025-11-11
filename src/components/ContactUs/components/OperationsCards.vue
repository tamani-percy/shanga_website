<script setup lang="ts">

import Card from "primevue/card";
</script>

<template>
  <Card class="w-full">
    <template #title>
      <div class="flex flex-row items-center gap-2">
        <font-awesome-icon :icon="['fas','envelope']"/>
        <h1>Email Us</h1>
      </div>
    </template>
    <template #content>
      <p class="text-md">fundalyticstech@gmail.com</p>
    </template>
  </Card>
  <Card class="w-full">
    <template #title>
      <div class="flex flex-row items-center gap-2">
        <font-awesome-icon :icon="['fas','phone']"/>
        <h1>Contact Us</h1>
      </div>
    </template>
    <template #content>
      <p class="text-md">+260971583441</p>
    </template>
  </Card>
  <Card class="w-full">
    <template #title>
      <div class="flex flex-row items-center gap-2">
        <font-awesome-icon :icon="['fas','clock']"/>
        <h1>Business Hours</h1>
      </div>
    </template>
    <template #content>
      <p class="text-md">Monday - Friday: 9:00 AM - 5:00 PM</p>
      <p class="text-md">Saturday: 10:00 AM - 2:00 PM</p>
      <p class="text-md">Sunday: CLOSED</p>
    </template>
  </Card>
</template>

<style scoped>

</style>