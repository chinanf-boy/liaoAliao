<template>
  <div class="container">
    <h2>我的消息</h2>
    <ul v-if="messages.length">
      <li v-for="(message, index) in messages" :key="message.id+message.form.uid" > <router-link :to="{ name: 'User', params: { id: message['form'].uid } }">{{ message['form'].name }}</router-link> 给你发了一条信息
        <p><button @click="destroy(index)">删除</button></p>
        <p>{{ message['content'] }}</p>
      </li>
    </ul>
    <span v-else>没有消息</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {

  name: 'myMessage',

  data () {
    return {
      messages: [],
    }
  },
  created(){
    this.getMessages();
  },
  computed: mapState(['user']),
  methods: {
    getMessages(){

      let { uid, name, pwd} = this.user
      let hash = name+pwd

      this.axios.get(hash+'/messages').then(res =>{
        if(res.data.result){
          let fUids = res.data.result
          Object.keys(fUids).forEach(Uid =>{
            Object.keys(fUids[Uid]).forEach(timeId =>{

              this.messages.push(fUids[Uid][timeId])

              this.$Progress.finish()
            })
          })
        }

      }).catch((err) => {
        this.$message.error(err);
      })
    },
    destroy(index){
      let { uid, name, pwd} = this.user
      let hash = name+pwd
      let { form, id} = this.messages[index]
      console.log(hash+'/messages/'+form.uid+'/'+id)
      this.axios.delete(hash+'/messages/'+form.uid+'/'+id).then((status) => {
        if (status.data.ok) {
          this.messages.splice(index, 1);
          this.$message({ message: '删除成功', type:'success' });
        }
      }).catch(console.error)
    }

  }
};
</script>

<style lang="css" scoped>
</style>
