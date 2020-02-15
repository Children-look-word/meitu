//搜索·接口
import Router from 'koa-router'
import axios from './utils/axios'
import Poi from '../dbs/models/poi'


let router = new Router({ prefix: '/search' })

//获取搜索提示接口
router.get('/top', async (ctx) => {
  try {
    let top = await Poi.find({
      'name': new RegExp(ctx.query.input)
    })
    ctx.body = {
      code:0,
      top: top.map(item => {
        return {
          name: item.name,
          type: item.type
        }
      }),
      type: top.length? top[0].type :''
    }
  } catch (e) {
    ctx.body = {
      code:-1,
      top:[]
    }
  }
})

//获取推荐接口
router.get('/hotPlace',async (ctx) => {
    try {
    let result = await Poi.find({
      type: ctx.query.type || '丽人'
    }).limit(10)
  
    ctx.body = {
      code: 0,
      result: result.map(item => {
        return {
          name: item.name,
          type: item.type
        }
      })
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      result: []
    }
  }
})



export default router