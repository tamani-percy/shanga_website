<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from 'vue-router';
import Menubar from "primevue/menubar";
import {MyPreset} from "@/PrimevuePresets.ts";
import Divider from "primevue/divider"
const router = useRouter();
const primaryColor = MyPreset.semantic.primary[500];

const items = ref([
  {
    label: 'Home',
    icon: ['fas', 'house'],
    command: () => {
      router.push('/');
    }
  },
  {
    label: 'About Us',
    icon: ['fas', 'users'],
    command: () => {
      router.push('/about_us');
    }
  },
  {
    label: 'Contact Us',
    icon: ['fas', 'phone'],
    command: () => {
      router.push('/contact_us');
    }
  },
]);

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

const primaryColorHover = MyPreset.semantic.primary[900];
</script>

<template>
  <div class="flex w-full justify-center fixed parent_menubar">
    <Menubar :model="items">
      <template #start>
        <a href="/" id="shanga_logo">
          <img src="../assets/logo/shanga_logo.svg" alt="No logo" class="w-24"/>
        </a>
      </template>
      <template #item="{ item, props}">
        <router-link v-slot="{ href, navigate }" :to="item.route">
          <a v-ripple :href="href" v-bind="props.action" @click="navigate" @mouseenter="addClass"
             @mouseleave="removeClass"
             class="inline-flex py-2 px-3 md:p-0 font-bold" :style="{backgroundColorHover:primaryColorHover}">
            <span :class="item.icon"/>
            <font-awesome-icon class="text-xl fa-icon" :icon="item.icon"/> &nbsp;
            <span>{{ item.label }}</span>
          </a>
        </router-link>

      </template>
      <template #end>
        <div class="inline-flex">
        <div class="border-r border-2 hidden lg:inline-block"></div>
          <router-link to="#" id="navbar-login-btn"
                       class="font-medium  px-4 py-2 text-sm text-center h-12 w-20 items-center flex justify-center hover:underline">
            Log In
          </router-link>
          <router-link to="#"
                       class=" rounded-full hover:shadow-lg font-medium text-sm px-4 py-2 text-center h-12 w-28 items-center content-center" :style="{background:primaryColor}">
            <span class="text-textColor">Get Started</span>
          </router-link> &nbsp;
        </div>
      </template>
    </Menubar>

  </div>
</template>



<style>
.parent_menubar {
  z-index: 1000 !important;
  background-color: #f8fafc;
}

</style>