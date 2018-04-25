import vuex from 'vuex'
import vue from 'vue'

vue.use(vuex)

import axios from '../http'

const store = new vuex.Store({
  state:{
    user: null
  },
  mutations:{
    setUser: (state, data) =>{

      localStorage.setItem('user', JSON.stringify(data)) // object => str

      state.user = data // Object
    },
    setFollowed: (state, data) =>{

      state.user.followed = data // Object

    }
  },
  getters: {
    uid({user}){
      if(user) return user.uid;
      return false;
    }
  },
  actions: {
    exit(context){
      context.commit('setUser', null);
    },
    login(context, user){
      user = typeof user === 'string'? JSON.parse(user) : user
      console.log(typeof user)
      context.commit('setUser', user);
    },
    getCurrentUser(context, uid){
      axios.get('/'+uid).then(res =>{
        // this.checkFowlled()

        return res
      }).catch(error => {
        vue.$message.error(error.message)
      })
      return  axios.get('/'+uid).then(res =>{
        // this.checkFowlled()

        return res
      }).catch(error => {
        vue.$message.error(error.message)
      })

    }
  }
})

export default store
