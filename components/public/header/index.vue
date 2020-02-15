//头部组件
<template>
    <div class="m-header">
        <el-row>
            <el-col>
                <topbar/>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <searchbar/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
//导入头部 登录 位置 的总组件
import topbar from './topbar.vue';
//导入搜索栏组件
import searchbar from './searchbar.vue';
export default {
    components:{
        topbar,
        searchbar
    }
}
</script>
<style lang="scss">
    @import "@/assets/css/public/header/index.scss";
</style>
