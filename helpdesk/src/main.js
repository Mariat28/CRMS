import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery'
import 'popper.js'
import './assets/css/app.css';
import './assets/css/bootstrap.min.css';
import './assets/css/app.min.css'
import './assets/css/icons.min.css';
import 'metismenu'
import Toasted from "@meforma/vue-toaster";
import 'simplebar/dist/simplebar.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCaretRight, faUsers, faCogs, faUser, faTicketAlt, faBan, faHouseUser, faCog, faAsterisk} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import './assets/js/app.min.js';
import App from './App.vue'
import router from './router'
import store from './store'

library.add(faUserSecret, faCaretRight, faUsers, faUser, faCogs, faBan, faTicketAlt, faHouseUser, faCog, faAsterisk)

createApp(App).
component('font-awesome-icon', FontAwesomeIcon).use(Toasted,{
    position: "top-right",
}).
use(store).use(router).mount('#app')
