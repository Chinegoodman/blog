import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/wrappage/wrapindex.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta:{
        bread:[
          {
            path:'/',
            linkname:'首页'
          }
        ]
      },
      component: index
    },
    {
      path:'/personalcenter',
      name:'personalcenter',
      meta:{
        bread:[
          {
            path:'/',
            linkname:'首页'
          },
          {
            path:'/personalcenter',
            linkname:'个人中心'
          },
        ]
      },
      component:resolve=>require(['./../components/wrappage/personalcenter.vue'],resolve)
    },
    {
      path:'/iconfont',
      name:'iconfont',
      meta:{
        bread:[
          {
            path:'/',
            linkname:'首页'
          },
          {
            path:'/iconfont',
            linkname:'iconfont-DEMO'
          },
        ]
      },
      component:resolve=>require(['./../components/common/iconfont.vue'],resolve)
    }
  ]
})
