import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  loginDetails :null,
  user :[],
  isLoading: true,
  totalItems: 0,
  totalCartAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newCart = action.payload.data;
      const selectedCartItem = newCart[action.payload.id];
      const selected = selectedCartItem;
      const sameProduct = state.cartProducts.find((element)=>element.id===selected.id);
      if(sameProduct===selected){
        state.cartProducts.selected.quantity +=1;
        return ;
      }
      state.cartProducts.push(selected);
      console.log(state.cartProducts);
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
    addAddress:(state,action)=>{
      state.user.push(action.payload);
    },
    removeAddress:(state,action)=>{
      console.log(state.user[0]);
      const newObject = Object.values(state.user).filter((element)=>element.id!==action.payload);
      state.user = newObject;
    },
    addLoginDetails:(state,action)=>{
      state.loginDetails = action.payload;
    }
  },
});

export const { addToCart, removeFromCart,removeAllItems,calculateTotals,calculatePrice,addAddress,removeAddress,addLoginDetails } = cartSlice.actions;
export default cartSlice.reducer;

