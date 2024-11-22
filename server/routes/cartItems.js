require('dotenv').config()
const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const cors = require('cors');
const {userInfo} = require("../models/userInfo")
const {ProductModel} = require("../models/products")

mongoose.connect(process.env.MONGO_CONNECTION)
router.use(cors());

router.post("/", async (req, res) => {
    const userId = req.body.id;
    const user = await userInfo.findOne(
        {
            _id : userId
        }
    )
    if(!user) res.status(400).json({error : "no user found"})
    else {
    // console.log(validItems)
    const validItems = user.cart.filter(curr => curr !== null);
    const arr = await Promise.all(
        validItems.map(async (curr) => {
        if(!curr) return null
        const product = await ProductModel.findOne({
            _id : curr
        }) 
        // console.log(product)
        return {
            name : product.productName,
            price : product.productPrice,
            image : product.Image
        }
        }
    )
)
    res.status(200).json({cart : arr})

}
})

module.exports =  {
    cartItems : router
}