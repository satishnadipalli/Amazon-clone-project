const express = require("express");
const { addcartItem, getCartItems, DeleteCartItem, emptyCart } = require("../CartControllers/cartControllers");
const { authenticateToken } = require("../../Authentication/Authentication");

require("express-async-errors");
const CartRouter = express.Router();

CartRouter.post('/addcartItem',authenticateToken,addcartItem);
CartRouter.get("/getCartItems",authenticateToken,getCartItems);
CartRouter.delete("/deleteCartItem/:id",authenticateToken,DeleteCartItem);
CartRouter.delete("/emptycart",authenticateToken,emptyCart)

module.exports = CartRouter