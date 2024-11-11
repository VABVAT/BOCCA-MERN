const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
    productName: String,
    productPrice : String,
    Quantity: String
})

const ProductModel = mongoose.model('Product', Product);

module.exports = 
    {
        ProductModel: ProductModel
    }
