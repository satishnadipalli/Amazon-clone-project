const express = require("express");
const { createProduct, getAllProducts, updateProduct, updateTotalProduct, deleteProduct, giveRandomProducts } = require("../AddingProductsControllers/AddingProductsControllers");
const { authenticateToken } = require("../../Authentication/Authentication");
const AddProductRouter = express.Router();
require("express-async-errors");
const multer = require('multer');
const path = require("path");
console.log(__dirname,"============")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, '../../uploads');
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});


const uploadMultiple = multer({
    storage: storage,
    limits: {
        fileSize: 40 * 1024 * 1024, 
        fieldSize: 40 * 1024 * 1024, 
    },
}).array('image',5);


AddProductRouter.post("/addProductToStore", uploadMultiple,authenticateToken,createProduct);
AddProductRouter.get("/getallproducts", getAllProducts);
AddProductRouter.put("/updateProduct/:productId",authenticateToken,updateProduct);
AddProductRouter.patch("/updatefullProduct",authenticateToken,updateTotalProduct);
AddProductRouter.delete("/deleteOneProduct/:_id",authenticateToken,deleteProduct);
AddProductRouter.get('/randomProducts',authenticateToken,giveRandomProducts);
module.exports = AddProductRouter;

