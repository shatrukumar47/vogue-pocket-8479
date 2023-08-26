const mongoose=require('mongoose')

// {
//     "name":"",
//     "image":"",
//     "price":"",
//     "rating":"",
//     "category":"",
//     "brand":""
// },

const productSchema=mongoose.Schema({
    name:String,
    image:String,
    price:Number,
    rating:Number,
    category:String,
    brand:String,
},{
    versionKey:false
})

const ProductModel=mongoose.model('product',productSchema)

module.exports={ProductModel}