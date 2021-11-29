import axios from 'axios';

// axios实例
const instance = axios.create({
    timeout: 3000,
});
// 请求拦截
instance.interceptors.request.use((config)=>{
    return config;
}, function(err){
    return Promise.reject(err);
});
// 响应拦截
instance.interceptors.response.use((response)=>{
    return response.data;
}, function(err){
    return Promise.reject(err);
});
// 公用配置
let option = {};
// 请求方法数组
const METHODS_ARR = ["put", "post", "patch"];

// 封装方法
function _axios({url, method = "get", data = {}}){
    const methodLower = method.toLocaleLowerCase();
    option = {
        url,
        method,
    }
    if(METHODS_ARR.includes(methodLower)){
        option = Object.assign(option, {
            data
        });
    }else{
        option = Object.assign(option, {
            params: {
                ...data
            }
        });
    }
    
    return new Promise((resolve, reject)=>{
        instance(option).then((res)=>{
            resolve(res);
        }).catch((err)=>{
            reject(err);
        });
    });
}

export default _axios;