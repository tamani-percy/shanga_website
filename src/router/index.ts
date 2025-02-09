import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "@/components/Homepage/Homepage.vue";
import AppSkeleton from "@/views/AppSkeleton.vue";
import ContactUs from "@/components/ContactUs/ContactUs.vue";
import AboutUs from "@/components/AboutUs/AboutUs.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '',
            name: 'homepage',
            component: AppSkeleton,
            children: [
                {
                    path: '',
                    name: 'homepage',
                    component: Homepage,
                },
                {
                    path: '/contact_us',
                    name: 'contact_us',
                    component: ContactUs
                },
                {
                    path: '/about_us',
                    name: 'about_us',
                    component: AboutUs
                }
            ]
        }
    ]
})

export default router
