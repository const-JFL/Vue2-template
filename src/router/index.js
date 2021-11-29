import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 路由表
const routes = [
    {
        path: '',
        component: ()=> import ('@/components/signUpList.vue'),
    }
];


// 路由实例
const router = new VueRouter({
    routes,
});

// 路由守卫
// router.beforeEach((to, from, next)=>{
//     console.log(to);
//     console.log(from);
//     console.log(next);
//     next();
// });





export default router;