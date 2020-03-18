<template>
    <div>
        <h2>组件通信</h2>
        <!-- Child1组件 -->
        <!-- :child='child1' 父组件给子组件传值,可以直接设置值，也可以动态绑定data中的值，绑定的值是动态响应的 -->
        <!-- @form-child1="formChild1"：监听子组件有没有触发form-child1方法，如果触发，执行formChild1方法 -->
        <Child1 msg ='我是父组件里设置的值' :child='child1' @form-child1="formChild1"></Child1>
        <!-- Child2组件 -->
        <Child2></Child2>
        <button @click="changeChild1">updataChild1</button>
    </div>
</template>
<script>
import Child1 from '@/components/communication/Child1.vue'
import Child2 from '@/components/communication/Child2.vue'
export default {
    data(){
        return {
            child1:'child1',
            child2:'child2'
        }
    },
    components: {
      Child1, Child2
    },
    methods :{
        changeChild1(){
            this.child1 = 'child1Changed'
        },
        formChild1(msg){
            console.log(msg)
        }    
    }
    
}
</script>
<style scoped>

</style>