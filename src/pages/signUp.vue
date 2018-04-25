<template>
  <div class="container">
    <h1>注册</h1>

    <div class="from-panel">
      <el-form label-position="top" ref="form" label-width="80px" :rules="rules" :model="user">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="user.name"></el-input>
        </el-form-item>
        <el-form-item label="邮件" prop="email">
          <el-input v-model="user.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input type="password" v-model="user.pwd"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="cpwd">
          <el-input type="password" v-model="user.cpwd"></el-input>
        </el-form-item>

        <div class="oprator">
          <el-button class="submit" type="primary" @click="submitForm('form')">提交</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {

  name: 'signUp',

  data() {

    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.user.cpwd !== '') {
          this.$refs.form.validateField('cpwd');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.user.pwd) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    return {
      labelPosition: 'top',
      user: {
        name: 'yobrave',
        email: '865501259@qq.com',
        pwd: 'yobrave1',
        cpwd: 'yobrave1',
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 7, message: '长度在 3 到 7 个字符之间', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请填入邮箱', trigger: 'blur' },
          { type: 'email', message: '必须是合法的邮箱格式', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '必须填写', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' },
        ],
        cpwd: [
          { required: true, message: '必须填写', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' },
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      let { name, email, pwd } = this.user
      let uid = new Date().getTime()
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios.get(name+pwd).then(res =>{

          if(res.data.result) throw new Error(" 有人啦 , 改改名字")

          this.axios.post(name+pwd,{
            name,
            email,
            pwd,
            uid
          }).then(res =>{
            this.$store.dispatch('login', res.config.data)
            this.$router.go(-1) // 回到上一页
            this.$message.success("注册成功！")
          }).catch(error => {
            this.$message.error(error.message)
          })

          this.axios.post('/'+uid,{
            name,
            email,
            pwd,
            uid
          }).then(res =>{

          }).catch(error => {
            this.$message.error(error.message)
          })

          }).catch(error => {
            this.$message.error(error.message)
          })
        } else {
           this.$message.error('错了哦，您填写的信息有错误，请按照提示修改。');
          return false;
        }
      });
    },
  }
};
</script>

<style lang="css" scoped>
.container{
  padding: 60px 10%;
  background: #fafafa;
  height: calc(100vh - 180px);
}

h1{
  text-align: center;
  font-weight: 100;
  font-size: 40px;
  margin-bottom: 35px;
}

.from-panel{
  width: 50%;
  margin: 0 auto;
}

.oprator{
  margin-top: 30px;
  text-align: center;
}

</style>
