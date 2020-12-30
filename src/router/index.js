 import Vue from 'vue'
 import VueRouter from 'vue-router'

 Vue.use(VueRouter)

 const routes = [{
     path: '/',
     name: "signIn",
     component: () => import('../views/signIn.vue')
   }, {
     path: '/signUp',
     name: "signUp",
     component: () => import('../views/signUp.vue')
   },
   {
     path: '/forget',
     name: "forget",
     component: () => import('../views/forget.vue')
   },
   {
     path: '/Home',
     name: 'Home',
     component: () => import('../views/Home.vue'),
     children:[
       {
         path: '/',
         name: 'page1',
         component: () => import('../views/page1.vue')
       },
        {
          path: '/page2',
          name: 'page2',
          component: () => import('../views/page2.vue')
        }, {
          path: '/page3',
          name: 'page3',
          component: () => import('../views/page3.vue')
        },
     ]
   },
 ]

 const router = new VueRouter({
  //  mode: 'history',
   base: process.env.BASE_URL,
   routes
 })

 export default router