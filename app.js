const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
const User = require("./models/CustomerSchema");
app.set("view engine", "ejs");
app.use(express.static("public"));
var moment = require('moment');
var methodOverride = require('method-override')
app.use(methodOverride('_method'))

//auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
const user = require("./models/CustomerSchema");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.get("/", (req, res) => {
  User.find()
    .then((result) => {
      res.render("index", { arr: result , moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/user/add.html", (req, res) => {
  res.render("user/add");
});

app.get("/view/:id", (req, res) => {
  User.findById(req.params.id)
    .then((result) => {
      res.render("user/view" , {obj:result , moment:moment});
    })
    .catch((err) => {
      console.log(err);
    });
});


app.get("/edit/:id", (req, res) => {
  User.findById(req.params.id)
    .then((result) => {
      res.render("user/edit" , {obj:result , moment:moment});
    })
    .catch((err) => {
      console.log(err);
    });
});



// app.get("/edit/:id", (req, res) => {
//   res.render("user/edit");
// });

mongoose
  .connect(
    "mongodb+srv://nodelevel1:khtWoL07wve7w1ol@cluster0.g0u1j.mongodb.net/Mohammed*****Ali?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/user/add.html", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });

  // res.redirect("/user/add.html")
});


app.delete("/edit/:id" , (req, res)=>{
  User.findByIdAndDelete(req.params.id)
  .then(() => {
   res.redirect('/')
 })
 .catch((err) => {
   console.log(err);
 });
  
 })