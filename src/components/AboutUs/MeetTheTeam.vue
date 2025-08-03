<template>
  <div class="flex flex-col items-center bg-gray-100 lg:hidden">
    <div v-for="(card, index) in cards" :key="index" class="card w-full flex justify-center items-center">
      <FlipCard class="h-[700px] w-full p-10">
        <template #default>
          <img
              :src="card.image"
              alt="image"
              class="size-full rounded-2xl object-cover h-3/4 shadow-2xl shadow-black/40"
          />
          <div class="absolute bottom-4 left-4 font-bold ">
            <h1 class="text-md text-white">{{ card.name }}</h1>
            <p class="text-sm">{{ card.position }}</p>
          </div>
        </template>
        <template #back>
          <div class="flex min-h-full flex-col gap-2 items-center justify-center">
            <p>{{ card.bio }}</p>
          </div>
        </template>
      </FlipCard>
    </div>

    <!--    image, name, position, bio-->

    <div class="w-full max-w-sm space-y-4 py-20">
    </div>
  </div>
  <div class="card overflow-x-auto mt-20 justify-center hidden lg:flex">
    <div class="max-w-5xl">
      <OrganizationChart :value="data" collapsible>
        <template #person="slotProps">
          <div class="flex flex-col hover:cursor-pointer hover:opacity-60" @click="openDialog(slotProps.node)">
            <div class="flex flex-col items-center">
              <img :alt="slotProps.node.data.name" :src="slotProps.node.data.image"
                   class="mb-4 w-24 h-24 object-cover object-top overflow-clip rounded-full"/>
              <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
              <span>{{ slotProps.node.data.title }}</span>
            </div>
          </div>
        </template>
        <template #default="slotProps">
          <span>{{ slotProps.node.label }}</span>
        </template>
      </OrganizationChart>
      <Dialog v-model:visible="dialogVisible" modal header="Bio" :style="{ width: '50vw' }">
        <div v-if="selectedPerson" class="flex flex-col items-center">
          <img :alt="selectedPerson.name" :src="selectedPerson.image" class="mb-4 object-cover h-96 rounded-2xl"/>
          <h2 class="font-bold text-xl">{{ selectedPerson.name }}</h2>
          <p class="text-lg text-gray-700">{{ selectedPerson.title }}</p>
          <p class="mt-4 text-gray-600">{{ selectedPerson.bio }}</p>
        </div>
      </Dialog>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import OrganizationChart from 'primevue/organizationchart';
import Dialog from 'primevue/dialog';
import FlipCard from "@/components/ui/flip-card/FlipCard.vue";

const data = ref({
  key: '0',
  type: 'person',
  styleClass: '!bg-purple-100 text-white rounded-xl',
  data: {
    image: '/images/team/david_k.jpg',
    name: 'David Kapindula',
    title: 'CEO',
    bio: "David Kapindula has a passion for finance and technology. With a keen analytical mind and a forward-thinking approach, he is dedicated to leveraging these skills to drive innovative investment strategies. He holds a Bachelor's Degree in Actuarial Science from the University of Lusaka. Outside of work, he enjoys playing chess, video-games, and reading. He believes in the immense potential of our country's market and is committed to fostering growth and prosperity through smart and strategic investing."
  },
  children: [
    {
      key: '0_0',
      type: 'person',
      styleClass: '!bg-purple-100 text-white rounded-xl',
      data: {
        image: '/images/team/mubanga.jpg',
        name: 'Mubanga Chanda',
        title: 'COO',
        bio: "Mubanga Chanda holds a Bachelor's Degree in Actuarial Science, and has a passion for finance and technology. With a keen analytical mind and a forward-thinking approach, he is dedicated to leveraging these skills to drive innovative investment strategies. Outside of work, David enjoys playing chess, reading and video-games. He believes in the immense potential of our country's market and is committed to fostering growth and prosperity through smart, strategic investing."
      }
    },
    {
      key: '0_1',
      type: 'person',
      styleClass: '!bg-purple-100 text-white rounded-xl',
      data: {
        image: '/images/team/david_c.jpg',
        name: "Chanda Chandang'oma",
        title: 'CFO',
        bio: "Chanda is a dynamic student with a passion for gaming, soccer, music, movies, series, and anime. Balancing academic pursuits with a love for math, Chanda is driven by the ambition to drive his American Muscle Ford Mustang GT around the town. Always curious and eager to learn, he brings enthusiasm and dedication to every endeavor, making the most of every opportunity to grow and succeed."
      },
    },
    {
      key: '0_2',
      type: 'person',
      styleClass: '!bg-purple-100 text-white rounded-xl',
      data: {
        image: '/images/team/tee.jpg',
        name: 'Tamani Banda',
        title: 'CTO',
        bio: "Tamani Banda is a young and exuberant individual who sees the far-reaching potential technology has in the Zambian environment. He believes cooperation and drive is necessary to actualise what one individual feels is too much. His hobbies are anything and everything he can put his hands on; gaming, DIY, knitting, and coding just to name a few. He holds a Bachelor of Science in Computer Science from the University of Zambia."
      },
      children: [
        {
          key: '0_1_1',
          type: 'person',
          styleClass: '!bg-teal-100 text-white rounded-xl',
          data: {
            image: '/images/team/ndeji.jpg',
            name: 'Ndeji Chiputa',
            title: 'Software Engineer',
            bio: "Ndeji Chiputa is a keen-eyed individual who utilises his savvy technological skills to create systems. He has experience in differing technologies, and strives for Fundalytics to mature into a national staple when it comes to financial technology. He aims to serve investors well by allowing for growth of both investment portfolios of the investors, and also giving companies much needed boost in capital investment. He holds a Bachelor of Science in Computer Science from the University of Zambia. His hobbies include watching anime, playing video-games, instrumentation, and generalised sports."
          },
        },
        {
          key: '0_1_2',
          type: 'person',
          styleClass: '!bg-purple-100 text-white rounded-xl',
          data: {
            image: '/images/team/mwams.jpg',
            name: 'Mwamba Chitalima',
            title: 'Software Engineer',
            bio: "Mwamba Chitalima is an eccentric and knowledge-hungry individual who creates bespoke applications that meet the present need of consumers. He has delved in an array of technologies, and has garnered satiable experience in the industry's requirements in that regard. His hobbies include playing video-games, watching sports, art, and coding. He holds a Bachelor of Science in Computer Science from the University of Zambia."
          },
        }
      ]
    },
    {
      key: '0_1_1',
      type: 'person',
      styleClass: '!bg-teal-100 text-white rounded-xl',
      data: {
        image: '/images/team/mumba.jpg',
        name: 'Mumba Mwenda',
        title: 'Legal & Compliance',
        bio: "Mumba Mwenda is a dedicated and ambitious lawyer with 2 years of experience in the legal profession. He holds a Bachelor of Laws (LL.B) degree from the University of Zambia. Mumba is passionate about delivering high-quality legal services, and has a strong commitment to seeing this company grow. Outside of work, he unwinds with a good glass of wine and his favorite Netflix shows. Mumba is a valuable asset to the company, bringing a unique perspective, and skill set that makes him a great addition to the team."
      },
    }
  ]
});

