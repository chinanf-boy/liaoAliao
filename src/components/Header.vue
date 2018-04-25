<template>
  <div class="container">
        <el-menu :router="true" :default-active="active" class="el-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item class="logo" index="/">永🌟星</el-menu-item>
      <el-menu-item index="/article?type=all"><i class="fa fa-flag" aria-hidden="true"></i> 探索</el-menu-item>

         <template v-if="user">
          <li @click="heandleExit" class="el-menu-item right"><i class="fa fa-sign-out" aria-hidden="true"></i> 注销</li>
          <el-submenu index="5" class="right">
            <span slot="title"> {{ user.name }} </span>
            <el-menu-item index="/article?type=me">我的文章</el-menu-item>
            <el-menu-item index="/articles/create">发布文章</el-menu-item>
            <el-menu-item index="/follower">我的follower</el-menu-item>
            <el-menu-item index="/followee">我的关注</el-menu-item>

            <el-menu-item index="/message">消息</el-menu-item>
            <el-menu-item index="me" :route="{ name:'User', params:{ id : user.uid }}">我的主页</el-menu-item>

          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item index="/signUp" class="right"><i class="fa fa-user-o" aria-hidden="true"></i> 注册</el-menu-item>
          <el-menu-item index="/signIn" class="right"><i class="fa fa-key" aria-hidden="true"></i> 登陆</el-menu-item>
        </template>

    </el-menu>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

  export default {

  name: 'Header',
  data() {
    return {
      active: '/'
    };
  },
  created(){
  this.active = this.$route.path; // 解决刷新不高亮
  this.$router.afterEach((to,from) => {
    this.active = to.path; // 解决编程式切换路由不高亮
  });
},
computed: mapState(['user']),

methods: {
    handleSelect(key, keyPath) {
     console.log(key, keyPath);
    },
    ...mapActions(['exit']),
    heandleExit(){
      this.exit();
      this.$message.success('成功退出');
    }
}
  }
</script>

<style scoped>
 .container{
    padding: 0 10%;
    background: #eef1f6;
  }

  .right{
    float: right;
  }

  .logo{
    margin-left: 0;
    font-size: 25px;
    font-weight: 100;
    background: #20a0ff;
    color: #fff;
  }

  .logo:hover{
    background: #20a0ff;
  }
</style>
