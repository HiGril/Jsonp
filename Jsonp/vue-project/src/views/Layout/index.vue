<template>
 <div class="container">
     <div class="header">
         <h1>头部</h1>
     </div>
     <div class="nav">
         <ul>
             <li>
                 <router-link :to="{name:'home1'}">首页</router-link>
             </li>
             <li>
                 <router-link :to="{name:'about1',params:{id:'我叫参数'}}">详情页</router-link>
             </li>
             <li>
                 <router-link :to="{name:'login1'}">登录页</router-link>
             </li>
         </ul>

     </div>
     <div class="main-content">
         <router-view></router-view>
     </div>

 </div>
</template>

<script>
export default {
 data() {
 return {

 }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
.header{
    text-align: center;
    padding-left: 200px;
    background: #3399ff;
}
.nav{
    $width:200px;
    position: fixed;
    width: $width;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 998;
    background-color: #007acc;
    
    li{
        line-height: 50px;
        text-align: center;
        height: 50px;
        width: $width;
    }
    a{
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        font-weight: 700;
    }
    
}
.main-content{
    padding-left: 200px;
}
</style>
