const express = require('express');
const { ProductModel } = require("../models/ProductModel");

const productRoute = express.Router();

// GET REQUEST FOR ALL PRODUCTS

productRoute.get('/',async(req,res)=>{
    // console.log(req.query)
    let q={}
    let s={}
    if(req.query.category){
        q.category=req.query.category
    }
    if(req.query.brand){
        q.brand=req.query.brand
    }
    if(req.query.rating){
        q.rating={$gte: req.query.rating } 
    }
    if(req.query.sort){
        console.log(req.query.sort)
        
        if(req.query.sort==='asc'){
            s.price=1
        }
        else if(req.query.sort==='desc'){
            s.price=-1
        }
    }
    // console.log(q)
    try{
        const products=await ProductModel.find(q).sort(s)
        res.status(200).json({'data':products})
    }
    catch(error){
        res.status(400).send({"error":error})
    }
})

// POST REQUEST TO ADD A NEW PRODUCT

productRoute.post('/addProduct',async(req,res)=>{
    // console.log(req.body)
    try{
        const newProduct=new ProductModel(req.body)
        await newProduct.save()
        res.status(200).send({'msg':"New Product added successfully"})
    }
    catch(error){
        res.status(400).send({"error":error})
    }
})

// PATCH REQUEST FOR EDITING EXISTING PRODUCT

productRoute.patch('/update/:productID',async(req,res)=>{
    try{
        const {productID}=req.params
        await ProductModel.findByIdAndUpdate({_id:productID},req.body)
        res.status.send({"msg":`Product with id ${productID} is updated successfully` })
    }
    catch(error){
        res.status(400).send({"error":error})
    }
})

// DELETE REQUEST FOR DELETING PRODUCT

productRoute.delete('/delete/:productID',async(req,res)=>{
    try{
        const {productID}=req.params
        await ProductModel.findByIdAndDelete({_id:productID})
        res.status.send({"msg":`Product with id ${productID} is deleted successfully` })
    }
    catch(error){
        res.status(400).send({"error":error})
    }
})


module.exports={
    productRoute
}