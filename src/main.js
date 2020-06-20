import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css';
import './registerServiceWorker';
import CKEditor from '@ckeditor/ckeditor5-vue';
import infiniteScroll from 'vue-infinite-scroll';
import User from './api/User.js';

Vue.use(infiniteScroll);
Vue.use(CKEditor);

Vue.config.productionTip = false;
window.Array.prototype.byKey = function(byKey = 'id'){
  let obj = {};

  this.forEach(val=>{
    obj[val[byKey]] = val;
  });

  return obj;
};

User.getUser().then((user) => {
  store.commit('setUser', user.data);
}).catch((err) =>{
  // location.href = '/auth';
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
