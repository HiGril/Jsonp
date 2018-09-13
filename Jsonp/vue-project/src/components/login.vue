<template>
 <div >
     <h1>我是注册页面</h1>
     用户名：<input type="text" v-model="username">
     <br>
     密码: <input type="text" v-model="password">
     <button @click="handleSubmit">登录</button>
 </div>
</template>
<script >
import axios from 'axios'

export default {
 data() {
    return {
        username: "",
        password: ""
    }
 },
 methods:{
     handleSubmit(){
         axios.post("http://localhost:3000/login", {
             username: this.username,
             password: this.password
         }).then(res=>{
             console.log(res)
             console.log(res.data.code)
             if(res.data.code == 200){
                 alert("登录成功")
                 this.$router.push('/main')
             }else{
                 alert("登录失败")
             }
         }).catch(err=>{
             console.log(err)
         })
     }
 },
 created() {
     console.log(this.$router)
     console.log(this.$route)
     console.log(this.$route.query)
     console.log(this.$route.params)
 },
}
</script>

<style scoped >
</style>
