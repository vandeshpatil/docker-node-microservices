var express = require('express');

var app = express();

app.get('/',(req,res)=>{
    res.send("Hello from order service aaa ss")
})
app.get('/user',(req,res)=>{
    res.send("Hello from order service /user")
})


app.listen(4000,()=>console.log('Order seervice started on 4000 port'));