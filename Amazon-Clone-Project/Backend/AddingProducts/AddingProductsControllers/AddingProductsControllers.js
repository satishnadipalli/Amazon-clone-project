require("express-async-errors");
const PRODUCTS = require("../../ProductsSchema/productsSchema");
const UserDB = require("../../UserSchema");

const createProduct = async(req,res) =>{
    const {id,title,categoery,image_small,attribute,brand,description,avgRating,ratings,price,oldPrice,quantity,badge} = req.body;


    try {
        const image = req.file.filename;
        console.log("Product Successfully added with an id",image);
        if(!title){
            return res.status(404).json({msg:"please provide all the details of the product"});
        }
        console.log("requrest came form the frontend -11")
        const {_id} = req.user;
    
        const currentUserEmail = await UserDB.findOne({_id});
        
        const createdBy = _id;
        const createdProduct = await PRODUCTS.create({
            ...req.body,createdBy,image:image});
    
        res.status(201).json({msg:"product was created",createProduct});
        
    } catch (error) {
        console.log("error_______________________________",error)
    }
}

const getAllProducts = async(req,res) =>{
    const products = await PRODUCTS.find({});
    res.status(200).json({products});
}

module.exports = {createProduct,getAllProducts};