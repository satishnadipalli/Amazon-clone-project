const express = require("express");
const { createProduct, getAllProducts } = require("../AddingProductsControllers/AddingProductsControllers");
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


const upload = multer({
    storage: storage,
    limits: {
        fileSize: 40 * 1024 * 1024, // 40MB for file size
        fieldSize: 40 * 1024 * 1024, // 40MB for field size
    },
});

// Use the Multer middleware after its configuration
AddProductRouter.post("/addProductToStore", upload.single('image'),authenticateToken,createProduct);
AddProductRouter.get("/getallproducts", getAllProducts);

module.exports = AddProductRouter;

// Rest of the code remains the same
