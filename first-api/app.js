const express = require("express");



const app = express();

app.get("/", (req, res) => {
    res.send("welcome to home page");
});

app.listen(2345, function(){
    console.log("Listening on Port 2345");
})