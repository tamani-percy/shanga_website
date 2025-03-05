<script setup lang="ts">
// @ts-nocheck
import {ref, onMounted, onUnmounted, computed} from "vue";
import {useRoute} from "vue-router"; // Import useRoute from Vue Router
import Menubar from "primevue/menubar";
import {MyPreset} from "@/PrimevuePresets.ts";

const primaryColor: any = MyPreset.semantic.primary[500];

const items: any = ref([
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
  {
    label: "Updates",
    icon: ["fas", "bell"],
    route: "/updates",
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
  const childElement = event.target.querySelector(".fa-icon");
  if (childElement) {
    childElement.classList.add("fa-bounce");
  }
}

function removeClass(event: any) {
  const childElement = event.target.querySelector(".fa-icon");
  if (childElement) {
    childElement.classList.remove("fa-bounce");
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Get the current route
const route = useRoute();


const isActive = (itemRoute: string) => {
  return route.path === itemRoute;
};
</script>

<template>
  <div
      class="flex justify-center w-full sticky parent_menubar transition-transform duration-300"
      :class="{ 'hidden-navbar': !isNavbarVisible }"
  >
    <Menubar
        :model="items"
        class="!backdrop-blur-sm bg-whiteBg shadow-sm flex justify-between items-center px-4"
    >
      <template #start>
        <a href="/" id="shanga_logo" class="mr-4">
          <!-- Adds margin-right for spacing -->
          <img src="/svgs/shanga_logo.svg" alt="No logo" class="w-24"/>
        </a>
      </template>

      <template #item="{ item, props }">
        <div class="flex-1 flex justify-start lg:justify-center">
          <!-- Centers the items -->
          <router-link :to="item.route" v-slot="{ href, navigate }" custom>
            <a
                v-ripple
                :href="href"
                v-bind="props.action"
                @click="navigate"
                @mouseenter="addClass"
                @mouseleave="removeClass"
                :class="{ 'active-menu': isActive(item.route) }"
            >
              <font-awesome-icon class="text-md fa-icon" :icon="item.icon"/> &nbsp;
              <span>{{ item.label }}</span>
            </a>
          </router-link>
        </div>
      </template>

      <template #end>
        <div class="lg:ml-36 flex items-center">
          <div class="border-r border hidden lg:inline-block"></div>
          <router-link
              :to="{ name: 'coming_soon' }"
              id="navbar-login-btn"
              class="font-medium px-4 py-2 text-sm text-center h-12 w-20 items-center flex justify-center hover:underline"
          >
            Log In
          </router-link>
          <router-link
              :to="{ name: 'coming_soon' }"
              class="rounded-full hover:shadow-lg font-medium text-sm px-4 py-2 text-center h-12 w-44 items-center content-center"
              :style="{ background: primaryColor }"
          >
            <span class="text-textColor">Get Started</span>
          </router-link>
        </div>
      </template>
    </Menubar>
  </div>
</template>

<style>
.parent_menubar {
  background-color: #f8fafc;
  top: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  position: fixed !important;
  z-index: 1000 !important;
}

.hidden-navbar {
  transform: translateY(-100%);
}

.active-menu {
  font-weight: bold;
  border-bottom: 2px solid v-bind('primaryColor');
}

@media screen and (min-width: 768px) {
  .p-menubar {
    padding-right: 40px !important;
    padding-left: 40px !important;
  }
}
</style>