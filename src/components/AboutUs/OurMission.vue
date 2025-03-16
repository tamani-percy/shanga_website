<script setup>
import Card from "primevue/card"

</script>

<template>
  <div class="flex flex-col items-center">
    <Card class="!shadow-lg">
      <template #title><span class="self-center fl text-2xl font-bold"></span></template>
      <template #content>
        <section class="bg-gray-100">
          <div class="max-w-5xl mx-auto px-4">
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <font-awesome-icon :icon="['fas','building-columns']" class="text-2xl"/>

                </div>
                <div class="mt-5">
                  <h3 class="text-xl font-medium text-gray-900">Mission Statement</h3>
                  <p class="mt-2 text-base text-gray-500">We are dedicated to democratizing investment opportunities
                    across Africa by providing innovative, user-friendly, and cost-effective index and ETF solutions.
                    Through education, technology and transparency, we empower individuals, and institutions to grow
                    their wealth and achieve financial independence.</p>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <font-awesome-icon :icon="['fas','graduation-cap']" class="text-2xl"/>


                </div>
                <div class="mt-5">
                  <h3 class="text-xl font-medium text-gray-900">Core Values</h3>
                  <ul class="mt-2 text-base text-gray-500 list-disc md:px-10">
                    <li>
                      Innovation
                    </li>
                    <li>
                      Integrity
                    </li>
                    <li>
                      Customer Focus
                    </li>
                    <li>
                      Creativity
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <font-awesome-icon :icon="['fas','eye']" class="text-2xl"/>
                </div>
                <div class="mt-5">
                  <h3 class="text-xl font-medium text-gray-900">Vision Statement</h3>
                  <p class="mt-2 text-base text-gray-500">To make index and ETF investing simple, affordable, and
                    accessible for everyone in Africa.</p>
                </div>
              </div>
            </div>

          </div>
        </section>
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