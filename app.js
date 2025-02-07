const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");

const MONGO_URL = ("mongodb://127.0.0.1:27017/ecommerece");

main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res)=>{
    res.send("hi,i am root")
});


app.get("/ecommerce/home",(req,res)=>{
   res.render("./listings/index.ejs");
   
});

app.get("/ecommerce/mobileSection",(req,res)=>{
    res.render("./listings/mobileSection.ejs");
});

app.get("/ecommerce/electronicSection",(req,res)=>{
    res.render("./listings/electronicSection.ejs");
});

 

app.listen(8080,()=>{
    console.log("server is listing to port 8080");
});