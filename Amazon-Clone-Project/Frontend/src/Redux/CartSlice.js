import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

const initialState = {
  cartProducts: [],
  loginDetails :JSON.parse(localStorage.getItem("loginDetails")) || null,
  userLocation :[],
  defaultLocation:null,
  isLoading: true,
  totalItems: 0,
  totalCartAmount: 0,
  adminProducts:[],
  TotalUsers:null,
  homeProducts:[]
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {

      // const newCart = action.payload.data;
      // const selectedCartItem = newCart[action.payload.id];
      // const selected = selectedCartItem;
      // const sameProduct = state.cartProducts.find((element)=>element.id===selected.id);
      // if(sameProduct===selected){
      //   state.cartProducts.selected.quantity +=1;
      //   return ;
      // }
      // state.cartProducts.push(selected);
      // console.log(state.cartProducts);
      state.cartProducts = action.payload;
    },
    removeFromCart: (state, actions) => {
      const newCart = state.cartProducts.filter((element)=>element.id!==actions.payload.id);
      state.cartProducts=newCart;
    },
    removeAllItems: (state,action)=>{
      state.cartProducts=[];
      
    },
    calculateTotals: (state,action)=>{
      let totalCartItems = 0;
      state.cartProducts.forEach((element)=>{
        totalCartItems+=element.quantity;
      });
      state.totalItems = totalCartItems;
    },
    calculatePrice: (state,action)=>{
      let price = 0;
      state.cartProducts.forEach((element)=>{
        price = element.quantity*element.price+price;
      });
      state.totalCartAmount = price;
    },
    addAddress: (state, action) => {
      const { payload } = action;
      // const defaultAddressIndex = payload.findIndex((element) => element.default === true);
    
      // if (defaultAddressIndex !== -1) {
      //   const defaultAddress = payload[defaultAddressIndex];
    
      //   // Remove the default address from the array
      //   payload.splice(defaultAddressIndex, 1);
    
      //   // Add the default address at the beginning of the array
      //   payload.unshift(defaultAddress);
      // }
    
      state.userLocation = payload;
    }
    ,
    // removeAddress:(state,action)=>{

    //   state.userLocation = Object.values(state.userLocation).filter((location)=>location._id !== action.payload)
      
    // },
    addLoginDetails:(state,action)=>{
      state.loginDetails = action.payload;
      
      localStorage.setItem("loginDetails", JSON.stringify(action.payload));
    },
    logout:(state,action) =>{
      state.loginDetails = null
      localStorage.removeItem('loginDetails');
    },
    addAdminProducts:(state,action)=>{
      state.adminProducts = action.payload;
    },
    addTotalUsers:(state,action)=>{
      state.TotalUsers = action.payload;
    },
    addHomeProducts:(state,action)=>{
      state.homeProducts = action.payload;
    }
  },
});

export const { addToCart,addTotalUsers,addHomeProducts,logout,addAdminProducts, removeFromCart,removeAllItems,calculateTotals,calculatePrice,addAddress,removeAddress,addLoginDetails } = cartSlice.actions;
export default cartSlice.reducer;

