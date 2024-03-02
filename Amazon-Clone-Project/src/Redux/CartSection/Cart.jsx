import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import SingleCart from '../singleCart';
import { useDispatch } from 'react-redux';
import { removeAllItems } from '../CartSlice';
import CartModel from './CartModel';
import { openModal } from '../ModelSlice';
import { GoToShop, Right } from '../../HeroIcons';
import {useNavigate} from 'react-router-dom';

const Cart = () => {
  let navigate = useNavigate();
  const cartState = useSelector(store=>Object.values(store.cart.cartProducts));
  const {isOpen} = useSelector(store=>store.cartModal);
  const {totalItems,  totalCartAmount } = useSelector(store=>store.cart);
  const memorisedHook = useMemo(()=>cartState,[cartState]);
  const dispatch = useDispatch();

  function handleClick(){
    navigate('/');
  }

  function handlePreceedToBuy(){
    navigate('/location');
  }

  return (
    <>
    <div className='flex gap-5 bg-back h-screen w-full gre p-8 relative'>
    { isOpen && cartState.length>0 && <CartModel/> }
      <div className="w-4/5 cart-products-container  bg-white">
        <span className='pl-5 pt-5 text-xl block'>Shopping Cart</span>
        <span onClick={()=>dispatch(openModal())} className=' pl-5 font-semibold text-sm text-blue-400 cursor-pointer'>Deselect All</span>
        <hr style={{borderBottomWidth:0.1,borderBottomColor:'gray',width:'96%', margin:'auto'}}/>
        <div className='pt-5 pb-5'>
        { 
          memorisedHook.length > 0 ? (
            memorisedHook.map((element) => (
              <SingleCart 
                key={element.id}
                price={element.price}
                image={element.image}
                id={element.id}
                description={element.description} 
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

export default Cart
