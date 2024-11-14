const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const userInfo = new Schema({
    Username: String,
    Password: String,
    cart:[
        {
            type:ObjectId
        }
    ]
})

const userModel = mongoose.model("userInfo", userInfo);

module.exports = {
    userInfo : userModel
}