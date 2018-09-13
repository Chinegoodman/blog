// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.$ajax=axios
import './assets/reset.css'
import './assets/iconfont.css'
import {setStorage,getStorage,removeStore} from'./assets/self-common/common-js/common-js'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(from.name)
  console.log(to.name)
  if(to.name == 'personalcenter'){
    if(getStorage('user')!= 15901105257){
      alert('你好，暂未添加游客进入个人中心功能')
      return;
    }
  }
  next()
})

router.beforeResolve((to, from, next) => {
  // console.log('before resolve')
  next()
})

router.afterEach((to, from) => {
  // console.log('after each')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: { App },
  template: '<App/>'
})
