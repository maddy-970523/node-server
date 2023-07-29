const express = require("express")
const app = express()

app.listen(3000,()=>{
    console.log('服务端在3000端口下启动成功')
})
app.get('/index',(req,res)=>{
    res.send('内容1111');
});
