<template>
  <div class="container">
    <ul v-if="statuses.length">
      <li v-for="status in statuses" :key="status.article.id">
        <router-link :to="{name:'User', params: { id: status['source'].uid  }}">{{ status['source'].name }}</router-link> 在 {{ Date(status['article'].id).slice(11,24) }}
        <span v-if="status.source.type == 'create_article' ">
          创建了新的文章 <router-link :to="{ name: 'ArticleShow', params:{ id: status.article.id } }">{{ status.article.title }}</router-link>
        </span>
      </li>
    </ul>
    <span v-else-if="loading"> loding </span>
    <span v-else> 🈚️状态 </span>

  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {

  name: 'friend',

  data () {
    return {
      statuses: [],
      loading: true
    };
  },
  created(){
    this.getFriendMsg();
  },
  computed: mapState(['user']),
  methods: {
    getFriendMsg(){
      this.user.followed && this.user.followed.forEach( (uid, index) =>{
        this.axios.get('/status/'+uid).then(res =>{

          res.data.result && this.statuses.push(res.data.result)
        }).catch(err => console.error("哈哈"))
        if(index == this.user.followed.length -1) this.loading = false
      }
    )
  }
  }
};
</script>

<style lang="css" scoped>
</style>
