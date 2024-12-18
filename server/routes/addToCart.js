require('dotenv').config()
const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const cors = require('cors');
const {userInfo} = require("../models/userInfo")

mongoose.connect(process.env.MONGO_CONNECTION)
router.use(cors());

router.post('/', async (req, res) => {
    const id = req.body.id;
    const productId = req.body.productId;
    const user = await userInfo.findOne({
        _id : id
    })
    if(!productId){
        res.status(200).json({Balance: user.Balance});
    }else if(user && productId){
         user.cart.push(productId)
         await user.save();
         res.status(200).json({cart: user.cart});
        // ! this is important as i am not doing user.updateOne
    }
})

module.exports = {
    addToCart : router
}