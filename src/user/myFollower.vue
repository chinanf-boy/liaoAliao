<template>
  <div  class="container">
    <h2>我的粉丝</h2>
    <span v-if="loading"> loading  </span>

    <ul v-if="followers.length">
      <li v-for="follower in followers" :key="follower" > <router-link :to="{ name: 'User', params: { id: follower } }">{{ follower }} 观看粉丝信息</router-link></li>
    </ul>
    <span v-else-if="!loading">你没有粉丝</span>
  </div>
</template>

<script>
 import { mapState } from 'vuex';
export default {

  name: 'myFollower',

  data () {
    return {
      followers: [],
      loading: true
    };
  },
  computed: mapState(['user']),
  mounted(){
    this.getFollower();
  },
  methods: {
    getFollower(){
      this.axios.get(this.user.name+this.user.pwd+'/follower').then(res =>{

        this.loading = false

        this.followers = res.data.result || []
      })
    }
  }
}

</script>

<style scoped>

</style>
