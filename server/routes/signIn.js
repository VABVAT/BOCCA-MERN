const express = require('express');
require('dotenv').config();
const router = express.Router();
const mongoose = require("mongoose")
const cors = require("cors")
const {userInfo} = require("../models/userInfo")

router.use(cors());
mongoose.connect(process.env.MONGO_CONNECTION)

router.post('/', (req, res) => {
    res.status(200).json({status: "end point reached"})
})

module.exports = {
    signIn : router
}