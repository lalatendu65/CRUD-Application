const mongoose = require("mongoose");



const Userschema=new mongoose.Schema({
    name:String,
    email:String,
    username:String,
    phone:String

})


module.exports = mongoose.model("User",Userschema)