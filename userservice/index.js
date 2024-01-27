require('./db/mongoose');
var express = require('express');
const Blog = require('./model/Blog');
const app = express();
app.use(express.json());

app.get('/', async function (req, res) {
res.status(400).send({"message":"Welocme to Userservice","page":"Home page"});
   
});

app.post('/save',(req, res)=>{
    const blog = new Blog(req.body);
    blog.save().then(savedDoc => {
       res.send(savedDoc);
      }).catch((e)=>{
        res.status(500).send(e)
      });
})
app.delete('/deleteAllBlogs',(req, res)=>{
    Blog.deleteMany().then((result)=>{
        res.send(result)
    }).catch((e)=>{
        res.send({"error":e})
    })
})

app.use('/user',(req,res)=>{
    res.send('User service /user service')
})
app.use('/test',(req,res)=>{
    res.send('Test')
})
app.use('/api',(req,res)=>{
    res.send('API')
})

app.listen(3000);