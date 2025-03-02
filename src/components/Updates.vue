<template>
  <div class="card flex flex-wrap mt-32 mb-10">
    <Timeline :value="events" align="alternate" class=" lg:max-w-5xl lg:mx-[500px]">
      <template #marker="slotProps">
        <span class="flex w-10 h-10 items-center justify-center text-white rounded-full z-10 shadow-sm"
              :style="{ backgroundColor: slotProps.item.color }">
          <font-awesome-icon :icon="slotProps.item.icon" class="text-textColor" beat-fade />
        </span>
      </template>
      <template #content="slotProps">
        <Card class="mt-4">
          <template #title>
            {{ slotProps.item.status }}
          </template>
          <template #subtitle>
            {{ slotProps.item.date }}
          </template>
          <template #content>
            <p>
              {{ slotProps.item.content }}
            </p>
          </template>
        </Card>
      </template>
    </Timeline>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import Timeline from "primevue/timeline";
import Card from "primevue/card";

const events = ref([
  {
    status: 'Project Kickoff',
    date: '19/01/2024',
    icon: ["fas", "rocket"],
    color: '#343a40',
    content: 'Project Shanga is successfully launched.'
  },
  {
    status: 'Company Incorporated',
    date: '12/01/2025',
    icon: ["fas", "building"],
    color: '#343a40',
    content: 'Our parent company, Fundalytics Technologies Limited is successfully incorporated.'
  },
  {
    status: 'Website Launch',
    date: '09/02/2025',
    icon: ["fas", "laptop"],
    color: '#343a40',
    content: "Shanga, is successfully launched displaying the company's goals, and unique team."
  },
  {
    status: 'Dashboard Launch',
    date: 'TBD',
    icon: ["fas", "keyboard"],
    color: '#343a40',
    content: "The dashboard is under development and will be available to the public soon."
  },
  {
    status: 'Mobile Application Launch',
    date: 'TBD',
    icon: ["fas", "keyboard"],
    color: '#343a40',
    content: "For even more convenience for the users, a mobile application is also in development, and will be available to the public soon."
  }
]);

</script>
