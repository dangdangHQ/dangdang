import Vue from 'vue'
function createLoading(comp,props){
    var {target} = props;
    console.log(props)
    var vm = new Vue({
        render: h => h(comp,{props})
    }).$mount(); //vue限制不能在$mount上挂载body
    target = target ? typeof target === 'object' ? target : document.querySelector(target) : document.body
    target.appendChild(vm.$el)
    var cmp = vm.$children[0];
    cmp.close = function(){
        target.removeChild(vm.$el);
        vm.$destroy()
    }
    return cmp
}
export default createLoading