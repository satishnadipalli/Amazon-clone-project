const mongoose = require("mongoose");
const { AddressSchema } = require("./AddressSchema");
const {UserAddress} = require('./AddressSchema');
const {CartSchema} = require("./CartService/CartSchema/CartSchema");
const {SaveLaterSchema} = require("./SavedLater/SaveLaterSchema/SaveLaterSchema");

const UsersSchema = mongoose.Schema({
    lastname : {
        type: String,
        required : [true,"plese provide the lastname"]
    },
    email : {
        type: String,
        required : [true,"plese provide the email"]
    },
    password : {
        type: String,
        required : [true,"plese provide the password"]
    },
    isAdmin :{
        type: Boolean,
        default:false
    },
    addresses : {
        type : [AddressSchema],
        required:false
    },
    profilePhoto : {
        type : String,
        required:false
    },
    createdDate :{
        type: String,
        required:false
    },
    defaultAddress : {type : mongoose.Schema.Types.ObjectId,ref:'UserAddress'},
    
    cart : {
        type : [CartSchema],
        default:[],
        required:false
    },
    saveLater : {
        type : [SaveLaterSchema],
        default:[],
        required:false
    }
})

module.exports = mongoose.model("UserDB",UsersSchema)
