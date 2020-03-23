import Vue from 'vue'
import Loading from '@/components/loading/Loading'

// 生成一个子类构造器
var loadingConstructor = Vue.extend(Loading)

// 设置一个标识，控制当loading这个组件挂载在body上的时候，是单例模式
let fullscreenLoading;

// 设置默认参数
const defaults = {
    target:document.body,
    text: null,
    fullscreen: true,
    body: false,
    lock: false,
    customClass: ''
}
// 定义一个方法，将默认参数与实际参数合并，如果传参了，按照传入的值，如果没有传参，就走默认值
// 第一个参数target是一个空对象，用来存合并之后的参数
function merge(target){
    for(let i = 1,j = arguments.length; i < j; i++){
        let source = arguments[i] || {};
        for(let prop in source){
            if(source.hasOwnProperty(prop)){
                let value = source[prop];
                if(value !== undefined ){
                    target[prop] = value
                }
            }
        }
    }
    return target
}

// 定义一个方法，接收在loading组件关闭的时候执行的操作回调
 function afterLeave(instance,callback,once,delayTime){
    if(!instance || !callback) throw new Error('instance & callback is required')
    let flag = false;
    const afterLeaveCallback = function(){
        if(flag) return;
        flag = true;
        if(callback){
            callback.apply(null,arguments)
        }
    }
    if(once){
        instance.$once('after-leave',afterLeaveCallback)
    }else{
        instance.$on('after-leave',afterLeaveCallback)
    }
   setTimeout(()=>{
    afterLeaveCallback();
   },delayTime + 100)   
 }
// 将close方法挂载在loading的构造器上
loadingConstructor.prototype.close = function(){
    if(this.fullscreen){
        fullscreenLoading = undefined
    }
    afterLeave(this,function(){
        if(this.$el && this.$el.parentNode){
            this.$el.parentNode.removeChild(this.$el)
        }
        this.$destroy()
    },300)
    this.visible = false

}
const loading = (options =>{
    // 这是合并之后的参数
    options = merge({}, defaults, options);
    let { target } =  options;
    target =  typeof target === 'object' ? target || document.body : document.querySelector(target);
    options.target = target;
    if(options.target !== document.body){
        options.fullscreen = false
    }else{
        options.body = true
    }
    // 当生成一个实例得时候，将实例对象赋值给fullscreenLoading
    // 在这儿通过判断fullscreenLoading是否存在，来决定是否创建实例
    // 实现了单例模式
    if(options.fullscreen && fullscreenLoading){
        return fullscreenLoading
    }
    let parent = options.body ? document.body : options.target
    // 生成loading实例
    var instance = new loadingConstructor({
        el:document.createElement('div'),
        data:options
    });

    // 将loading实例挂载到页面上，生成真实的Dom元素
    parent.appendChild(instance.$el)
    Vue.nextTick(() => {
        instance.visible = true
    })
    if (options.fullscreen) {
        fullscreenLoading = instance;
      }
    return instance;
})
export default loading