import React from 'react';
import {useDispatch} from 'react-redux';
import { addToCart, removeAllItems } from '../CartSlice';
import { calculateTotals } from '../CartSlice';
import { closeModal } from '../ModelSlice';
import { calculatePrice } from '../CartSlice';
const CartModel = () => {
  const dispatch = useDispatch();

  async function handleClick(){
    dispatch(removeAllItems());
    dispatch(calculateTotals());
    dispatch(calculatePrice());
    try{
    const response = await fetch(`http://localhost:3000/emptycart`,{
        method:"DELETE",
        headers:{
          "Authorization" : `Bearer ${loginDetails.token}`
        }
    });
    if(response.ok){
      const emptyArray = []
      dispatch(addToCart(emptyArray))
      console.log("successfully removed all the items")
    }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 py-6 pb-10 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <span className='whitespace-nowrap font-semibold text-rr'>Removing All items from the cart....???</span>
      <div className='flex justify-between mt-8'>
        <button onClick={()=>handleClick()} className='px-4 rounded-md hover:bg-blue-800 font-semibold text-rr py-1 text-white bg-blue-700'>Yes</button>
        <button onClick={()=>dispatch(closeModal())} className='px-4 rounded-md hover:bg-blue-800 font-semibold text-rr py-1 text-white bg-blue-700'>No</button>
      </div>
    </div>
  );
}

export default CartModel;

