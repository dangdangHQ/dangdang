<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'KForm',
    componentName:'KForm',
    provide(){
        return {
            form:this
        }
    },
    props:{
        model:{
            type:Object,
            require:true
        },
        rules:{
            type:Object
        }
    },
    created(){
        this.fields = [];
        this.$on("KForm-addFiled",(filed) => {
            this.fields.push(filed)
        })
    },
    methods:{
        // validate(cd){
        //     const task = this.$children.filter(item => {
        //         return item.prop
        //     }).map(item => {
        //        return item.validate()
        //     })

        //     Promise.all(task).then(()=>{ cd(true) })
        //     .catch(() =>{ cd(false) })
    
        // }
          validate(cb) {
      // 获取所有孩子KFormItem
      // [resultPromise]
    //   const tasks = this.$children
    //     .filter(item => item.prop) // 过滤掉没有prop属性的Item
    //     .map(item => item.validate());

    const tasks = this.fields.filter(item => item.prop).map(item => item.validate())
      // 统一处理所有Promise结果
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
    }
}
</script>