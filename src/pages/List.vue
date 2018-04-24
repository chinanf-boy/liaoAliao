<template>
  <div class="container">
    <header>
      <h2>{{ title }}</h2>
    </header>
    <section>
      <article v-for="article in articles" :key="article.id">
        <h3>
          <router-link :to="{ name:'ArticleShow', params: { id: article.id }}">{{ article.title }}</router-link>
           <router-link :to="{ name: 'User', params: { id: article.author.uid }}">{{ article.author.name }}</router-link>
        </h3>
      </article>
    </section>
  </div>
</template>

<script>

import { mapState } from 'vuex'

  export default {
    name: "List",
  data () {
    return {
      title: '',
      articles: []
    };
  },
  created(){
      this.match();
  },
  watch: {
    ['$route.query']() {
      console.log('re render');
      this.articles = [];
      this.match();
    }
  },
  computed: mapState(['user']),

  methods: {
    match(){
      let flag = this.$route.query.type || this.$route.query.cid ;

      this.$Progress.start();

      switch(flag){
        case 'me':
          this.getMyArticles("我的文章");
          break;
        case 'all':
          this.getAllArticles("所有文章");
          break;
        default:
          this.getCategoryArticle(flag);
      }
    },
    getAllArticles(str){
      this.axios.get('/').then(res =>{

        let all = [];
        res.data.result.articles && Object.keys(res.data.result.articles).map(e =>{
          all.push(res.data.result.articles[e])
        })

        this.articles = all
        this.title = str
      })
    },
    getCategoryArticle(id){

    },
    getMyArticles(str){
      this.title = str
      this.articles = this.user.articles
    }
}
}
</script>

<style scoped>
h2{
  text-align: center;
}

header{
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 5px;
  padding: 20px;
}
</style>
