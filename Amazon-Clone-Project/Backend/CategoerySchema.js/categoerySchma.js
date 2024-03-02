const mongoose = require('mongoose');
const PRODUCTS = require("../ProductsSchema/productsSchema")


const categoerySchma = new mongoose.Schema({
  All : [PRODUCTS],
  Computers : [PRODUCTS],
  Deals : [PRODUCTS],
  Amazon : [PRODUCTS],
  Fashion : [PRODUCTS],
  Home : [PRODUCTS],
  Mobiles : [PRODUCTS]

});

