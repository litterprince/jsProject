import Vue from 'vue'
import App from './App'
import lazyLoad from 'vue-lazyload'
import router from './router'
import infiniteScroll from 'vue-infinite-scroll'
import axios from 'axios'
import { Loading, Message, MessageBox } from 'element-ui'
import Vuex from 'vuex'

Vue.config.productionTip = false;
//懒加载
Vue.use(lazyLoad,{
    loading: '/static/loading-svg/loading-bars.svg'
});
//滚动分页插件
Vue.use(infiniteScroll);
//element-ui
Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading.service;
Vue.prototype.$alert = MessageBox.alert;
//axiso
axios.defaults.timeout = 5000;
let loadinginstace;
axios.interceptors.request.use(config => {
    // element ui Loading方法
    loadinginstace = Loading.service({ fullscreen: true });
    return config
}, error => {
    loadinginstace.close()
    Message.error( '加载超时');
    return Promise.reject(error)
});
axios.interceptors.response.use(data => {// 响应成功关闭loading
    loadinginstace.close();
    return data;
}, error => {
    loadinginstace.close();
    Message.error('加载失败');
});
Vue.prototype.$http = axios;
//vuex
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        loginName: '',
        cartCount: 0
    },
    mutations: {
        setLoginName (state, value) {
            state.loginName = value;
        },
        setCartCount (state, value){
            state.cartCount = value;
        },
        increment (state){
            state.cartCount ++;
        }
    }
});
//登陆拦截
router.beforeEach((to, from, next) => {
    axios.post('/users/cookieLogin').then(res=>{
          if(res.data.status == '0'){
              store.commit('setLoginName', res.data.result.userName);
              store.commit('setCartCount', res.data.result.cartCount | 0);
              next();
          }else{
              if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
                  Message.error("您未登录，请先登陆！");
                  if(to.fullPath != "/"){
                      next({path: '/'});
                  }
              } else {
                  next();
              }
          }
    });
});

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
