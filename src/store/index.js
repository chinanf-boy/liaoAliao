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

        console.log('get res 1111')
        return res
      }).catch(error => {
        vue.$message.error(error.message)
      })
      console.log(" middle ")
      return  axios.get('/'+uid).then(res =>{
        // this.checkFowlled()

        console.log('get res 2222')
        return res
      }).catch(error => {
        vue.$message.error(error.message)
      })

    }
  }
})

export default store
