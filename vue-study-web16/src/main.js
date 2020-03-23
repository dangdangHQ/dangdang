import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import create from './utils/create'
import Loading from './components/loading/index'

Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue()
Vue.prototype.$create = create

// Vue.prototype.$createLoading = createLoading
Vue.use(Loading);
// 自定义指令
Vue.directive('focus',{
  inserted(el) {
    el.focus()
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
