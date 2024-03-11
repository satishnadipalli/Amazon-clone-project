const mongoose = require("mongoose");
// const UserDB = require("../../UserSchema");

const ProductsSchema = mongoose.Schema({ 
    productId: {
        type:String,
        required:false
    },
    title: {
        type:String,
        required:[true,"please provide the title of the product"]
    },
    image:  [{
        type: String,
        required: [true, "Please provide the image link of the product"]
    }],
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
        required:[false,"please provide the avgRating of the product"],
        default:0
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
    feedback: [{
        user: String,
        feed: String,
        profilePhoto:String,
        date:String,
        rateGiven:Number
    }],
    badge: {
        type:String,
        required:[false,"please provide the badge of the product"]
    },
    createdBy:{ type : mongoose.Schema.Types.ObjectId, ref:"UserDB" } 
});



module.exports = mongoose.model("PRODUCTS",ProductsSchema);