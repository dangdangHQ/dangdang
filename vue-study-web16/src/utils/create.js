import Vue from 'vue'
// 方法的第二个参数必须是props,因为组件是通过props属性接收参数，否则，接收不到
function create(component,props){
    var vm = new Vue({
        render: h => h(component,{props})
    }).$mount();
    document.body.appendChild(vm.$el)

    var comp = vm.$children[0]
    comp.remove = function(){
        document.body.removeChild(vm.$el);
        vm.$destroy();
    }
    return comp;
}
export default create