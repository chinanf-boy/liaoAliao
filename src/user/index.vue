<template>
  <div class="container" v-if="current_user">
    <h3>{{ current_user['name'] }}</h3>

    <hr>
    <div class="oprator" v-if="user">
      <button v-if="user.uid != current_user.uid" @click="toggleFollow">{{ followed? '取消关注':'关注' }}该用户</button>
      <button v-if="user.uid != current_user.uid" @click="dialogFormVisible = true">发送私信</button>
    </div>

    <el-dialog title="发送私信给该用户" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="form" label-width="80px" label-position="top" :rules="rules">
        <el-form-item label="私信内容" prop="msg">
          <el-input type="textarea" v-model="form.msg"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary"  @click="sendMsg">确 定</el-button>
      </div>
    </el-dialog>

    <ul>
      <li v-for="article in articles" :key="article.id"><router-link :to="{ name: 'ArticleShow', params: {id: article.id} }">{{ article['title'] }}</router-link></li>
    </ul>

  </div>
<span v-else> loading </span>
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
          this.$sotre.commit('setFollowed', followArray)
        }).catch(console.error);

        // 减粉丝
        this.axios.get(this.current_user.name+this.current_user.pwd+'/follower').then(res =>{
          let followers = res.data.result || []
          followers = followers.filter(e =>e !== this.user.uid)
          this.axios.post(this.current_user.name+this.current_user.pwd+'/follower', followers).then(() => {

          }).catch(console.error);
        }).catch(console.error);

      }else{
        // 关注
        !followArray.includes(uid) && followArray.push(uid)
        this.axios.post(this.user.name+this.user.pwd+'/followed', followArray).then(() => {
          this.followed = true;
          this.$message({type:'success', message: '关注成功'});
          this.$sotre.commit('setFollowed', followArray)

        }).catch(console.error);

          // 加粉丝
        this.axios.get(this.current_user.name+this.current_user.pwd+'/follower').then(res =>{

          let followers = res.data.result || []

           followers.push(this.user.uid)

          this.axios.post(this.current_user.name+this.current_user.pwd+'/follower', followers).then(() => {

          }).catch(console.error);
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
    },
    sendMsg(){
      if (!this.form.msg) {
        this.$message.error("信息不能为空");
        return;
      }

      let { uid, name, pwd } = this.current_user

      let toUid = uid
      let toM = name+pwd
      let formUid = this.user.uid

      let message = {};

      let mTime = new Date()

      message['id'] = mTime.getTime()
      message['time'] = mTime.toLocaleDateString() +' '+ mTime.toLocaleTimeString()
      message['content'] = this.form.msg
      message['to'] = { uid:toUid, name}
      message['form'] = { uid:formUid, name:this.user.name}

      this.axios.post(toM+'/messages/'+formUid+'/'+mTime.getTime(), message).then((status) => {
          if(status.data.ok){
            this.dialogFormVisible = false;
            this.$message({message:'发送私信成功！', type:'success'});
          }

          // let formM = this.user.name + this.user.pwd

          // this.axios.post(formM+'/messages/'+toUid+'/'+mTime.getTime(), message).then((status) => {
          //     if(status.date.ok){
          //       this.dialogFormVisible = false;
          //       this.$message({message:'发送私信成功！', type:'success'});
          //     }

          // },(err) =>{
          //   this.$message.error(err);
          // })

      },(err) =>{
        this.$message.error(err);
      })

    }
  }
  }
</script>

<style scoped>

</style>
