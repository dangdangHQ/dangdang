<template>
    <div>
        <alert v-if="showFlag" title="消息提示的文案" description="文字说明文字说明文字说明文字说明文字说明文字说明" type="success" @close="close" :closable="true" close-text="知道了" effect="dark"></alert>
        <alert v-if="showFlag" title="消息提示的文案"  type="info" @close="close"  close-text="知道了" effect="dark"></alert>
        <alert v-if="showFlag" title="消息提示的文案"  type="error"  :closable="true"  effect="light"></alert>
        <button @click="showInfo">控制alert的显示</button>
    </div>
</template>
<script>
import alert from '@/components/alert/Alert'
export default {
    data(){
        return{
            showFlag:false
        }
    },
    methods:{
        showInfo(){
            this.showFlag = true
        },
        close(){
            this.showFlag = false
            console.log('关闭')
        }
    },
    components:{
        alert
    }
}
</script>
<style>

</style>