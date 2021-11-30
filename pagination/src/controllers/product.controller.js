const express = require("express");

const router = express.Router();

const sendMail = require("../utils/send-mail");

const Product =require("../models/product.models");

router.get("/", async (req,res) =>{
    try{

        const page =+req.query.page || 1;
        const size =+req.query.page || 2;

        const skip =(page-1)*size;

        const totalpages =Math.ceil(( await Product.find().countDocuments())/size);

        const products = await Product.find().skip(skip).limit(size).lean().exec();

    return res.json({products , totalpages});

    } catch(e){
        return res.status(500).json({status : "failed", message : e.message})
    }
    
})



router.post("/", async (req,res) =>{
    try{
        const products = await Product.create(req.body);

        sendMail(
            "a@a.com",
            "b@b.com",
            `Created a product with name ${req.body.name}`,
            "some description about the product",
            "<h1>some description about the product</h1>"
            );
            

       return res.status(201).json({products});

    } catch(e){
        return res.status(500).json({status : "failed", message : e.message})
    }
    
})

module.exports= router;