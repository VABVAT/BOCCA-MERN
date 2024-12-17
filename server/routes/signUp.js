const express = require("express")
const router = express.Router();
require('dotenv').config();
import { userInfo } from "../models/userInfo";

mongoose.connect(process.env.MONGO_SECRET);

router.post('/', async (req, res) => {
    const userName = req.body.userName;
    const passWord = req.body.passWord;
    const user = new userInfo({'Username': userName, 'Password' : passWord, 'cart' : [], 'Balance' : 1000 }) 
    await user.save()
    res.status(200).json({success : "Done"})

})
module.exports = {
    signUp : router
}