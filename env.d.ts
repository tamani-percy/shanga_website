/// <reference types="vite/client" />

declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}
declare module '*.vue' {
    import type {DefineComponent} from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const component: DefineComponent<object, object, any>
    export default component
}
declare module 'vue-chartjs'
declare module 'chart.js'
declare module "particles.vue3"
declare module 'primevue/*'
declare module '@fortawesome/*'
declare module '@/components/*'