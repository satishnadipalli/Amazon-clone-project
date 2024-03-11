require("express-async-errors");
const SAVELATER = require("../SaveLaterSchema/SaveLaterSchema");
const UserDB = require("../../UserSchema");
const CART = require("../../CartService/CartSchema/CartSchema");
const SaveLaterSchema = require("../SaveLaterSchema/SaveLaterSchema");


const getSavedProduct = async(req,res) =>{
    const {_id} = req.user;
    const SavedProducts = await SAVELATER.find({createdBy:_id});
    res.status(200).json({SavedProducts});
}

const postSavedProduct = async(req,res) =>{
    const product = req.body;
    console.log(req.body)

    const {_id} = req.user;

    const cartProduct = await SaveLaterSchema.findOne({_id:req.body._id,createdBy:_id});

    
    const currentUser = await UserDB.findOne({_id});
    const createdBy = _id;
    const today = new Date();
    console.log(req.body,"llllll")
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;  

    const savedProduct = await SAVELATER.findOne({createdBy:_id,_id:req.body._id});
    if(savedProduct){
        return res.status(200).json({msg:"the product already exist in the savedLater"});
    }

    const insertProduct = await SaveLaterSchema.create({...req.body,avgRating:req.body.avgRating,createdBy:_id,time:formattedDate})
    

    res.status(200).json({insertProduct});
}

module.exports = {postSavedProduct,getSavedProduct};