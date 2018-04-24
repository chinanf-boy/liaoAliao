<template>
<div class="container">
  <template v-if="article">
    <h2>{{ article['title'] }}</h2>

    <div class="oprator" v-if="uid == article['author'].uid">
      <router-link :to="{ name:'ArticleEdit', params: {id: article.id} }" tag="button">修改</router-link >
      <button @click="destroy">删除</button>
    </div>

    <div class="container">
      <span> author {{ article['author'].name }}</span> <br>
      <span> cate {{ article['category'] }}</span>
    </div>

    <div class="content" v-html="article['content']"></div>
  </template>
</div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'index',

    data(){
      return {
        article: null,
        id:1
      }
    },
    created(){
      this.id = this.$route.params.id;
      this.getArticle(this.id)
    },
    computed: {
      ...mapGetters(['uid'])
    },
    methods: {
      getArticle(id){
        this.axios.get('/articles/'+id).then(res =>{
          this.article = res.data.result
          this.$Progress.finish()
        }).catch(console.error)

      },
      destroy(){
        this.axios.post('/articles/'+id, null).then(res =>{
          this.$message({type:'success', message: '删除成功'});
          this.$router.replace({path:'/article?type=all'});
        }).catch(console.error)
      }

    }
  }
</script>

<style scoped>

</style>
