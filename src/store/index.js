import vuex from 'vuex'
import vue from 'vue'

vue.use(vuex)

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
      if(user) return user.name;
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
    }
  }
})

export default store
