const mongoose = require("mongoose");
require("dotenv").config();

const CONNECT_DB = () =>{
   
    return mongoose.connect(process.env.CONNECTION_STRING)
}

module.exports = CONNECT_DB