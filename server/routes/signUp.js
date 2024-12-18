const express = require("express")
const router = express.Router();
require('dotenv').config();
const {userInfo} = require("../models/userInfo")
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONNECTION);

router.post('/', async (req, res) => {
    const userName = req.body.userName;
    const passWord = req.body.passWord;
    const user = new userInfo({'Username': userName, 'Password' : passWord, 'cart' : [], 'Balance' : 1000 });
    await user.save();
    res.status(200).json({success : "Done"});
})

module.exports = {
    signUp : router
}