<template>
  <div class="loading" :style="{backgroundColor:background}" v-show="visible">
    <div class="content">
      <div class="loadingText">{{ text }}</div>
      <div class="rotate"><i :class="spinner" style="font-size:48px;color:#fff"></i></div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      visible:false,
      text:'',
      spinner:'',
      background:'',
      customClass:'',
      target:document.body,
    }
  }
  // props: {
  //   text: {
  //     type: String
  //   },
  //   spinner: {
  //     type: String
  //   },
  //   background: {
  //     type: String
  //   },
  //   customClass: {
  //     type: String
  //   }
  // }
};
</script>
<style>
.loading {
  background-color: rgba(255, 246, 246, 0.925);
  position: fixed;
  width: 100%;
  height: 100%;
  text-align: center;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
}
.loading .content{
    position: absolute;
    width: 200px;
    height: 200px;
    top:50%;
    left: 50%;
    margin-left: -100px;
   
    margin-top: -100px;
}
.loadingText{
  color: #fff;
  font-size: 22px;
  margin-bottom: 8px;
}
.rotate{
  animation: rotate 10s linear  infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>