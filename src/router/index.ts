import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
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
                    path: '/coming_soon',
                    name: 'coming_soon',
                    component: () => import("@/components/ComingSoon/DashboardComingSoon.vue"),
                },
                {
                    path: '/blog',
                    name: 'blog',
                    component: () => import("@/components/Blog/Blog.vue"),
                },
                {
                    path: '/updates',
                    name: 'updates',
                    component: () => import("@/components/Updates/Updates.vue"),
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
