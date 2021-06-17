import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery'
import './assets/css/app.css';
import './assets/css/bootstrap.min.css';
import './assets/css/app.min.css'
import './assets/css/icons.min.css';
import 'metismenu'
import 'simplebar/dist/simplebar.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCaretRight, faUsers, faCogs, faTicketAlt, faHouseUser, faCog} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import './assets/js/app.min.js';
import App from './App.vue'
import router from './router'
import store from './store'

library.add(faUserSecret, faCaretRight, faUsers, faCogs, faTicketAlt, faHouseUser, faCog)



createApp(App).component('font-awesome-icon', FontAwesomeIcon).
use(store).use(router).mount('#app')
