import { createStore } from 'vuex'
import { getInfo  } from "~/api/manager"

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
        //管理用户信息
      user:{}
    }
  },
  mutations: {
      //记录用户信息
      SET_USERINFO(state, user) {
          state.user = user
    }
  },
  actions: {
    // 登录
    login({ commit }, { username,password }){
        return new Promise((resolve,reject)=>{
            login(username,password).then(res=>{
                setToken(res.token)

                resolve(res)
            }).catch(err=>reject(err))
        })
    },
    //获取当前登录用户信息
    getinfo({ commit }) {
      getInfo().then(res => {
          return new Promise((resolve,reject)=>{
                getInfo().then(res=>{
                    commit("SET_USERINFO",res)
                    resolve(res)
                }).catch(err=>reject(err))
          })
      })
    }
  }
})

export default store