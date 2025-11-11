<script setup lang="ts">
import InputText from "primevue/inputtext"
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';
import Button from 'primevue/button';
import Card from 'primevue/card';

import {ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const selectedTopics = ref([
  {name: 'General Information', id: '1'},
  {name: 'Investments', id: '2'},
]);

</script>

<template>
  <Card class="w-full md:w-1/2">
    <template #title>Send Us A Message</template>
    <template #content>
      <form>
        <div class="flex gap-3 flex-col lg:flex-row w-full my-3 p-0 m-0">
          <Select :options="selectedTopics" optionLabel="name" placeholder="Select a topic"/>
          <InputText type="text" name="" id="" placeholder="Subject" required
                     class="w-3/4 bg-gray-50 rounded-lg border-0 text-gray-900 text-sm focus:border-secondaryColor focus:outline-secondaryColor block p-2.5"/>
        </div>
        <div class="w-full flex-col">
          <InputText type="text" name="" id="" placeholder="Full Name" required
                     class="w-full mb-3 bg-gray-50 rounded-lg border-0 text-gray-900 text-sm focus:border-secondaryColor focus:outline-secondaryColor block p-2.5"/>
          <InputText type="text" name="" id="" placeholder="Email" required
                     class="w-full mb-3  bg-gray-50 rounded-lg border-0 text-gray-900 text-sm focus:border-secondaryColor focus:outline-secondaryColor block p-2.5"/>
          <Textarea type="text" name="" id="" placeholder="Message" rows="10" required
                    class="w-full bg-gray-50 rounded-lg border-0 text-gray-900 text-sm focus:border-secondaryColor focus:outline-secondaryColor block p-2.5"></Textarea>
        </div>
        <Button disabled class="mt-5 w-full" label="Submit"/>
      </form>
    </template>
  </Card>
</template>

<style scoped>
@media screen and (max-width: 539px) {
  .contact_us {
    padding: 20px;
  }
}

@media screen and (min-width: 540px) {
  .contact_us {
    width: 50%;
  }
}
</style>