import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  user : null,
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
  },
});

export const { addToCart, removeFromCart,removeAllItems,calculateTotals,calculatePrice } = cartSlice.actions;
export default cartSlice.reducer;

