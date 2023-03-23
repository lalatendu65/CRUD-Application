const mongoose = require("mongoose");

const Connection=async(username,password)=>{

    const URL = `mongodb+srv://${username}:${password}@crud-app.vikknmp.mongodb.net/?retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        });
        console.log("db connected");


    }catch(error){
        console.log(" Error while connecting the database ",error)
    }
}

module.exports=Connection