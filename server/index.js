const express=require("express")
const app= express()
const mongoose=require("mongoose")

const Userroute=require("./router/userroute")
const cors=require("cors")

const bodyparser=require("body-parser");

const dotenv=require("dotenv")

let PORT=4000;


//db connection 
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD ;
const connection=require("./dbconnection/db")

connection(username,password);

app.use(cors())


app.use(express.json());
app.use(bodyparser.json({extended:true}));
app.use(bodyparser.urlencoded({extended:true}))

app.use("/", Userroute);



app.listen(PORT,()=>{
    console.log(`server listen at ${PORT}`)
})