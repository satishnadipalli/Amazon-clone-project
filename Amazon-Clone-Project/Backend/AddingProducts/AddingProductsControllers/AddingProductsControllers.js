require("express-async-errors");
const PRODUCTS = require("../../ProductsSchema/productsSchema");
const mongoose = require("mongoose");
const UserDB = require("../../UserSchema");
const { v4: uuidv4 } = require('uuid');
const createProduct = async (req, res) => {
    try {
        const { id, title, category, image_small, attribute, brand, description, avgRating, ratings, price, oldPrice, quantity, badge } = req.body;

        const productId = uuidv4();
        const image = req.files.map(file => file.filename);

        if (!title) {
            return res.status(404).json({ msg: "Please provide all the details of the product" });
        }

        const { _id } = req.user;

        const currentUserEmail = await UserDB.findOne({ _id });
        const createdBy = _id;

        const createdProduct = await PRODUCTS.create({
            productId, title, category, image_small, attribute, brand, description, avgRating, ratings, price, oldPrice, quantity, badge, createdBy, image
        });

        res.status(201).json({ msg: "Product was created", createdProduct });
    } catch (error) {
        console.error("An unexpected error occurred:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const getAllProducts = async(req,res) =>{
    const products = await PRODUCTS.find({});
    res.status(200).json({products});
}

const updateProduct = async (req, res) => {

    const { _id } = req.user;
    const { productId } = req.params;
    const { user, feed, profilePhoto, rateGiven } = req.body;
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    const updatedFeed = { user, feed, profilePhoto, date: formattedDate, rateGiven };
    const updateProduct = await PRODUCTS.findOneAndUpdate(
        { _id: productId },
        { $push: { feedback: updatedFeed } },
        { new: true }
    );

    const totalRating = updateProduct.feedback.reduce((total, person) => total + person.rateGiven, 0);
    const avgRating = updateProduct.feedback.length > 0 ? totalRating / updateProduct.feedback.length : 0;

    const updateProducting = await PRODUCTS.findOneAndUpdate(
        { _id: productId },
        { $set: { avgRating: avgRating } },
        { new: true }
    );

    res.status(201).json({ updateProducting });
};

const updateTotalProduct = async(req,res) =>{
    console.log(req.body)
    const {_id} = req.body;
    console.log(_id)
    const updatedProduct = await PRODUCTS.findOneAndUpdate({_id},req.body,{new:true});
    res.status(200).json({updatedProduct});
}


const deleteProduct = async(req,res) =>{

    const {_id} = req.params;

    if(!_id){
        return res.status(200).json({msg:"the requested product was not found to delete"});
    }
    const updatedProducts = await PRODUCTS.findOneAndDelete({_id});
    res.status(200).json({updateProduct});
}


const giveRandomProducts = async (req, res) => {
    const products = await PRODUCTS.find({});
    let randomProducts = [];

    while (randomProducts.length < Math.floor(Math.random() * (10 - 8 + 1)) + 8) {
        const randomNumber = Math.floor(Math.random() * products.length);
        const selectedProduct = products[randomNumber];

       
        if (!randomProducts.includes(selectedProduct)) {
            randomProducts.push(selectedProduct);
        }
    }
    res.status(200).json({randomProducts});
};



module.exports = {createProduct,giveRandomProducts,getAllProducts,updateProduct,updateTotalProduct,deleteProduct};