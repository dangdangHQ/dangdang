<template>
    <div>
        <h3>child2组件</h3>
        <p>{{ $parent.child2 }}</p>
        <p>{{ mydata }}</p>
        <!-- <button @click="changeMydata">改变值</button>
        <button @click="getRoot">获取根组件</button>
        <button @click="getParent">获取父组件</button> -->
        <p>{{ fromChild1 }}</p>
        <p>1111</p>
    </div>
</template>
<script>
// import func from '../../../vue-temp/vue-editor-bridge'
export default {
    data(){
        return {
            mydata:this.$parent.child2,
            fromChild1:''
        }
    },
    methods:{
      changeMydata:function(){
          this.$parent.child2 = 'mydata'
      },
      getRoot:function(){
          console.log(this.$root)
      },
      getParent:function(){
          console.log(this.$parent)
      }
    },
    created(){
         this.$parent.$on('giveYou',(args)=>{
             this.fromChild1 = args
          })
    }   
}
</script>
<style scoped>

</style>