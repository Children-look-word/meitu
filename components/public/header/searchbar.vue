<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <!-- focus 获取焦点事件  blur 失去焦点事件 input 监听元素改变事件 -->
          <el-input
            v-model="search"
            placeholder="输入你想知道滴滴"
            @focus="focus"
            @blur="blur"
            @input="input"
          ></el-input>
          <button class="el-button el-button--primary">
            <i class="el-icon-search"/>
          </button>
          <dl class="hotPlace" v-show="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in $store.state.home.hotPlace.slice(0,5)" :key="index">{{ item.name }}</dd>
          </dl>
          <dl class="searchList" v-show="isSearchList">
            <dd v-for="(item,index) in searchList" :key="index">{{ item.name }}</dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#"  v-for="(item,index) in $store.state.home.hotPlace.slice(0,5)" :key="index">{{ item.name }}</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">名宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">商家入驻</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">美团公益</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="5" class="right">
        <ul class="security">
          <li>
            <i class="refund"/>
            <p class="txt">随时退</p>
          </li>
          <li>
            <i class="single"/>
            <p class="txt">不满意免单</p>
          </li>
          <li>
            <i class="overdue"/>
            <p class="txt">过期退</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      search: '',
      focuss: false,
      hotPlace: [],
      searchList: []
    }
  },
  computed: {
    //计算属性 显示列表选项
    isHotPlace() {
      return this.focuss && !this.search //没输入内容 显示 热门搜索
    },
    isSearchList() {
      return this.focuss && this.search //输入内容显示输入提示
    }
  },
  methods: {
    focus() {
      //获取焦点显示 热门搜索
      this.focuss = true
    },
    blur() {
      // setTimeout 事件执行一次
      setTimeout(() => {
        this.focuss = false
      }, 200)
    },
    input: _.debounce(async function() {
      let self = this
      self.searchList = []
      let {status, data: { top }} = await self.$axios.get('/search/top', {
        params: {
          input: self.search
        }
      })
      self.searchList = top
    }, 300)
  }
}
</script>
<style lang="scss">
// @import "@/assets/css/public/header/search.scss";
</style>
