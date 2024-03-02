require("express-async-errors");
const CART = require("../CartSchema/CartSchema")

const addcartItem = async(req,res) =>{

    const {id,title,image,image_small,attribute,brand,description,avgRating,ratings,price,oldPrice,quantity,badge} = req.body;

    if(!title || !image || !brand || !description || !price){
        return res.status(401).json({msg:"please provide the complete details of the product"})
    }
    const createdBy = req.user._id;

    if(!createdBy){
        return res.status(500).json({msg:"there was an internal server error please try after sometime"})
    }

    const existingProduct = await CART.findOne({id,createdBy});

    if(existingProduct){
        const updateProductQuantity = await CART.findOneAndUpdate(
            {id : id},
            {$set : {quantity:quantity+1}},
            {new:true}
        )
        return res.status(200).json({updateProductQuantity});
    }
  
    const UserCartItems = await CART.create({...req.body,createdBy});

    if(!UserCartItems){
        return res.status(500).json({msg:"adding to cart was failed please try after some time"})
    }

    return res.status(201).json({UserCartItems})


}


const getCartItems = async(req,res) =>{

    const createdBy = req.user._id;

    if(!createdBy){
        res.status(501).json({msg:"you are not authorised"});
    }

    const UserCartItems = await CART.find({createdBy});

    if(!UserCartItems){
        res.status(200).json({msg:"you have no cart Items"})
    }

    res.status(200).json({UserCartItems});
}


const DeleteCartItem = async(req,res) =>{
    const {id} = req.params;
    const {_id} = req.user;

    const deletedItem = await CART.findOneAndDelete({createdBy:_id,id});
    res.status(200).json({deletedItem});
}


const emptyCart = async(req,res) =>{
    const {_id} = req.user;
  
    const emptyCart = await CART.deleteMany({createdBy:_id});

    res.status(200).json({emptyCart});
  }
  
module.exports = {addcartItem,getCartItems,DeleteCartItem,emptyCart}