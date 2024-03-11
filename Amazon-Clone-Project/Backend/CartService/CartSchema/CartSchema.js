const mongoose = require("mongoose");
const UserDB = require("../../UserSchema");

const CartSchema = mongoose.Schema({ 
    productId:{
        type:String,
        required:true
    },
    title: {
        type:String,
        required:[true,"please provide the title of the product"]
    },
    image: [
        {
            type:String,
            required:[true,"please provide the imagelink of the product"]
        }
    ],
    image_small: {
        type:String,
        required:[false,"please provide the smallImage of the product"]
    },
    attribute: {
        type:String,
        required:[false,"please provide the attribute of the product"]
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
        required:[true,"please provide the avgRating of the product"]
    },
    ratings: {
        type:Number,
        required:[true,"please provide the rating of the product"]
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
    feedback: [{
        user: String,
        feed: String,
        profilePhoto:String,
        date:String,
        rateGiven:Number
    }],
    badge: {
        type:String,
        required:[true,"please provide the badge of the product"]
    },
    createdBy:{ type : mongoose.Schema.Types.ObjectId, ref:"UserDB" } 
})

module.exports = mongoose.model("CART",CartSchema);