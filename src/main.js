import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://dragonfly-b227a.firebaseio.com';
axios.defaults.headers.common['Authorization'] = 'agenerictoken';
axios.defaults.headers.get['Accepts'] = 'application/json';

axios.interceptors.request.use(config => {
  console.log('Req interceptor', config);
  return config;
});

axios.interceptors.response.use(res => {
  console.log('Res interceptor', res);
  return res;
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
