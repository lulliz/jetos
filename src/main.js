import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faTableColumns,
  faReceipt,
  faWallet,
  faChartColumn,
  faUser,
  faMessage,
  faGear,
  faMagnifyingGlass,
  faBell,
  faBars,
  faPiggyBank,
  faCreditCard,
  faDollarSign
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faTableColumns,
  faReceipt,
  faWallet,
  faChartColumn,
  faUser,
  faMessage,
  faGear,
  faMagnifyingGlass,
  faBell,
  faBars,
  faPiggyBank,
  faCreditCard,
  faDollarSign
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')