import vuex from 'vuex'
import vue from 'vue'

vue.use(vuex)

const store = new vuex.Store({
  state:{
    coll: true
  }
})

export default store
