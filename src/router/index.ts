import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import DashBoard from '@/components/DashBoard.vue'
import store from '@/store'
import LoginDashboard from '@/components/LoginComponent.vue'
import { defineAsyncComponent } from 'vue'
import SDefaultVue from '@/components/Skeletons/SDefault.vue'
import PageNotFound from '@/components/PageNotFound.vue'
const arrIcons = ["mdi-floor-plan"]
const createRoute = (path:string,name:string,component:any,auth=false,meta?:{[key:string]:any})=>{
  return {
    path:path,
    name:name,
    component:component,
    meta:{
      requiresAuth: auth,
      ...meta
    }
  }
}
const createRouteAsync = (path:string,name:string,component:any,auth=false,meta?:{[key:string]:any})=>{
  return {
    path:path,
    name:name,
    component:defineAsyncComponent({
      loader:() => component,
      loadingComponent:SDefaultVue
    }),
    meta:{
      requiresAuth: auth,
      ...meta
    }
  }
}

const routes: Array<RouteRecordRaw> = [
  createRoute("/","dashboard",DashBoard,true),
  createRoute("/login","login",LoginDashboard,false,{layout:'_LayoutEmpty'}),
  createRouteAsync("/about","about",import("../views/AboutView.vue"),true),
  createRoute("/:catchAll(.*)","404",PageNotFound,false,{layout:'_LayoutEmpty'}),
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, _from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLoggedIn) {
      next({ name: 'login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

export default router