const dialogVisible = ref(false);
const selectedPerson = ref(null);

const openDialog = (node) => {
  selectedPerson.value = node.data;
  dialogVisible.value = true;
};
const cards = ref([
  {
    name: 'David Kapindula',
    position: 'Chief Executive Officer',
    image: '/images/team/david_k.jpg',
    bio: "David Kapindula has a passion for finance and technology. With a keen analytical mind and a forward-thinking approach, he is dedicated to leveraging these skills to drive innovative investment strategies. He holds a Bachelor's Degree in Actuarial Science from the University of Lusaka. Outside of work, he enjoys playing chess, video-games, and reading. He believes in the immense potential of our country's market and is committed to fostering growth and prosperity through smart and strategic investing."
  },
  {
    name: 'Mubanga Chanda',
    position: 'Chief Operations Officer',
    image: '/images/team/mubanga.jpg',
    bio: "Mubanga Chanda holds a Bachelor's Degree in Actuarial Science, and has a passion for finance and technology. With a keen analytical mind and a forward-thinking approach, he is dedicated to leveraging these skills to drive innovative investment strategies. Outside of work, David enjoys playing chess, reading and video-games. He believes in the immense potential of our country's market and is committed to fostering growth and prosperity through smart, strategic investing."
  },

  {
    name: "Chanda Chandang'oma",
    position: 'Chief Financial Officer',
    image: '/images/team/david_c.jpg',
    bio: "Chanda is a holder of a Bachelor of Science in Actuarial Science graduating with a Merit from the University of Lusaka with a passion for gaming, soccer, music, movies, series, and anime. Balancing academic pursuits with a love for math, Chanda is driven by the ambition to drive his American Muscle Ford Mustang GT around the town & Land Cruiser 79 series in the outback. Always curious and eager to learn, he brings enthusiasm and dedication to every endeavor, making the most of every opportunity to grow and succeed."
  },
  {
    name: "Mumba Mwenda",
    position: 'Legal and Compliance',
    image: '/images/team/mumba.jpg',
    bio: "Mumba Mwenda is a dedicated and ambitious lawyer with 2 years of experience in the legal profession. He holds a Bachelor of Laws (LL.B) degree from the University of Zambia. Mumba is passionate about delivering high-quality legal services, and has a strong commitment to seeing this company grow. Outside of work, he unwinds with a good glass of wine and his favorite Netflix shows. Mumba is a valuable asset to the company, bringing a unique perspective, and skill set that makes him a great addition to the team."
  },
  {
    name: "Tamani Banda",
    position: 'Chief Technology Officer',
    image: '/images/team/tee.jpg',
    bio: "Tamani Banda is a young and exuberant individual who sees the far-reaching potential technology has in the Zambian environment. He believes cooperation and drive is necessary to actualise what one individual feels is too much. His hobbies are anything and everything he can put his hands on; gaming, DIY, knitting, and coding just to name a few. He holds a Bachelor of Science in Computer Science from the University of Zambia."
  },
  {
    name: 'Ndeji Chiputa',
    position: 'Software Engineer',
    image: '/images/team/ndeji.jpg',
    bio: "Ndeji Chiputa is a keen-eyed individual who utilises his savvy technological skills to create systems. He has experience in differing technologies, and strives for Fundalytics to mature into a national staple when it comes to financial technology. He aims to serve investors well by allowing for growth of both investment portfolios of the investors, and also giving companies much needed boost in capital investment. He holds a Bachelor of Science in Computer Science from the University of Zambia. His hobbies include watching anime, playing video-games, instrumentation, and generalised sports."
  },
  {
    name: 'Mwamba Chitalima',
    position: 'Software Engineer',
    image: '/images/team/mwams.jpg',
    bio: "Mwamba Chitalima is an eccentric and knowledge-hungry individual who creates bespoke applications that meet the present need of consumers. He has delved in an array of technologies, and has garnered satiable experience in the industry's requirements in that regard. His hobbies include playing video-games, watching sports, art, and coding. He holds a Bachelor of Science in Computer Science from the University of Zambia."
  },

]);


</script>

<style scoped>
</style>