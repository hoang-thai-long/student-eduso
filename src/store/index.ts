import { createStore } from 'vuex'
import config from './config'

export default createStore({
  state: {
    currentUser:{id:"",name:"", email:"",},
    token:localStorage.getItem(config.keyToken),
    authenticated:localStorage.getItem(config.keyToken) != null,
  },
  getters: {
    isLoggedIn:(state)=>{
      return state.authenticated;
    }
  },
  mutations: {
    SET_USER(state,data){
      state.currentUser = data;
    },
    setAuthenticated(state, payload) {
      state.authenticated = payload;
      localStorage.setItem('authenticated', payload); // sill store 'true' in local storage
    }
  },
  actions: {
    addRoute({commit},data:{path:string,name:string}){
      commit("ADD_ROUTER",data);
    }
  },
  modules: {
  }
})
