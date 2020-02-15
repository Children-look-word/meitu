//主页面

<template>
  <el-container class="layout-default">
    <!-- 页面头部 -->
    <el-header height="197px">
      <myheader/>
    </el-header>

    <!-- 页面内容区域 -->
    <el-main>
      <nuxt/>
    </el-main>

    
    <!-- 页面尾部 -->
    <el-footer style="height:100%">
      <myfooter/>
    </el-footer>
  </el-container>
</template>

<script>
// 引入头部组件
import myheader from '@/components/public/header/index.vue';
import myfooter from '@/components/public/footer/index.vue';
export default {
  components:{
    myheader,
    myfooter
  }
}
</script>
