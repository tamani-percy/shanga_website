<script setup lang="ts">

import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

</script>

<template>
  <div class="p-10">
    <Accordion value="0">
      <AccordionPanel value="0">
        <AccordionHeader>
          <h1 class="text-xl">What is the minimum investment amount?</h1>
        </AccordionHeader>
        <AccordionContent>
          <p class="m-0 text-xl">
            You can start investing with as little as ZMW 500. We want everyone to be able to invest.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="1">
        <AccordionHeader>
          <h1 class="text-xl">How are my returns calculated?</h1></AccordionHeader>
        <AccordionContent>
          <p class="m-0  text-xl">
            Your returns depend on how well the stocks we invest in perform. We show you clear reports on all your
            investments.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="2">
        <AccordionHeader>
          <h1 class="text-xl">
            Is my investment safe?
          </h1>
        </AccordionHeader>
        <AccordionContent>
          <p class="m-0  text-xl">
            We follow strict rules and spread your money across many stocks to reduce risk. But remember, all
            investments
            have some risk.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="3">
        <AccordionHeader>
          <h1 class="text-xl">
            How do I withdraw my funds?
          </h1>
        </AccordionHeader>
        <AccordionContent>
          <p class="m-0  text-xl">
            You can request withdrawals through your account dashboard. Processing typically takes 3-5 business days.
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>

  </div>
</template>

<style scoped>

</style>