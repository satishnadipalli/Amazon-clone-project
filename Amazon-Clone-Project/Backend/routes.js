const express = require("express");
const { postData, login, addAddress, getAlladdress, deleteAddresds, selectDefaultAddressEdit, getallUsers, updateUserisAdmin, uppdateUserProfile } = require("./Controllers");
const { authenticateToken } = require("./Authentication/Authentication");
const Router = express.Router();
const multer  = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null,uniqueSuffix + file.originalname)
    }
  })
  
const upload = multer({ storage: storage })

Router.post("/signup",upload.single('profilePhoto'),postData);
Router.post("/login",login);
Router.post("/add-address",authenticateToken,addAddress);
Router.get("/getaddress",authenticateToken,getAlladdress);
Router.delete('/deleteAddress/:productId',authenticateToken,deleteAddresds)
Router.patch('/updateAddress/:addressId',authenticateToken,selectDefaultAddressEdit)
Router.get("/getallUsers",authenticateToken,getallUsers)
Router.patch("/updateIsAdmin",authenticateToken,updateUserisAdmin);
Router.patch("/updateProfile",authenticateToken,uppdateUserProfile);

module.exports = Router