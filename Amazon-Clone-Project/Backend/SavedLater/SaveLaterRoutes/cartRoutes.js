const express = require("express");
const { getSavedProduct, postSavedProduct } = require("../SaveLaterControllers/SaveLaterControllers");
const { authenticateToken } = require("../../Authentication/Authentication");
const SavedRouter = express.Router();
require("express-async-errors");

SavedRouter.get('/getSavedProducts',authenticateToken,getSavedProduct);
SavedRouter.post('/postProduct',authenticateToken,postSavedProduct);

module.exports = SavedRouter;
