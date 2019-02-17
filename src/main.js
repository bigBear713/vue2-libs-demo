import 'babel-polyfill';
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import 'vue2-libs/vue2-libs.css';
// import 'vue2-libs/styles.less';

import Vue from 'vue';
import App from './app/App';
import router from './router';
import { Vue2Libs } from 'vue2-libs';
Vue.use(Vue2Libs);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
