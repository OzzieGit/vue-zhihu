import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import router from './router'
import store from './store'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'; 

Vue.use(Mint);
Vue.config.productionTip = false
Vue.prototype.$http = Axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
