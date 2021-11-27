const express = require("express");

const users = require("./users.json")

const app = express();

app.use(express.json());

app
app.get("/user", (req,res)=>{
    res.send( { users});
});

app.post("/", (req,res)=>{
    const newUsers = [...users, req.body];

    res.send(newUsers);
})

app.patch("/:email", (req,res)=>{
    const newUsers = users.map((user) =>{
        if(req.params.email===user.email){
        return req.body
        }
        return user
    });
    res.send(newUsers);
})


app.delete("/:email", (req,res)=>{
    const newUsers = users.filter((user) => user.email !== req.params.email);

    res.send(newUsers)
})

app.get("/:email", (req,res)=>{
    const newUsers = users.filter((user) => user.email === req.params.email);
    res.send(newUsers);
})


app.listen(2345, function (){
console.log("Listening on 2345")
})