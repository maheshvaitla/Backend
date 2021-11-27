const express = require("express");
const users = require("./users.json")

const app = express();

const authenticate = (req , res , next)=>{
    console.log("authenticate");
    next();
}

const authorize = (req , res , next )=>{
    console.log("authorize");
    next();
}



app.get("/users", (req,res)=>{
    res.send(users)
})

app.post("/posts",authorize, authenticate,(req,res)=>{
    
    res.send("from inside post");
})

app.listen(3456, ()=>{
    console.log("port running 3456")
})