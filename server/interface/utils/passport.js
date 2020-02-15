import passport from 'koa-passport'
import LocalStrategy from 'passport-local'
import UserModel from '../../dbs/models/users.js'

passport.use(
  new LocalStrategy(async function(username, password, done) {
    let where = {
      username
    }
    let result = await UserModel.findOne(where)
    if (result != null) {
      if (result.password === password) {
        return done(null, result)
      } else {
        return done(null, false, '密码错误')
      }
    } else {
      return done(null, false, '用户不存在')
    }
  })
)
// 将用户信息序列化后存进 session 里面，一般需要精简，只保存个别字段
passport.serializeUser(function(user, done) {
  done(null, user)
})

// 反序列化后把用户信息从 session 中取出来，反查数据库拿到完整信息
passport.deserializeUser(function(user, done) {
  return done(null, user)
})

export default passport
