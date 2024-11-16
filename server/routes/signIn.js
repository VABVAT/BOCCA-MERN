const express = require('express');
require('dotenv').config();
const router = express.Router();
const mongoose = require("mongoose")
const cors = require("cors")
const {userInfo} = require("../models/userInfo")
const authentication1 = require('../middlewares/authentication1');


router.use(cors());
mongoose.connect(process.env.MONGO_CONNECTION)

router.post('/', authentication1, (req, res) => {
    res.status(200).json({token : req.body.token});
})

module.exports = {
    signIn : router
}