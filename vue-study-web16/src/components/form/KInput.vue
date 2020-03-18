<template>
    <div>
        <input :type="type" :value="value" @input="InputHandler" v-bind="$attrs">
    </div>
</template>
<script>
import emitter from '@/mixins/emitter'
export default {
    mixins:[emitter],
    props:{
        type:{
            type:String,
            defaule:''
        },
        value:{
            type:String,
            defaule:''
        }
    },
    methods:{
        InputHandler(e){
            this.$emit('input',e.target.value)
            // this.$parent.$emit('validate')
            this.dispatch('KFormItem','validate')
        }
    }
}
</script>