import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import VueClickAway from "vue3-click-away";



import axios from 'axios'
import '../my_styles.scss'


const app = createApp(App);
app.component('fa-icon', FontAwesomeIcon); // Register the FontAwesomeIcon component globally
app.use(store).use(router, axios).mount('#app') //axios has to be behind router
app.use(VueClickAway) // Makes 'v-click-away' directive usable in every component