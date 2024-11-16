const {userInfo} = require("../models/userInfo")
const jwt = require("jsonwebtoken");
const jwt_secret = process.env.JWT_SECRET


async function authentication1(req, res, next){
    const username = req.body.userName;
    const password = req.body.password;
    const user = await userInfo.findOne({
        Username: username
    })
    if(user && user.Password === password){
        const token = jwt.sign({id: user.__id}, jwt_secret)
        req.body.token = token;
        next();
    }else{
        res.status(400).json({error: "incorrect credentials"})
    }
}

module.exports =  authentication1

