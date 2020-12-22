import Vue from 'vue';
// eslint-disable-next-line import/extensions
import App from './App.vue';
import './style/includes/normalize.scss';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
