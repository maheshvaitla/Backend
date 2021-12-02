const express =require("express");

const app = express();
const productController = require("./controllers/product.controllers");

app.use(express.json());

app.use("/products", productController);

module.exports= app;