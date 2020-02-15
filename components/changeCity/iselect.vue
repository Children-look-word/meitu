<template>
  <div class="m-iselect">
    <span class="name">按省份选择:</span>
    <el-select v-model="pvalue" placeholder="省份">
      <el-option 
        v-for="item in province" 
        :key="item.value" 
        :label="item.label" 
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="cvalue" :disabled="!city.length" placeholder="城市">
      <el-option 
        v-for="item in city" 
        :key="item.value" 
        :label="item.label" 
        :value="item.value">
      </el-option>
    </el-select>
    <el-autocomplete
      v-model="input"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市中文或拼音"
      @select="handleSelect"
    ></el-autocomplete>
  </div>
</template>

<script>
export default {
  data() {
    return {
      province: [],
      pvalue: '',
      cvalue: '',
      input:'',
      city: []
    }
  },
  // watch:{
  //   pvalue: async function(newPvalue){
  //     let slef = this;
  //     let{status , data:{city}} = await slef.$axios.get(`geo/province/${newPvalue}`);
  //     if(status === 200){
  //       slef.city=city.map(item =>{
  //         return{
  //           value:item.id,
  //           label:item.name
  //         }
  //       })
  //       self.cvalue = ''
  //     }
  //   }
  // },
  mounted:async function () {
    let slef=this;
    let {status,data:{province}} = await slef.$axios.get('/geo/province');
    if(status===200){
      slef.province = province.map(item => {
        return{
          value:item.id,
          label:item.value
        }
      })
    }
  },
  methods:{
    querySearchAsync(){

    },
    handleSelect(){

    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/changecity/iselect.scss"
</style>
