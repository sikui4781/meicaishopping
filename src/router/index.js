import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/views/Index"
import Register from '@/views/Register'
import Login from '@/views/Login'

import Main from '@/views/Main'


import Vegetable from '@/views/Vegetable'
import Ulist from '@/views/Ulist'
import Discount from '@/views/Discount'
import Detail from '@/views/Detail'


import Cart from '@/views/Cart'
import Mine from '@/views/Mine'
import Paymoney from '@/views/Paymoney'
import Info from '@/views/Info'
import Userimage from '@/views/Userimage'
import UserEdit from '@/views/UserEdit'
import Help from '@/views/Help'
import Service from '@/views/Service'
import Setting from '@/views/Setting'
import Forgetfind from '@/views/Forgetfind'
import Dizhilist from '@/views/Dizhilist'



Vue.use(Router)

export default new Router({
  routes:[
   
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect:"/main",
      children:[
                    {
                      path:"/register",
                      name:"Register",
                      component:Register
                    },
                    {
                      path:"/login",
                      name:"Login",
                      component:Login
                    },
                    
        
      
                ]
    },
    {
      path:"/main",
      name:"Main",
      component:Main,
 

   },   
    
            {
              path:"/vegetable",
              name:"Vegetable",
              component:Vegetable
            },
           {
      
              path:"/cart",
              name:"Cart",
              component:Cart
      
           },
           {
              path:"/mine",
              name:"Mine",
              component:Mine
            },
            {
              path:'/discount',
              name:'Discount',
              component:Discount
            },
            {
              path:'/detail',
              name:'Detail',
              component:Detail
            },
            {
              path:"/ulist",
              name:"Ulist",
              component:Ulist
            },
            {
              path:"/paymoney",
              name:"Paymoney",
              component:Paymoney
            },
            {
              path:"/info",
              name:"Info",
              component:Info
            },
            {
              path:"/userimage",
              name:"Userimage",
              component:Userimage
            },
            {
              path:"/useredit",
              name:"UserEdit",
              component:UserEdit
            },
            {
              path:"/help",
              name:"Help",
              component:Help
            },
            {
              path: '/service',
              name: 'Service',
              component: Service
            },
            {
              path: '/setting',
              name: 'Setting',
              component: Setting
            },
            {
              path: "/dizhilist",
              name: 'Dizhilist',
              component: Dizhilist
            },
            {
              path:"/forgetfind",
              name:'Forgetfind',
              component:Forgetfind
            },
      {path:"*",redirect:"/main"}      
                    
      
            

  ]
})
