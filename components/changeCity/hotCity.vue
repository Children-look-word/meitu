<template>
  <div class="m-hcity">
    <dl>
      <dt>热门城市：</dt>
      <dd v-for="item in list" :key="item.id">
        {{ item }}
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:['北京','上海','广州','深圳','天津','西安','重庆','杭州','武汉','南京','成都','苏州']
    }
  }
}
</script>

<style lang="scss">
 @import "@/assets/css/changecity/hot.scss"
</style>
