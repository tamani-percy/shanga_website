<template>
  <div class="flex flex-col items-center min-h-screen bg-gray-100">
    <!-- Cards Container -->
    <div class="w-full max-w-md space-y-4 py-20">
      <div v-for="(card, index) in cards" :key="index" :ref="setCardRef" class="card">
        <Card class="shadow-lg">
          <template #header>
            <img :src="card.image" alt="" class="team-pics w-fit rounded-lg">
          </template>
          <template #content>
            <div class="flex w-full flex-col">
              <div class="ms-4 flex flex-col self-center ">
                <h1 class="font-bold text-2xl text-start">
                  {{ card.name }}
                </h1>
                <h2 class="font-semibold text-xl text-start">
                  {{ card.position }}
                </h2>
                <p class="text-md font-normal">{{ card.bio }} </p>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Card from 'primevue/card';

const cards = ref([
  {
    name: 'David Kapindula',
    position: 'Chief Executive Officer',
    image: '/images/team/david_k.jpg',
    bio: "David Kapindula has a passion for finance and technology. With a keen analytical mind and a forward-thinking approach, he is dedicated to leveraging these skills to drive innovative investment strategies. He holds a Bachelor's Degree in Actuarial Science from the University of Lusaka. Outside of work, he enjoys playing chess, video-games, and reading. He believes in the immense potential of our country's market and is committed to fostering growth and prosperity through smart and strategic investing."
  },
  {
    name: 'Mubanga Chanda',
    position: 'Chief Financial Officer',
    image: '/images/team/mubanga.jpg',
    bio: "Mubanga Chanda holds a Bachelor's Degree in Actuarial Science, and has a passion for finance and technology. With a keen analytical mind and a forward-thinking approach, he is dedicated to leveraging these skills to drive innovative investment strategies. Outside of work, David enjoys playing chess, reading and video-games. He believes in the immense potential of our country's market and is committed to fostering growth and prosperity through smart, strategic investing."
  },
  {
    name: "Tamani Banda",
    position: 'Chief Technology Officer',
    image: '/images/team/tee.jpg',
    bio: "Tamani Banda is a young and exuberant individual who sees the far-reaching potential technology has in the Zambian environment. He believes cooperation and drive is necessary to actualise what one individual feels is too much. His hobbies are anything and everything he can put his hands on; gaming, DIY, knitting, and coding just to name a few. He holds a Bachelor of Science in Computer Science from the University of Zambia."
  }, {
    name: "Mumba Mwenda",
    position: 'Legal and Compliance',
    image: '/images/team/mumba.jpg',
    bio: "Mumba Mwenda is a dedicated and ambitious lawyer with 2 years of experience in the legal profession. He holds a Bachelor of Laws (LL.B) degree from the University of Zambia. Mumba is passionate about delivering high-quality legal services, and has a strong commitment to seeing this company grow. Outside of work, he unwinds with a good glass of wine and his favorite Netflix shows. Mumba is a valuable asset to the company, bringing a unique perspective, and skill set that makes him a great addition to the team."
  },
  {
    name: "Chanda Chandang'oma",
    position: 'Data and Analytics',
    image: '/images/team/david_c.jpg',
    bio: "Chanda is a dynamic student with a passion for gaming, soccer, music, movies, series, and anime. Balancing academic pursuits with a love for math, Chanda is driven by the ambition to drive his American Muscle Ford Mustang GT around the town. Always curious and eager to learn, he brings enthusiasm and dedication to every endeavor, making the most of every opportunity to grow and succeed."
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
  }
]);

// Refs for card elements
const cardRefs = ref([]);
const setCardRef = (el) => {
  if (el) {
    cardRefs.value.push(el);
  }
};

// GSAP animations
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  cardRefs.value.forEach((card, index) => {
    // Initial animation: fade in and move up
    gsap.from(card, {
      y: 100, // Start slightly below
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: card,
        start: 'top 80%', // When the top of the card hits 80% of the viewport
        end: 'top 20%', // When the top of the card hits 20% of the viewport
        scrub: true, // Smoothly animate on scroll
      },
    });

    // Stacking effect: Move cards up as you scroll
    gsap.to(card, {
      y: -index * 20, // Adjust the stacking distance
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      },
    });
  });
});
</script>

<style scoped>
.p-card {
  height: fit-content;
}

.card {
  transition: transform 0.3s ease;
}
</style>