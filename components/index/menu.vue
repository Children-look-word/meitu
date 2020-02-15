//列表组件
<template>
    <div class="m-menu">
       <dl class="nav"  @mouseleave="mouseLeave">
           <dt>全部分类</dt>
           <dd v-for="(item,index) in $store.state.home.menu" :key="index" @mouseenter="mouseEnter">
               <i :class="item.type"/>{{item.name}}<span class="arrow"></span>
           </dd>
       </dl> 
       <div class="detail" v-if="kind" @mouseenter="sover" @mouseleave="sout">
           <!-- 模块循环 -->
           <template v-for="(item,index) in curdetail.child">
                <h4 :key="index">{{ item.title }}</h4>
                <span v-for="f in item.child" :key="f">
                    {{ f }}
                </span>
           </template>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            kind:'',
            menu:[{
                type:'food',
                name:'美食',
                child:[{
                    title:'美食',
                    child:['代金券','甜点饮品','自助餐','烤鱼','火锅','麻辣香锅']
                }]
            },{
                type:'takeout',
                name:'外卖',
                child:[{
                    title:'外卖',
                    child:['美团外卖']
                }]
            },
            {
                type:'hotel',
                name:'酒店',
                child:[{
                    title:'酒店星级',
                    child:['经济型','舒适/三星','高档/四星','豪华/五星']
                }]
            }
            ]
        }
    },
    computed:{//计算属性
        curdetail(){
            // 判断 返回的类名和当前item.type 的数据 
            return this.$store.state.home.menu.filter(item => item.type===this.kind)[0];
        }
    },
    methods:{
        mouseLeave(){
            this.timer=setTimeout(() => {
                this.kind='';
            },150)
        },
        mouseEnter(e){
            // 鼠标移入 获取到i标签里面的 类名
            this.kind=e.target.querySelector('i').className;
        },
        sover(){
            // 当我鼠标移入 子列表是 直接清除动画 
            clearTimeout(this.timer);
        },
        sout(){
            //移出 再次清空 kind 的值
            this.kind='';
        }
    }
}
</script>

<style lang="scss">

</style>
