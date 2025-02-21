
<script setup lang="ts">
// @ts-nocheck
import { ref, onMounted, onUnmounted } from "vue";
import Menubar from "primevue/menubar";
import { MyPreset } from "@/PrimevuePresets.ts";


const primaryColor:any = MyPreset.semantic.primary[500];

const items:any = ref([
  {
    label: "Home",
    icon: ["fas", "house"],
    route: "/",
  },
  {
    label: "About Us",
    icon: ["fas", "users"],
    route: "/about_us",
  },
  {
    label: "Contact Us",
    icon: ["fas", "phone"],
    route: "/contact_us",
  },
]);

const isNavbarVisible = ref(true);
let lastScrollY = window.scrollY;

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY) {
    isNavbarVisible.value = false; // Hide when scrolling down
  } else {
    isNavbarVisible.value = true; // Show when scrolling up
  }
  lastScrollY = currentScrollY;
};


function addClass(event: any) {
  const childElement = event.target.querySelector('.fa-icon')
  if (childElement) {
    childElement.classList.add('fa-bounce')
  }
}

function removeClass(event: any) {
  const childElement = event.target.querySelector('.fa-icon')
  if (childElement) {
    childElement.classList.remove('fa-bounce')
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="flex justify-center w-full sticky parent_menubar transition-transform duration-300"
       :class="{ 'hidden-navbar': !isNavbarVisible }">
    <Menubar :model="items">
      <template #start>
        <a href="/" id="shanga_logo">
          <img src="../assets/logo/shanga_logo.svg" alt="No logo" class="w-24"/>
        </a>
      </template>
      <template #item="{ item, props }">
        <router-link :to="item.route" v-slot="{ href, navigate }" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate" @mouseenter="addClass"
             @mouseleave="removeClass">
            <font-awesome-icon class="text-md fa-icon" :icon="item.icon"/> &nbsp;
            <span>{{ item.label }}</span>
          </a>
        </router-link>
      </template>
      <template #end>
        <div class="inline-flex">
          <div class="border-r border hidden lg:inline-block"></div>
          <router-link to="#" id="navbar-login-btn"
                       class="font-medium px-4 py-2 text-sm text-center h-12 w-20 items-center flex justify-center hover:underline">
            Log In
          </router-link>
          <router-link to="#"
                       class="rounded-full hover:shadow-lg font-medium text-sm px-4 py-2 text-center h-12 w-28 items-center content-center"
                       :style="{ background: primaryColor }">
            <span class="text-textColor">Get Started</span>
          </router-link>
        </div>
      </template>
    </Menubar>
  </div>
</template>

<style>
.parent_menubar {
  z-index: 1000;
  background-color: #f8fafc;
  position: fixed;
  top: 0;
  width: 100%;
  transition: transform 0.3s ease-in-out;
}

.hidden-navbar {
  transform: translateY(-100%);
}
</style>
