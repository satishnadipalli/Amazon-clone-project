const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SaveLaterSchema = new Schema({
    id: {
        type: Number,
        required: false
    },
    title: {
        type: String,
        required: [true, "Please provide the title of the product"]
    },
    image: {
        type: String,
        required: [true, "Please provide the image link of the product"]
    },
    time:{
        type:String,
        required:false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserDB",
        required: true
    }
});

module.exports = mongoose.model("SAVELATER", SaveLaterSchema);
