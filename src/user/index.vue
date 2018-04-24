<template>
  <div class="container" v-if="current_user">
    <h3>{{ current_user['name'] }}</h3>

    <hr>
    <div class="oprator" v-if="user">
      <button v-if="user.uid != current_user.uid" @click="toggleFollow">{{ followed? '取消关注':'关注' }}该用户</button>
    </div>
    <ul>
      <li v-for="article in articles" :key="article.id"><router-link :to="{ name: 'ArticleShow', params: {id: article.id} }">{{ article['title'] }}</router-link></li>
    </ul>

  </div>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    name: 'user',

    data(){
      const id = this.$route.params.id;
      return {
        current_user: null,
        articles: null,
        followed: false,
        id,
        dialogFormVisible: false,
        form: {
          msg: ''
        },
        rules:{
          msg: [
            { required: true, message:'必填项', trigger: 'blur' },
          ]
        }
      }
    },
  computed: mapState(['user']),
  created(){
    this.checkFowlled()
    this.getCurrentUser();
  },
  methods:{
    getCurrentUser(){

    this.$store.dispatch("getCurrentUser", this.id).then(res =>{
        this.current_user = res.data.result
        this.getArticles(this.current_user);
    })

    },
    getArticles(user){

      this.axios.get(user.name+user.pwd).then(res =>{
      this.articles = res.data.result.articles;
      this.$Progress.finish();
      }).catch(error => {
            this.$message.error(error.message)
      })

    },
    toggleFollow(){
      const uid = this.id
      let followArray = this.user.followed || []

      if(this.followed){
        // 取消关注
        followArray = followArray.filter(e =>e!==uid)
        this.axios.post(this.user.name+this.user.pwd+'/followed', followArray).then(() => {
          this.followed = false;
          this.$message({type:'success', message: '取消关注成功'});
        }).catch(console.error);
      }else{
        // 关注
        followArray.push(uid)
        this.axios.post(this.user.name+this.user.pwd+'/followed', followArray).then(() => {
          this.followed = true;
          this.$message({type:'success', message: '关注成功'});
        }).catch(console.error);
      }
    },
    checkFowlled(){
      let fd = this.user.followed || []
      this.axios.get(this.user.name+this.user.pwd+'/followed').then(
        res =>{
          fd = res.data.result
          this.followed = fd.includes(this.id)
        }
      )
    }
  }
  }
</script>

<style scoped>

</style>
