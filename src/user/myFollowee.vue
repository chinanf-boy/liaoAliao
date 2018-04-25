<template>
  <div class="container">
    <h2>我的关注</h2>
    <span v-if="loading"> loading  </span>

    <ul v-if="followees.length">
      <li v-for="followee in followees" :key="followee"> <router-link :to="{ name: 'User', params: { id: followee } }">{{followee}} 观看-信息</router-link></li>
    </ul>
    <span v-else-if="!loading">你没有关注任何人</span>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {

  name: 'myFollowee',

  data () {
    return {
      followees: [],
      loading:true
    };
  },
  computed: mapState(['user']),

  mounted(){
    this.getFollowee();
  },
  methods: {
    getFollowee(){

      this.axios.get(this.user.name+this.user.pwd+'/followed').then(res =>{
        this.loading = false

        this.followees = res.data.result

      })
    }
  }


};
</script>

<style scoped>

</style>
