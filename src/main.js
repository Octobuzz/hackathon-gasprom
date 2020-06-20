import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css';
import './registerServiceWorker';
import CKEditor from '@ckeditor/ckeditor5-vue';
import infiniteScroll from 'vue-infinite-scroll';

Vue.use(infiniteScroll);
Vue.use(CKEditor);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
