//注册页面组件
<template>
  <div class="page-register">
    <article class="header">
      <header>
        <!-- 美团logo -->
        <a href="/" class="site-logo"></a>
        <!-- 登录按钮 -->
        <span class="login">
          <em class="bold">已有美团账号</em>
          <a href="/login">
            <el-button type="primary" size="smal">登录</el-button>
          </a>
        </span>
      </header>
    </article>
    <section>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="昵称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
          <el-button size="mini" round @click="qqemail">发送验证码</el-button>
          <span class="status">{{ statusMsg }}</span>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="ruleForm.code" maxlength="4"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="psd">
          <el-input v-model="ruleForm.psd" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="cpsd">
          <el-input v-model="ruleForm.cpsd" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register">同意以下协议并注册</el-button>
          <div class="error">{{ error }}</div>
        </el-form-item>
        <el-form-item>
          <a class="f1" href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
export default {
  data() {
    return {
      statusMsg: '',
      error: '',
      ruleForm: {
        name: '',
        email: '',
        code: '',
        psd: '',
        cpsd: ''
      },
      // 自定义校验规则  require是否必填 没填 会提示message  trigger执行元素的事件 blur失去焦点事件
      rules: {
        name: [
          {
            required: true,
            type: 'string',
            message: '请输入昵称',
            trigger: 'blur'
          }
        ],
        email: [
          {
            required: true,
            type: 'email',
            message: '请输入邮箱',
            trigger: 'blur'
          }
        ],
        psd: [
          {
            required: true,
            message: '创建你的密码',
            trigger: 'blur'
          }
        ],
        cpsd: [
          {
            required: true,
            message: '确认你的密码',
            trigger: 'blur'
          },
          {
            validator: (rule, value, callback) => {
              //   如果输入为空
              if (value === '') {
                callback(new Error('请输入你的密码'))
              } else if (value !== this.ruleForm.psd) {
                //如果输入密码与第一次不一样
                callback(new Error('输入的密码与前面密码不一致'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    qqemail: function() {
      const self = this
      let namePass
      let emailPass
      if (self.timerid) {
        return false
      }
      this.$refs['ruleForm'].validateField('name', valid => {
        namePass = valid
      })
      self.statusMsg = ''
      if (namePass) {
        return false
      }
      this.$refs['ruleForm'].validateField('email', valid => {
        emailPass = valid
      })
      if (!namePass && !emailPass) {
        self.$axios.post('/users/verify', {
            username: encodeURIComponent(self.ruleForm.name),
            email: self.ruleForm.email
          }).then(({ status, data }) => {
            if (status === 200 && data && data.code === 0) {
              let count = 60
              self.statusMsg = `验证码已发送,剩余${count--}秒`
              self.timerid = setInterval(function() {
                self.statusMsg = `验证码已发送,剩余${count--}秒`
                if (count === 0) {
                  clearInterval(self.timerid)
                  self.statusMsg=''
                }
              }, 1000)
            } else {
              self.statusMsg = data.msg
            }
          })
      }
    },
    register: function() {
      let self = this
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          self.$axios.post('/users/signup', {
              username: window.encodeURIComponent(self.ruleForm.name),
              password: CryptoJS.MD5(self.ruleForm.psd).toString(),
              email: self.ruleForm.email,
              code: self.ruleForm.code
            }).then(({ status, data }) => {
              if (status === 200) {
                if (data && data.code === 0) {
                  location.href = '/login'
                } else {
                  self.error = data.msg
                }
              } else {
                self.error = `服务器出错，错误码:${status}`
              }
              setTimeout(function() {
                self.error = ''
              }, 1500)
            })
        }
      })
    }
  },
  layout: 'blank'
}
</script>

<style lang="scss">
@import '@/assets/css/register/index.scss';
</style>