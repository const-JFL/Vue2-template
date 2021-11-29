<template>
    <div class="hello">
        <i class="iconfont">&#xe664;</i>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        
    },
    created(){

    },
    mounted(){
        // this.$store.dispatch('user/add');
        // console.log(this.$store.state.user.count);
        this.$axios({
            url: '/training/apis/apply/dict/listMajor',
            method: 'get',
            data: {

            }
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        });
        // this.$axios.get('/training/apis/apply/dict/listMajor').then((res)=>{
        //     console.log(res);
        // }).catch((res)=>{
        //     console.log(res);
        // });
    },
    computed: {

    },
    methods: {

    },
    destroyed(){

    }
}
</script>

<style lang="scss" scoped>

</style>
