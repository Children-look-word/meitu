
// 页面的头部组件 显示 位置 登录 的组件
<template>
  <el-row :gutter="0" class="m-header">
    <el-col :span="5">
      <geo/>
    </el-col>
    <el-col :span="5">
      <user/>
    </el-col>
    <el-col :span="14">
      <navbar/>
    </el-col>
  </el-row>
</template>

<script>
//导入 位置组件 登录 信息组件
import geo from './geo.vue';
import user from './user.vue';
import navbar from './nav.vue';

export default {
    components:{
        geo,
        user,
        navbar
    }
}
</script>

<style lang="scss">
    @import "@/assets/css/public/layout.scss";
</style>
