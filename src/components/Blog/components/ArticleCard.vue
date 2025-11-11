<script setup lang="ts">
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Button from "primevue/button"

interface Props {
  tag: string,
  articleImg: string,
  date: string,
  title: string,
  description: string
}

const props = withDefaults(defineProps<Props>(), {
  tag: "Education",
  articleImg: "/images/blog/success.jpg",
  date: "12/02/2026",
  title: "Understanding Index Investing: A Beginner's Guide",
  description: "Learn the fundamentals of index investing and why it's one of the safest ways to grow your wealth over time."
})

</script>

<template>
  <Card style="width: 25rem; overflow: hidden">
    <template #header>
      <img
          alt="user header"
          :src="props.articleImg"
          class="w-full h-52 object-cover"
      />
    </template>
    <template #title>
      <div class="flex flex-col">
        <div class="flex justify-between w-full">
          <Tag severity="secondary" :value="props.tag"/>
          <p class="text-sm">
            <span><font-awesome-icon :icon="['fas', 'calendar']"/></span>
            &nbsp;{{ props.date }}
          </p>
        </div>
        <h1 class="pt-3">{{ props.title }}</h1>
      </div>
    </template>

    <template #content>
      <p class="m-0">
        {{ props.description }}
      </p>
    </template>

    <template #footer>
      <div class="flex justify-end">
        <Button variant="link" disabled>
          Read more
          <font-awesome-icon :icon="['fas', 'arrow-right']"/>
        </Button>
      </div>
    </template>
  </Card>
</template>


<style scoped>

</style>