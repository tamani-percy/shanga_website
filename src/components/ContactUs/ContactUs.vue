<script setup lang="ts">
import SendUsAMessage from "@/components/ContactUs/components/SendUsAMessage.vue";
import OperationsCards from "@/components/ContactUs/components/OperationsCards.vue";
import Faqs from "@/components/ContactUs/components/Faqs.vue";
</script>

<template>
 <div class="pt-32 mb-10 ">
   <h1 class="text-4xl font-bold text-center pb-10">How it Works</h1>
   <div class="w-full flex px-2 md:px-10 items-center justify-center flex-col md:flex-row gap-10">
     <send-us-a-message/>
     <div class="space-y-2 w-full md:w-fit">
       <operations-cards/>
     </div>
   </div>
   <faqs/>
 </div>
</template>

