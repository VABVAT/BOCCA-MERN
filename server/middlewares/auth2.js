const {userInfo} = require("../models/userInfo")

async function auth2(req, res, next){
    const user = await userInfo.findOne({
        Username : req.body.userName
    })
    if(user) res.status(400).json({error : "User exists"})
    else next();
}

module.exports = auth2 