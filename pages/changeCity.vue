<template>
  <div class="page-changeCity">
    <el-row>
      <el-col :span='24'>
        <iselect/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span='24'>
        <Hot/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span='24'>
        <cate/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import iselect from '@/components/changeCity/iselect.vue'
import Hot from '@/components/changeCity/hotCity.vue'
import cate from '@/components/changeCity/category.vue'
export default {
  components:{
    iselect,
    Hot,
    cate
  }
}
</script>

<style lang="scss">

</style>
