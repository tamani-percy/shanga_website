import './assets/css/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons"
import Tooltip from "primevue/tooltip";
import Ripple from "primevue/ripple";
import AnimateOnScroll from 'primevue/animateonscroll';
import {MyPreset} from "@/PrimevuePresets";

const app = createApp(App)
library.add(fas)
// @ts-ignore
library.add(fab)
app.use(router)

app.directive('animateonscroll', AnimateOnScroll);
app.directive('tooltip', Tooltip);
app.directive('ripple', Ripple);

app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
        options: {
            darkModeSelector: "none"
        },
    },
    ripple: true
})
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
