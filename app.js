const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile("./views/home.html" , {root: __dirname})
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

mongoose.connect("mongodb+srv://nodelevel1:khtWoL07wve7w1ol@cluster0.g0u1j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
})
.catch((err) => {
  console.log(err)
})