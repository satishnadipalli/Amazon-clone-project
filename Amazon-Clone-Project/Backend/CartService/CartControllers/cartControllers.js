require("express-async-errors");
const CART = require("../CartSchema/CartSchema")

const addcartItem = async (req, res) => {
    const {
        productId,
        title,
        image,
        image_small,
        attribute,
        brand,
        description,
        avgRating,
        ratings,
        price,
        oldPrice,
        quantity,
        badge
    } = req.body;

    if (!title || !image || !brand || !description || !price) {
        return res.status(401).json({ msg: "Please provide the complete details of the product" });
    }

    const createdBy = req.user._id;

    if (!createdBy) {
        return res.status(500).json({ msg: "There was an internal server error. Please try again later." });
    }

    const existingProduct = await CART.findOne({ productId, createdBy });

    if (existingProduct) {
        // If the product already exists in the cart, update its quantity
        const updatedProduct = await CART.findOneAndUpdate(
            { productId: productId, createdBy: createdBy },
            { $inc: { quantity: 1 } },
            { new: true }
        );
        return res.status(200).json({ product: updatedProduct });
    }

    // Create a new cart item with the provided details
    const newCartItem = await CART.create({
        productId,
        title,
        image,
        image_small,
        attribute,
        brand,
        description,
        avgRating,
        ratings,
        price,
        oldPrice,
        quantity,
        badge,
        createdBy
    });

    if (!newCartItem) {
        return res.status(500).json({ msg: "Adding to cart failed. Please try again later." });
    }
    console.log(newCartItem)
    return res.status(201).json({ product: newCartItem });
};


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
    console.log(_id)
    const deletedItem = await CART.findOneAndDelete({createdBy:_id,_id:id});
    console.log("deletedItem",deletedItem)
    res.status(200).json({deletedItem});
}


const emptyCart = async(req,res) =>{
    const {_id} = req.user;
    const emptyCart = await CART.deleteMany({createdBy:_id});

    res.status(200).json({emptyCart});
}
  
module.exports = {addcartItem,getCartItems,DeleteCartItem,emptyCart}