const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SaveLaterSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please provide the title of the product"]
    },
    productId:{
        type: String,
        required:[true,"please provide the productId"]
    },
    image:[ {
        type: String,
        required: [true, "Please provide the image link of the product"]
    }],
    avgRating:{
        type:Number,
        required:false
    },
    time:{
        type:String,
        required:false
    },
    price:{
        type:Number,
        required:true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserDB",
        required: true
    }
});

module.exports = mongoose.model("SAVELATER", SaveLaterSchema);
