require('dotenv').config()
const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const cors = require('cors');
const {userInfo} = require("../models/userInfo")

mongoose.connect(process.env.MONGO_CONNECTION)
router.use(cors());

router.post('/', async (req, res) => {
    const currBal = req.body.Balance;
    const price = req.body.price;
    const id = req.body.id;
    const user = await userInfo.findOne({
        _id : id
    })
    if(user){
        user.Balance = user.Balance - price;
        await user.save()
    }
    res.status(200).json({success : "Done"})
})

module.exports = {
    changeBalance : router
}