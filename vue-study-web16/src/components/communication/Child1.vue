<template>
    <div>
        <h3>{{ child }}</h3>
        <p> {{ msg }} </p>
        <button @click="toChild2">向child2传递数据</button>
    </div>
</template>
<script>
export default {
    // props: ['msg','child'], 设置从父组件传递到子组件的属性的数组方式
    // 一般建议用下面这种对象方式，可以设置属性类型和默认值等等
    props:{
        msg: {
            type:String,
            default:''
        },
        child :{
            type:String,
            default:''
        }
    },
    methods:{
        sendTofather(){
            // 当 sendTofather这个事件被触发的时候，会自动触发父组件上的form-child1方法
            this.$emit('form-child1','我是来自child1的数据');
        },
        toChild2(){
            // 通过$parent.$emit和$parent.$on实现同一个父组件下兄弟组件之间的通信
            this.$parent.$emit('giveYou','fromChild1')
        }
    }
}
</script>
<style scoped>

</style>