import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "@/components/Homepage/Homepage.vue";
import AppSkeleton from "@/views/AppSkeleton.vue";
import ContactUs from "@/components/ContactUs/ContactUs.vue";
import AboutUs from "@/components/AboutUs/AboutUs.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior() {
        return {top: 0, left: 0}
    },
    routes: [
        {
            path: '',
            name: 'skeleton',
            component: () => import("@/views/AppSkeleton.vue"),
            children: [
                {
                    path: '',
                    name: 'homepage',
                    component: () => import("@/components/Homepage/Homepage.vue"),
                },
                {
                    path: '/contact_us',
                    name: 'contact_us',
                    component: () => import("@/components/ContactUs/ContactUs.vue"),
                },
                {
                    path: '/:pathMatch(.*)*',
                    component: () => import("@/views/404.vue"),
                },
                {
                    path: '/about_us',
                    name: 'about_us',
                    component: () => import("@/components/AboutUs/AboutUs.vue"),
                }
            ]
        }
    ]
})

export default router
