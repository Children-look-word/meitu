export default {
  //mongodb配置文件 27017mongodb 固定端口号 student 存储的数据名
  dbs: 'mongodb://127.0.0.1:27017/student',
  //redis 配置文件
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379
    }
  },
  //qq邮箱配置
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return '934663813@qq.com'
    },
    get pass() {
      return 'lwfviwxakajhbcca'
    },
    get code() {
      return () => {
        //返回的邮箱验证码  随机获取4个数
        return Math.random().toString(16).slice(2, 6).toUpperCase()
      }
    },
    //设置验证码的期限 一分钟
    get expire() {
      return () => {
        return new Date().getTime() + 60 * 60 * 1000
      }
    }
  }
}
