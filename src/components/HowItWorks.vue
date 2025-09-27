<script setup>
import {MyPreset} from "@/PrimevuePresets.ts";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import TextReveal from "@/components/ui/text-reveal/TextReveal.vue";

const primaryColor = MyPreset.semantic.primary[500];
</script>

<template>
  <div :style="{backgroundColor:primaryColor}" class="w-full flex justify-center">
    <div class="mt-10 flex justify-center items-center w-[940px] h-fit pb-10">

      <div class="pt-5 self-start">
        <div class="p-8 flex items-center justify-center">
          <TextReveal class="text-2xl md:text-3xl font-semibold leading-relaxed text-center">
            Limitless potential for your investments
          </TextReveal>
        </div>
        <TextReveal class="text-2xl px-7 md:px-0 md:text-3xl font-semibold leading-relaxed text-center">
          Making investments has never been easier in Zambia. Curious about how it
          works? Read on.
        </TextReveal>
        <div class="flex flex-col lg:flex-row gap-x-5 items-center lg:items-baseline">
          <div class="w-[400px] lg:w-1/2 mt-10 px-5 md:px-0 md:mt-0">
            <font-awesome-icon :icon="['fas', 'people-roof']" class="text-4xl p-3 rounded-lg"
                               :style="{backgroundColor:primaryColor, color:'white'}"/>
            <h1 class="text-xl p-3 text-justify mt-4 text-textColor">As a financial intermediary, we pool funds from
              clients and strategically
              invest
              in
              pre-calculated indices
              firstly on the Lusaka Stock Exchange and then pushing out to other African exchanges. This methodology
              alleviates clients from the complexities of stock picking, reducing exposure and risk.</h1>
          </div>
          <div class="w-[400px] lg:w-1/2 mt-5 px-5 md:px-0">
            <font-awesome-icon :icon="['fas', 'piggy-bank']" class="text-4xl p-3 rounded-lg"
                               :style="{backgroundColor:primaryColor, color:'white'}"/>
            <h1 class="text-xl p-3 text-justify mt-4 text-textColor"> Our platform allows regular people to invest
              affordably in the local stock
              market
              by pooling our clients funds to invest in professionally selected indices( batches of individual stocks)
              on
              the Lusaka Stock Exchange.</h1>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>