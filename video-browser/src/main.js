import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

new Vue({
  // el: '#app', same as $mount('#app').. mounts App componet to the DOM
  render: h => h(App)
}).$mount('#app');
