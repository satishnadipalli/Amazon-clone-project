const mongoose = require("mongoose");
const express = require("express");
const UserDB = require("../../UserSchema");

const ORDERSSCHEMA = mongoose.Schema({
  userId: {
    type: String,
    required: [true, "please provide the UserId"]
  },
  firstname:{
    type:String,
    required:[true,"please provide your firstname"]
  },
  lastname:{
    type:String,
    required:[true,"please provide your lastname"]
  },
  email: {
    type: String,
    required: [true, "please provide the email"]
  },
  firstnumber: {
    type: String,
    required: [true, "please provide first number"]
  },
  secondnumber: {
    type: String,
    required: [false, "please provide the second number"]
  },
  cardDetails: {
    cardNumber: {
      type: String,
      required: true
    },
    cardCvv: {
      type: Number,
      required: true
    },
    cardExpire: {
      type: String,
      required: true
    }
  },
  userName: {
    type: String,
    required: [false, "please provide the user name"]
  },
  producsId: [
    {
      productId: String,
      productCreatedId: String,
      image:String,
      description:String,
      title:String,
      price:Number,
      isDeliverd:{
        default:false,
        required:false,
        type:Boolean
      }
    }
  ],
  totalPrice:Number,
  deliverLocation:{
    type:String,
    required:[true,"please provide the delivery location"]
  },
  status: {
    type: String,
    default: "pending"
  },
  orderDate:{
    type:String,
    required :false
  },
  deliverTime:{
    type:String,
    required:false
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "UserDB" }
});

module.exports = mongoose.model("ORDERS", ORDERSSCHEMA);
