import Vue from 'vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';


Vue.use(ElementUI);
Vue.use(router);
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
