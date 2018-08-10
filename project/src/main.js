import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import indexPage from './pages/index'
import detailPage from './pages/detail'
import detailAnaPage from './pages/detail/analysis'
import detailCouPage from './pages/detail/count'
import detailForPage from './pages/detail/forecast'
import detailPubPage from './pages/detail/publish'



Vue.use(VueRouter)//注册一个vuex
Vue.use(VueResource)
Vue.config.productionTip = false
//定义一个全局的类，实例化一个router
let router = new VueRouter ({
    mode: 'history',
    routes: [
  {
    path: '/',
    component: indexPage
  },
  {
    path: '/detail',
    component: detailPage,
      children: [
    {
      path: 'analysis',
      component: detailAnaPage
    },
    {
      path: 'count',
      component: detailCouPage
    },
    {
      path: 'forecast',
      component: detailForPage
    },
    {
      path: 'publish',
      component: detailPubPage
    }
    ]
  }
  ]
})
/*let store = new Vuex.Store({
  state: {
    totalappleprice: 0,
    totalbanananprice: 0
  },
  mutations: {
    incrementapple (state,appleprice) {
      state.totalappleprice += appleprice 
    },
    decrementapple (state,appleprice) {
      state.totalappleprice -= appleprice
    },
    incrementbananan (state,banananprice) {
      state.totalbanananprice += banananprice 
    },
    decrementbananan (state,banananprice) {
      state.totalbanananprice -= banananprice
    }
  }
})

let router = new VRouter({
  mode: 'history',
  routes: [
  /*{ 
    path: '/',
    redirect: '/apple'
  },
  {
    path: '/apple',
    component: Apple,
    children: [
    {
      path: 'red',
      component: redApple
      }
    ]
  },
  {
    path: '/bananan/',
    component: Bananan
  }
  ]
  
})*/

new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
