const { model } = require("mongoose");
const User = require("../models/CustomerSchema");
var moment = require('moment');


const user_index_get = (req, res) => {
    User.find()
      .then((result) => {
        res.render("index", { arr: result , moment: moment });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const user_view_get =  (req, res) => {
    User.findById(req.params.id)
      .then((result) => {
        res.render("user/view" , {obj:result , moment:moment});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const user_edit_get = (req, res) => {
    User.findById(req.params.id)
      .then((result) => {
        res.render("user/edit" , {obj:result , moment:moment});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const user_edit_put =  (req, res) => {
    User.updateOne({_id :req.params.id}  , req.body).then((result) => {
      res.redirect("/")
    }).catch((err) => {
      console.log(err)
    })
  }

  const user_search_post = (req, res) => {
    const searchbox = req.body.searchbox.trim();
     user
       .find({$or: [{firstname: searchbox} , {lastname :searchbox}]})
       .then((result) => {
         console.log(result)
        res.render("user/search" , {arr:result , moment:moment});
       })
       .catch((err) => {
         console.log(err);
       });
   }

   const user_edit_delete = (req, res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(() => {
     res.redirect('/')
   })
   .catch((err) => {
     console.log(err);
   });
    
   }

 module.exports = {user_index_get , user_view_get , user_edit_get ,user_edit_put  ,user_search_post ,user_edit_delete }