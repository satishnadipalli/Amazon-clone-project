import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux';
import SingleCart from '../singleCart';
import { useDispatch } from 'react-redux';

import CartModel from './CartModel';
import { openModal } from '../ModelSlice';
import { GoToShop, Right } from '../../HeroIcons';
import {useNavigate} from 'react-router-dom';
import { addToCart,calculatePrice,calculateTotals } from '../CartSlice';
import LoadingAnimation from '../../../loadingAnimation';

const Cart = () => {
  
  let navigate = useNavigate();
  const {cartProducts} = useSelector(store=>store.cart);
  const [isLoading,setIsLoading] = useState(true);
  const {isOpen} = useSelector(store=>store.cartModal);
  const {totalItems,  totalCartAmount,user,loginDetails,userLocation } = useSelector(store=>store.cart);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    const fetchCart = async()=>{
      try {
        const getCartItems = await fetch("http://localhost:3000/getCartItems",{
          method:"GET",
          headers:{
            "Authorization" : `Bearer ${loginDetails?.token}`
          }
        });
        
        if(getCartItems.ok){
          const {UserCartItems} = await getCartItems.json();
          console.log(UserCartItems,"-----------------")
          dispatch(addToCart(UserCartItems));
          dispatch(calculatePrice());
          dispatch(calculateTotals());
        }
      } catch (error) {
        console.log(error);
      }finally{
        setIsLoading(false);
      }
    }
    fetchCart();
  },[]);


  

  function handleClick(){
    navigate('/');
  }

  function handlePreceedToBuy(){
    if(!loginDetails){
      navigate('/Auth'); 
    }else if(loginDetails && userLocation?.length<=0){
      console.log(userLocation);

      navigate('/location');
    }else{
      console.log("we are succeded")
    }
  }

  if(isLoading){
    return <LoadingAnimation/>
  }

  return (
    <>
    <div className= {cartProducts.length<=3 ? 'flex gap-5 bg-back w-full gre p-8 relative h-screen' :'flex gap-5 bg-back w-full gre p-8 relative' }>
    { isOpen && cartProducts.length>0 && <CartModel/> }
      <div className="w-4/5 cart-products-container  bg-white">
        <span className='pl-5 pt-5 text-xl block'>Shopping Cart</span>
        <span onClick={()=>dispatch(openModal())} className=' pl-5 font-semibold text-sm text-blue-400 cursor-pointer'>Deselect All</span>
        <hr style={{borderBottomWidth:0.1,borderBottomColor:'gray',width:'96%', margin:'auto'}}/>
        <div className='pt-5 pb-5'>
        { 
            cartProducts.length > 0 ? (
              cartProducts.map((element) => (
                <SingleCart 
                  element={element}
                  key={element.id}
                  price={element.price}
                  image={element.image}
                  id={element.id}
                  _id= {element._id}
                  description={element.description} 
                  quantity={element.quantity}
                />
              ))
            ) : (
          <div className='mt-24 flex flex-col items-center justify-center text-2xl font-semibold text-gray-500 m-auto'>
            <span>
              Your cart is empty
            </span>
            <span onClick={handleClick} className='text-mm flex justify-center items-center'>
              <GoToShop/><span className='pl-3'>Go & Shop Now</span> 
            </span>
          </div>
        )
      }
      </div>
      
      </div> 
      <div className=' w-64 h-60 bg-white p-3'>
        <div className='flex '>
            <Right/>
            <span className='text-sm text-green-700 font-semibold'>Your order is eligible for free delivery</span>
        </div>
        <span className='text-xs pl-3'>Select this option for. <span className='text-blue-400'>Details</span></span>
        <span className='block pl-2'>Subtotal of ({totalItems} items) : $ <span className='font-semibold'>{ totalCartAmount}</span></span>
        <span className='mt-2 flex text-sm font-semibold text-gray-600 pl-2'>
          <input type="checkbox" className='mr-2' />
          <span>This order contains a gift</span>
        </span>
        <button onClick={handlePreceedToBuy} className='w-full bg-yellow-400 rounded-md mt-5 text-sm py-1 text-white'>
          Proceed To Buy
        </button>
        <select name="" id="" className='border border-gray-400 text-md w-full h-10 m-auto mt-5'>
          <option value="" className='m-auto'>EMI Options</option>
        </select>
      </div>
    </div>
    </>
  )
}

export default React.memo(Cart);
