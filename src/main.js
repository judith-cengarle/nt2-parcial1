import Vue from 'vue';
import App from './App.vue';
import VueForm from 'vue-form';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import router from './router/router'; 
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueForm);
Vue.use(VueAxios,axios);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
