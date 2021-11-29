import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import app from './module/app.js';
import user from './module/user';
// store实例
const store = new Vuex.Store({
    state: {
        wx_code: '555',
    },
    modules: {
        app,
        user
    }
});
export default store;