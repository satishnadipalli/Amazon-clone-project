const express = require("express");
const { authenticateToken } = require("../../Authentication/Authentication");
const { createOrder, getuserOrders } = require("../OrdersControllers/OrdersControllers");
const OrdersRouter = express.Router();


OrdersRouter.post("/orderProduct",authenticateToken,createOrder);
OrdersRouter.get("/getuserOrders",authenticateToken,getuserOrders);
  
module.exports = OrdersRouter