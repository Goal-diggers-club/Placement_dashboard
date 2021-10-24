const express= require("express");
const app=express();
const mysql=require("mysql");
const db=mysql.createPool({
    host:"35.200.156.190",
    user:"root",
    password:"Goaldiggers@123#",
    database:"username_login",
});
app.get("/",(req,res)=>{
    const sqlentry="INSERT INTO test_table (id,username) VALUES (6,'Rajat Gaikwad') ;"
    db.query(sqlentry,(err,result)=>{
        res.send("hello this is Gaurang Kumar");
    })
});
app.listen(3001,()=>{
    console.log("running wild");
});
