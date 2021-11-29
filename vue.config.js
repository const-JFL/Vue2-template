// vue.config.js

/**
 * author jiangfulai
 * time 11.26
 */

const path = require('path');

function resolve(dir){
    return path.join(__dirname, dir);
}

const INDEX_TITLE = '水科培训 '; 


// 代理地址
const target = 'http://10.3.0.187:8080/';

module.exports = {
    publicPath: './',
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('src'));
        config
            .plugin('html')
            .tap(args => {
                args[0].title = INDEX_TITLE;
                return args;
            });
    },
    css: {
        loaderOptions: { //全局变量及函数
            scss: {
                data: `@import "@/assets/css/variables.scss";`
            }
        }
    },
    devServer: {
        open: true,
        proxy: {
            '/training': {
                target: target,
                changeOrigin: true,
                pathRewrite: {
                    '^/training': '/training'
                }
            }
        }
    }
}