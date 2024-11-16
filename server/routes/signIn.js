const express = require('express');
require('dotenv').config();
const router = express.Router();
const mongoose = require("mongoose")
const cors = require("cors")
const {userInfo} = require("../models/userInfo")
const authentication1 = require('../middlewares/authentication1');

router.use(cors({
    origin: 'https://bocca-mern.vercel.app', // Replace with your frontend URL
    methods: 'GET,POST', // Define allowed methods
    allowedHeaders: 'Content-Type', // Define allowed headers
  }));

mongoose.connect(process.env.MONGO_CONNECTION)

router.post('/', authentication1, (req, res) => {
    res.status(200).json({token : req.body.token});
})

module.exports = {
    signIn : router
}