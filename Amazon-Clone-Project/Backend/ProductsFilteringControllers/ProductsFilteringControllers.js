const { model } = require("mongoose")
require("express-async-errors")
const PRODUCTS = require("../ProductsSchema/productsSchema");
const { query } = require("express");
const postCategoery = async (req,res) =>{
    
        const { categoery } = req.params;
    
        if (!categoery) {
            
            res.status(404).json({ msg: "the requested product was not found" });
            return;
        }
        if(categoery==="All"){
            const result = await PRODUCTS.find({});
            return res.status(200).json({filterdProducts:result});
        }
    
        const result = await PRODUCTS.find({categoery:categoery});

        res.status(200).json({filterdProducts:result});
}

const priceBasedFilter = async(req,res) =>{
    const {lowerPrice,topPrice,company} = req.params;

    let newArray = []
    let result = [];

     queryObject = {}

    if(lowerPrice){
         queryObject.price = lowerPrice
    }
    if(topPrice){
        queryObject.price = topPrice
    }
    if(company){
        queryObject.company = company
    }

    result = await PRODUCTS.find(queryObject);

    return res.status(200).json({filterdProducts:result})

}
    

module.exports = {postCategoery,priceBasedFilter}