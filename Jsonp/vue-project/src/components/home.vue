<template>
 <div >
    <h1>我是首页</h1>
    <router-link :to="{path:'/login',query:{userinfo:'name is shanmu'}}">跳转登录</router-link>
    <button @click="handelGetData">发送数据</button>
    <button @click="getJsonp">获得Jsonp数据</button>
    <button @click="noSimple">core非简单解决跨域</button>
 </div>
</template>

<script >
import axios from "axios"
import jsonp from "jsonp"
export default {
 data() {
    return {
    }
 },
 components: {
 },
 methods:{
     handelGetData(){        
         axios.get("http://localhost:3000/getJson").then(res=>{
             console.log("jjjjj")
             console.log(res)
         }).catch(err=>{
             console.log(err)
         })
     },
     getJsonp(){
        let script = document.createElement("script")
        let body = document.body
        script.src = "http://localhost:3000/getJsonp?callback=getData"
        body.appendChild(script)
     },
     noSimple(){
         axios.post("http://localhost:3000/noSimple",{username:"yan"}).then(res=>{
             console.log(res)
         }).catch(err=>{
             console.log(err)
         })

     }
   

 }
}
</script>

<style >
</style>
