const express =require("express");

const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect(" mongodb://127.0.0.1:27017/test");
}

const usersSchema = new  mongoose.Schema({
    first_name : {type: String, required :true},
    last_name: {type:String,required:false},
    email:{type:String, required:true, unique:true},
    gender:{type:String,required:false,default:"Male"},
    age:{type:Number,required:true}
},{
    versionKey:false,
    timestamps:true,
}
);

const User =mongoose.model("user", usersSchema);

const app = express()

app.use(express.json());


app.post("/users", async (req,res) =>{
    try {
        const user=await User.create(req.body);
        return res.status(201).send(user);
    }catch (e){
        return res.status(500).json({message : e.message});
    }
});

app.get("/users", async (req,res)=>{
    try {
        const users = await User.find().lean().exec()
        return res.send({users})
    } catch(e){
        return res.status(500).json({message : e.message});
    }
});

app.get("/users/:id", async (req,res) =>{
    try {
        const users =await User.findById(req.params.id).lean().exec();
        return res.send({users});
    } catch(e){
        return res.status(500).json({message :e.message});
    }
})

app.patch("/users/:id", async (req,res) =>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body,{new :true});
        return res.status(201).send(user);

    } catch (e){
        return res.status(500).json({message :e.message});
    }
})


app.delete("/users/:id", async (req,res) =>{
    try { 
        const user = await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(user);
    } catch {

        return res.status(500).json({message :e.message});

    }
})










app.listen(2345, async function (){
    await connect();
    console.log("Port running 2345")
});