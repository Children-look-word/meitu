<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <emenu/>
      </el-col>
      <el-col :span="19">
        <life/>
      </el-col>
    </el-row>
    <el-row>
      <artistic/>
    </el-row>
  </div>
</template>

<script>
import emenu from '@/components/index/menu.vue';
import life from '@/components/index/life.vue';
import artistic from '@/components/index/artistic.vue';

export default {
  components: {
    emenu,
    life,
    artistic
  }
}
</script>

<style lang="scss"> 
  @import "@/assets/css/index/index.scss";
</style>



