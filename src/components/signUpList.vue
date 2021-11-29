<template>
    <div class="template">
        <div class="information-wrap">
            <div class="color-block"></div>
            <div class="contact-wrap">
                <div class="logo-wrap">
                    <img src="@/assets/img/contact-logo.png" alt="">
                </div>
                <ul class="contact-list-wrap">
                    <li class="contact-list-li">
                        <i class="iconfont">&#xe884;</i>
                        <span class="field-name">
                            咨询热线：
                        </span>
                        <div class="field-content">
                            <ul class="content-list-ul">
                                <li class="content-list-li">
                                    <span>
                                        （010）6529 0551
                                    </span> 
                                    <span>
                                        梁老师
                                    </span>
                                </li>
                                <li class="content-list-li">
                                    <span>
                                        （010）6529 0552    
                                    </span>
                                    <span>
                                        李老师
                                    </span>
                                </li>
                                <li class="content-list-li">
                                    <span>  
                                        （010）6529 0550
                                    </span>
                                    <span>  
                                        丁老师
                                    </span>  
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="contact-list-li">
                        <i class="iconfont">&#xe752;</i>
                        <span class="field-name">
                            咨询QQ群：
                        </span>
                        <span class="field-content">
                            775680502
                        </span>
                    </li>
                    <li class="contact-list-li">
                        <i class="iconfont">&#xe601;</i>
                        <span class="field-name">
                            客服微信号：
                        </span>
                        <span class="field-content">
                            135 2074 8233
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'signUpList',
    data(){
        return {

        }
    },
    computed: {

    },
    created(){

    },
    mounted(){

    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
    .information-wrap{
        padding: px2vw(100) 0 0;
        height: px2vw(530);
        background: #fff;
        position: relative;
        .color-block{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: px2vw(340);
            background: linear-gradient(to top, #2c93fe, #18abff);
            z-index: 1;
        }
        .contact-wrap{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            padding: px2vw(85) 0 px2vw(35) px2vw(30);
            width: px2vw(700);
            background: #fff;
            border-radius: px2vw(16);
            box-shadow: 0 2px 7px rgba(0,0,0,.15);
            z-index: 1;
            // logo
            .logo-wrap{
                position: absolute;
                left: 50%;
                top: 0;
                transform: translate(-50%, -50%);
                & > img{
                    display: block;
                    width: px2vw(130);
                    height: px2vw(130);
                }
            }
            .contact-list-wrap{
                .contact-list-li{
                    &:not(:first-child){
                        margin-top: px2vw(10);
                    }
                    &:nth-child(1){
                        margin-bottom: px2vw(25);
                    }
                    font-size: px2vw(30);
                    line-height: px2vw(50);
                    display: flex;
                    align-items: flex-start;
                    & > i.iconfont{
                        margin-right: px2vw(20);
                        font-size: px2vw(40);
                        color: #2a9cff;
                    }
                    .field-name{
                        width: px2vw(190);
                        text-align: left;
                    }
                    .field-content{
                        flex: 1;
                        .content-list-ul{
                            .content-list-li{
                                display: flex;
                                align-items: center;
                                & > span:nth-child(1){
                                    width: px2vw(285);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>