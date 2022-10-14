const express=require("express")
const app=express();
const port=process.env.port|| 4000;
app.listen(port,()=>{
    console.log("ugyuy");
})
app.get('/',(req,res)=>{
    res.send("hello");
})