<script setup>
import Card from "primevue/card"

</script>

<template>
  <div class="flex flex-col items-center">
    <Card class="!shadow-lg">
      <template #title><span class="self-center fl text-2xl font-bold">Our Mission</span></template>
      <template #content>
        To empower investors through innovative technology, providing accurate, real-time market insights and
        user-friendly tools for effective stock and shares investments. Our commitment lies in democratising investment
        opportunities, ensuring accessibility, and fostering financial literacy to help individuals and institutions
        make informed, strategic decisions for their financial growth.
      </template>
    </Card>
  </div>
</template>

<style scoped>
.p-card {
  max-width: 57% !important;
  background-color: #03807a;
  color: white;
}

@media (max-width: 640px) {
  .p-card {
    max-width: 90% !important;
    background-color: #03807a;

  }
}
</style>