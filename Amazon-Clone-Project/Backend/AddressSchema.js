const mongoose = require('mongoose');
const UserDB = require('./UserSchema');
const AddressSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    villageName :String,
    mandalName : String,
    districtName : String,
    pinCode :String,
    stateName :String,
    default : {
        type:Boolean,
        default:false
    },
    id : Number,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'UserDB' }
})

module.exports = mongoose.model('UserAddress',AddressSchema);
