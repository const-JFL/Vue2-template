import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/iconfont/iconfont.css';
import axios from './assets/js/http';


Vue.config.productionTip = false;
Vue.prototype.$axios = axios;


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
