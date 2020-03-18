export default {
    methods: {
        // 自下而上，冒泡寻找上级派发的事件，会有一定的性能影响
        dispatch(componentName,eventName,params){
        var parent = this.$parent || this.$root;
        var  name = parent.$options.componentName;
            // 如果parent不存在，则不用往下执行
            //如果parent存在：如果name不存在，则需要往上级继续寻找
            // 如果parent和name都存在，componentName !== name,则需要往上级继续寻找,否则，不需要寻找
            while(parent && (!name || componentName !== name)){
                parent = parent.$parent;
                if(parent){
                    name = parent.$options.componentName;
                }
            }
            if(parent){
                //apply方法接收两个参数，第一个obj：改变方法的this指针；第二个参数args:是一个数组，接受该方法的参数
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        broadcast(componentName,eventName,params){
            broadcast.call(this,componentName,eventName,params)
        }
    },
}
// 广播
function broadcast(componentName,eventName,params){
    var children = this.$children;
    children.forEach(child => {
        if(child.$options.componentName == componentName){
            child.$emit.apply(child,[eventName].concat(params))
        }else{
            broadcast.call(child,componentName,eventName,params)
        }
    })
}