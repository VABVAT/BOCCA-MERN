require('dotenv').config();
const express = require('express');
const router = express.Router();
const cors = require('cors')
const mongoose = require('mongoose')
const { userInfo } = require('../models/userInfo')
mongoose.connect(process.env.MONGO_CONNECTION)
router.use(cors());

router.post('/', async (req, res)=>{
    const productId = req.body.pid;
    const userId = req.body.uid;
    if(!productId || !userId) res.status(400).json({error : 'bad request'})
    const user = await userInfo.findOne({
        _id : userId
    })
    if(!user) res.status(400).json({error : 'bad request'})
    else{
        user.cart.splice(user.cart.indexOf(productId), 1);
        await user.save();
        res.status(200).json({success : "deleted"})
    } 


})

module.exports = {
    deleteFromCart : router
}