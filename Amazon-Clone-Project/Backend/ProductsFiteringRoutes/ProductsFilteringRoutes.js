const express = require("express");
const { postCategoery, priceBasedFilter } = require("../ProductsFilteringControllers/ProductsFilteringControllers");
const { authenticateToken } = require("../Authentication/Authentication");
const FilteringRoutes = express();


FilteringRoutes.get('/post-categoery/:categoery',authenticateToken,postCategoery);
FilteringRoutes.get('/getfilterd/:lowerPrice/:topPrice/:company',authenticateToken,priceBasedFilter)

module.exports = FilteringRoutes