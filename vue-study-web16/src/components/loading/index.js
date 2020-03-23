import Loading from '@/components/loading/cerateLoadingByExtend'
export default{
    install(Vue){
        Vue.prototype.$Loading = Loading;
    }
}