const express = require("express");
require("express-async-errors");
require('dotenv').config();
const PRODUCTS = require("../ProductsSchema/productsSchema")
const products = require("../../Frontend/public/data/products.json")
const mongoose = require('mongoose');
const CONNECT_DB = require("../ConnectDB");

const start = async () => {
  console.log(process.env.CONNECTION_STRING)
  try {
   
    await mongoose.connect("mongodb+srv://satishnadipalli:satishnadipalli@tasksdb.sbxibfx.mongodb.net/?retryWrites=true&w=majority");
    await PRODUCTS.deleteMany();
    await PRODUCTS.create(products)
    console.log("Data initialized successfully");
  } catch (error) {
    console.error("Error during initialization:", error.message);
  }
};

start();
