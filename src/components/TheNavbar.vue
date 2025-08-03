<script setup lang="ts">
// @ts-nocheck
import {onMounted, onUnmounted, ref} from "vue";
import {useRoute} from "vue-router";
import Button from "primevue/button"
import Menubar from "primevue/menubar";
import {MyPreset} from "@/PrimevuePresets.ts";
import router from "@/router";

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
      class="flex justify-center w-full sticky parent_menubar transition-transform duration-300 z-50"
      :class="{ 'hidden-navbar': !isNavbarVisible }"
  >
    <Menubar
        :model="items"
    >
      <template #start>
        <a href="/" id="shanga_logo" class="mr-4">
          <!-- Adds margin-right for spacing -->
          <img src="/svgs/shanga_logo.svg" alt="No logo" class="w-20"/>
        </a>
      </template>

      <template #item="{ item, props }">
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
      </template>

      <template #end>
        <div class="gap-4 flex items-center ">
          <Button severity="secondary" size="small"
              @click="router.push({ name: 'coming_soon' })"
          >
           <font-awesome-icon :icon="['fas','right-to-bracket']"/> Log In
          </Button>
          <Button
              size="small"
              @click="router.push({ name: 'coming_soon' })"
          >
            <font-awesome-icon :icon="['fas','door-open']"/> Sign up
          </Button>
        </div>
      </template>
    </Menubar>
  </div>
</template>

<style>
.p-menubar {
  width: 100%;
  position: fixed !important;
  z-index: 1000 !important;
}

@media screen and (min-width: 768px) {
  .p-menubar {
    padding-right: 40px !important;
    padding-left: 40px !important;
  }
}

.notification-button {
  position: relative;
}

</style>