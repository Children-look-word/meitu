<template>
  <section class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd :class="{active:kind==='all'}" kind="all" keyword="景点">全部</dd>
      <dd :class="{active:kind==='part'}" kind="part" keyword="美食">约会聚餐</dd>
      <dd :class="{active:kind==='spa'}" kind="spa" keyword="丽人">丽人SPA</dd>
      <dd :class="{active:kind==='movie'}" kind="movie" keyword="电影">电影演出</dd>
      <dd :class="{active:kind==='travel'}" kind="travel" keyword="旅游">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li v-for="item in cur" :key="item.title">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.img" class="image">
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos">
              <span>{{ item.pos }}</span>
            </li>
            <li class="price">
              ￥<em>{{ item.price }}</em><del class="old-price">{{ item.price1 }}</del><span class="current-price-type">{{ item.peopre }}</span><span class="current-price-type">{{ item.qiu }}</span>
            </li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data: () => {
    return {
      kind: 'all',
      list: {
        all: [
          {
            title: '8090串店（望京店）',
            pos: '烧烤2人餐，提供免费WiFi',
            price: '131',
            price1:'门市价¥164',
            img:
              'https://p0.meituan.net/deal/275fa42ac03ea22ebbbb5ed43fcec2cf118722.jpg@368w_208h_1e_1c'
          },
          {
            title: 'COSTA COFFEE（新国展店）',
            pos: '玫瑰黑巧茶拿铁1份',
            price: '12',
            price1:'门市价¥14',
            img:
              'https://p0.meituan.net/merchantpic/b5bc200ff96056aa58e2441c37b0097d58192.jpg@368w_208h_1e_1c'
          },
          {
            title: '溢香柴锅炖活鱼灶台鱼（榴乡桥店）',
            pos: '柴锅炖活鱼6人餐',
            price: '288',
            price1:'门市价¥304',
            img:
              'https://p1.meituan.net/deal/fc1b93f81f06d47d7e0a24174b670e0f253238.jpg@368w_208h_1e_1c'
          },
          {
            title: 'DQ（新世界店）',
            pos: '前程似锦（小）1份',
            price: '158',
            price1:'门市价¥164',
            img:
              'https://p0.meituan.net/scarlett/97f449323b90b21ba5203be2f8fceefc413837.jpg@368w_208h_1e_1c'
          },
          {
            title: 'COSTA COFFEE（东方新天地店）',
            pos: '巧克力酥卷小美式，建议单人使用',
            price: '18',
            price1:'门市价¥24',
            img:
              'https://p0.meituan.net/merchantpic/b5bc200ff96056aa58e2441c37b0097d58192.jpg@368w_208h_1e_1c'
          },
          {
            title: 'COSTA COFFEE（王府井）',
            pos: '拿铁（中杯）+（茶点点心）1份',
            price: '18',
            price1:'门市价¥24',
            img:
              'https://p0.meituan.net/merchantpic/b5bc200ff96056aa58e2441c37b0097d58192.jpg@368w_208h_1e_1c'
          }
        ],
        part: [
          {
            title: '金茂万丽酒店·万丽轩',
            pos: '万丽轩主厨推荐六人套餐，包间免费',
            price: '1280',
            price1:'门市价¥2431',
            img:
              'https://p0.meituan.net/mogu/dc1d9d6166f95d474318ed3525125f9d100723.jpg@368w_208h_1e_1c'
          },
          {
            title: '鄂尔多斯艾力餐厅（金宝街店）',
            pos: '双人套餐，提供免费WiFi',
            price: '198',
            price1:'门市价¥306',
            img:
              'https://p0.meituan.net/deal/fe4e112f0d1ee159bcaf495ff0928338237943.jpg@368w_208h_1e_1c'
          },
          {
            title: '峨嵋酒家（王府井店）',
            pos: '店内推荐三人A餐',
            price: '172',
            price1:'门市价¥191',
            img:
              'https://p1.meituan.net/msmerchant/1c448ca93f236d37fede7cc7029a19bd91074.jpg@368w_208h_1e_1c'
          },
          {
            title: '香闺串香坞（西单店）',
            pos: '精品四人套餐B，提供免费WiFi',
            price: '324',
            price1:'门市价¥385',
            img:
              'https://p0.meituan.net/msmerchant/927a09e01cdb5c49031710fe905c7a87792121.png@368w_208h_1e_1c'
          },
          {
            title: '京喜多屋亚洲菜（崇文门新侨店）',
            pos: '大酱海鲜锅双人餐',
            price: '169',
            price1:'门市价¥630',
            img:
              'https://p1.meituan.net/msmerchant/94f854595185f510523240fe60c2dab627595.jpg@368w_208h_1e_1c'
          },
          {
            title: '温鼎府（潮汕牛肉火锅）',
            pos: '双人火锅套餐，提供免费WiFi',
            price: '498',
            price1:'门市价¥721.1',
            img:
              'https://p0.meituan.net/dpmerchantalbum/c65bedf0695389bc2143e91b7646d45d373987.jpg@368w_208h_1e_1c'
          }
        ],
        spa: [
          {
            title: '再清椿美容（建国门一店）',
            pos: '再清椿美容（建国门一店）',
            price: '716',
            peopre:'/人均',
            img:
              'https://p1.meituan.net/wedding/f54d6b7cfa0dd26559a2e5ef5100f59d88168.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c'
          },
          {
            title: 'SOphoto日式美甲美睫（新世界百货店）',
            pos: 'SOphoto日式美甲美睫（新世界百货店）',
            price: '136',
            peopre:'/人均',
            img:
              'https://p0.meituan.net/merchantpic/17ac204f48e19639c3c48884aa5f38e5118494.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c'
          },
          {
            title: 'A MORE无痕接发专业烫染',
            pos: 'A MORE无痕接发专业烫染',
            price: '667',
            peopre:'/人均',
            img:
              'https://p0.meituan.net/shopmainpic/97ec27a327ee2fa8cb96f00cf8d3f24e42329.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c'
          },
          {
            title: '阿汤一族美发造型',
            pos: '阿汤一族美发造型',
            price: '76',
            peopre:'/人均',
            img:
              'https://p0.meituan.net/merchantpic/23361032b03b77963a0d909589e049f8202913.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c'
          },
          {
            title: '子时·TATTOO 纹身',
            pos: '子时·TATTOO 纹身',
            price: '868',
            peopre:'/人均',
            img:
              'https://p1.meituan.net/wedding/8f9b0c8dac41fe65ad9d8a0a10455f7893928.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c'
          },
          {
            title: '首尔秀1982韩国私人订制',
            pos: '首尔秀1982韩国私人订制',
            price: '270',
            peopre:'/人均',
            img:
              'https://p1.meituan.net/merchantpic/d045052cd085c9ad192c7a85bf8c4b3628508.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c'
          }
        ],
        movie: [
          {
            title: 'CGV影城(清河店)',
            pos: '免押金,可停车,儿童票,60帧厅',
            price: '58.9',
            peopre:'/人均',
            img:
              'https://p0.meituan.net/deal/201212/14/194125_5359777.jpg@368w_208h_1e_1c'
          },
          {
            title: '广安门电影院',
            pos: '免押金,可停车,儿童票,可刷卡,有WIFI,休息区,杜比全景声厅',
            price: '19.9',
            peopre:'/人均',
            img:
              'https://p1.meituan.net/deal/201203/31/002.jpg@368w_208h_1e_1c'
          },
          {
            title: '金逸影城(荟聚IMAX店)',
            pos: '免押金,可停车,有情侣座,儿童票,可刷卡,休息区,IMAX厅,60帧厅',
            price: '19.9',
            peopre:'/人均',
            img:
              'https://p1.meituan.net/deal/bd9a5c59a6646c683b214139056b7fe1332966.jpg@368w_208h_1e_1c'
          },
          {
            title: '耀莱成龙国际影城(五棵松店)',
            pos: '免押金,儿童票,杜比全景声厅',
            price: '42.9',
            peopre:'/人均',
            img:
              'https://p0.meituan.net/deal/201108/05/3_0805163047.jpg@368w_208h_1e_1c'
          },
          {
            title: '百老汇影城(apm购物中心店)',
            pos: '免押金,可停车,儿童票,可刷卡,RealD厅,60帧厅',
            price: '28.9',
            peopre:'/人均',
            img:
              'https://p0.meituan.net/deal/__42960313__1244354.jpg@368w_208h_1e_1c'
          },
          {
            title: 'SFC上影影城(北京房山店)',
            pos: '免押金,儿童票,60帧厅',
            price: '19.9',
            peopre:'/人均',
            img:
              'https://p0.meituan.net/poi/4daaa6a4256673b7d2025edfe6b9f9d7237205.jpg@368w_208h_1e_1c'
          }
        ],
        travel: [
          {
            title: '静之湖度假酒店',
            pos: '酒店套餐',
            price: '630',
            qiu:'/起',
            img:
              'https://p0.meituan.net/dnaimgdark/e46ab9b83def1a79f0705c5025be03c15387402.jpg@368w_208h_1e_1c'
          },
          {
            title: '北京九华山庄国际会展大酒店',
            pos: '酒店套餐',
            price: '600',
            qiu:'/起',
            img:
              'https://p0.meituan.net/dnaimgdark/ee4f9274d0e9eaff90596d3852b7ffe32478600.jpg@368w_208h_1e_1c'
          },
          {
            title: '北京东交民巷饭店',
            pos: '酒店套餐',
            price: '652',
            qiu:'/起',
            img:
              'https://p1.meituan.net/tdchotel/d6840b8a2d2118bb78e1bbc904c7f2052769466.jpg@368w_208h_1e_1c'
          },
          {
            title: '北京君和泰酒店',
            pos: '酒店套餐',
            price: '376',
            qiu:'/起',
            img:
              'https://p1.meituan.net/dnaimgdark/8667a5b2a654cfb844fb3cd0554e3c536270149.jpg@368w_208h_1e_1c'
          },
          {
            title: '维也纳国际酒店',
            pos: '酒店套餐',
            price: '436',
            qiu:'/起',
            img:
              'https://p1.meituan.net/tdchotel/65828087a333e1e697d616eabd7efb0c156556.jpg@368w_208h_1e_1c'
          },
          {
            title: '北京南锣鼓巷亚朵酒店',
            pos: '酒店套餐',
            price: '639',
            qiu:'/起',
            img:
              'https://p0.meituan.net/tdchotel/9e9488daeb0544f0610b0e032593f9a82169071.jpg@368w_208h_1e_1c'
          }
        ]
      }
    }
  },
  computed: {
    cur: function() {
      return this.list[this.kind]
    }
  },
  methods: {
    over: async function(e) {
      let dom = e.target;
      let tag = dom.tagName.toLowerCase()
      let self = this
      if (tag === 'dd') {
        this.kind = dom.getAttribute('kind')
      }
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/index/artistic.scss';
</style>
