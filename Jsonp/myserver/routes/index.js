var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getJsonp',(req,res)=>{
  
  res.jsonp({
    data:"一些信息",
    msg:"吃饭睡觉打代码",
    code:200
  })
});
router.get("/getJson",(req,res)=>{

  
  res.header("Access-Control-Allow-Origin", "http://localhost:8080") //cors简单请求解决跨域

  res.json({
    data: "一些信息",
    msg: "吃饭睡觉打代码",
    code: 200
  })
}),
router.post("/noSimple",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "http://localhost:8080")
  res.json({
    data: "一些信息",
    msg: "吃饭睡觉打代码",
    code: 200
  })
})

module.exports = router;
