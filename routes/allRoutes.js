const express = require('express')
const router = express.Router()
const User = require("../models/CustomerSchema");
var moment = require('moment');
const usercontrollers  = require("../controllers/userControllers")


router.get("/", usercontrollers.user_index_get);
  
  router.get("/view/:id",usercontrollers.user_view_get);
  
  router.get("/edit/:id", usercontrollers.user_edit_get);
  
  router.put("/edit/:id", usercontrollers.user_edit_put);
  
  router.post("/search", usercontrollers.user_search_post);
  
  router.delete("/edit/:id" , usercontrollers.user_edit_delete)

module.exports = router