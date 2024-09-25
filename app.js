const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
const Article = require('./models/mydataSchema');

app.get('/', (req, res) => {
  res.sendFile("./views/home.html" , {root: __dirname})
})

mongoose.connect("mongodb+srv://nodelevel1:khtWoL07wve7w1ol@cluster0.g0u1j.mongodb.net/Mohammed*****Ali?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
})
.catch((err) => {
  console.log(err)
})

app.post("/", (req, res)=>{
  console.log(req.body)
  const newArticle = new Article(req.body);
  newArticle.save().then(() => {
    res.redirect('/')
  }).catch((err)=>{
    console.log(err)
  })
 
})