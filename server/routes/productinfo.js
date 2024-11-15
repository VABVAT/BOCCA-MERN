require('dotenv').config()
const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const cors = require('cors');
const {ProductModel} = require('../models/products')

mongoose.connect(process.env.MONGO_CONNECTION)
router.use(cors());

router.get('/', async (req, res) => {
    try{
        const products = await ProductModel.find({});
        res.status(200).json({products: products});
    }catch{
        res.status(400).json({error : "Server error"})
    }
})

module.exports = {
    Productinfo : router
}