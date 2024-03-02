const mongoose = require("mongoose");
// const UserDB = require("../../UserSchema");

const ProductsSchema = mongoose.Schema({ 
    id: {
        type:Number,
        required:false
    },
    title: {
        type:String,
        required:[true,"please provide the title of the product"]
    },
    image: {
        type:String,
        required:[true,"please provide the imagelink of the product"]
    },
    categoery:{
        type:String
    },
    image_small: {
        type:String,
        required:[false,"please provide the smallImage of the product"]
    },
    attribute: {
        type:String,
        required:[true,"please provide the attribute of the product"]
    },
    brand: {
        type:String,
        required:[true,"please provide the brand of the product"]
    },
    description: {
        type:String,
        required:[true,"please provide the description of the product"]
    },
    avgRating: {
        type:Number,
        required:[false,"please provide the avgRating of the product"]
    },
    ratings: {
        type:Number,
        required:[false,"please provide the rating of the product"]
    },
    price: {
        type:Number,
        required:[true,"please provide the price of the product"]
    },
    oldPrice: {
        type:Number,
        required:[true,"please provide the price of the product"]
    }, 
    quantity: {
        type:Number,
        required:[true,"please provide the quantity of the product"]
    },
    attribute: {
        type:Number,
        required:[false,"please provide the quantity of the product"]
    },
    badge: {
        type:String,
        required:[false,"please provide the badge of the product"]
    },
    createdBy:{ type : mongoose.Schema.Types.ObjectId, ref:"UserDB" } 
});



module.exports = mongoose.model("PRODUCTS",ProductsSchema);