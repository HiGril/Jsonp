<template>
  <div>
    <!-- <ul>
      <li> -->
        <!-- <router-link to="/">首页</router-link> -->
        <!-- <router-link :to="{name:'home'}">首页</router-link>
      </li>
      <li> -->
        <!-- <router-link to="/about/998">详情页</router-link> -->
        <!-- <router-link :to="{name:'about',params:{id:'我叫参数'}}">详情页</router-link>
      </li>
      <li>
        <router-link :to="{name:'login'}">登录</router-link>
      </li>
    </ul> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
