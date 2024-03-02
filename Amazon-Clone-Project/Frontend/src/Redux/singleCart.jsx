import React, { createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, calculatePrice, calculateTotals, removeFromCart } from './CartSlice'
import { useContext } from 'react'
import { UseTotal } from '../App'

const SingleCart = ({element}) => {
  const {price,image,id,description,quantity,_id} = element;
                 
  const dispatch = useDispatch();
  const {loginDetails} = useSelector(state=>state.cart);
  // const {data} = useContext(UseTotal);
  

  async function handleImprove(id){
    // dispatch(removeFromCart({id,data}));
    dispatch(calculateTotals());
    dispatch(calculatePrice());

    try {
      const response = await fetch(`http://localhost:3000/deleteCartItem/${id}`,{
        method:"DELETE",
        headers:{
          "Authorization" : `Bearer ${loginDetails.token}`
        }
      });
      if(response.ok){
        const getCartItems = await fetch("http://localhost:3000/getCartItems",{
          method:"GET",
          headers:{
            "Authorization" : `Bearer ${loginDetails.token}`
          }
        });
        
        if(getCartItems.ok){
          const {UserCartItems} = await getCartItems.json();
          dispatch(addToCart(UserCartItems));
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSave(id){
    const response = await fetch("http://localhost:3000/postProduct",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${loginDetails.token}`
      },
      body:JSON.stringify(element)
    });
  }


  return (
    <div key={id}>
      <div className='w-full flex pb-5'>
            <div style={{width:'15%'}} className='pl-2 flex items-center justify-center'>
              <img src={image} alt="" className=' h-24 m-auto'/>
            </div>
            <div className="info pl-5" style={{width:'60%'}}>
              <span className='font-rr'>
                {description}
              </span>
              <span className='block text-sm font-semibold text-green-700'>In stock</span>
              <span className='text-sm font-semibold'>Eligible for free shoping</span>
              <span className=' flex items-center mt-1'>
                <input type="checkbox" className='mr-1'/>
                <span className='text-xs font-semibold'>This is a gift Learn more</span>
              </span>
              <div className='mt-1 flex justify-between w-1/2'>
                <select name="" id="" className='text-sm bg-gray-300 border rounded-md border-gray-400 px-1 '>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
                <button onClick={()=>handleImprove(id)} className=' text-blue-400 ggg font-semibold text-xs hover:underline'>Delete</button>
                <button onClick={()=>handleSave(_id)} className=' text-blue-400 ggg font-semibold text-xs hover:underline'>Save for later</button>
                <button className=' text-blue-400 ggg font-semibold text-xs hover:underline'>Share</button>
                <button className=' text-blue-400 ggg font-semibold text-xs hover:underline'>See more like this</button>
              </div>
            </div>
            <div className="price" style={{width:'20%'}}>
                <span className=' float-right font-semibold'>${price} <span className='text-blue-400 ggg font-semibold text-xs hover:underline'>{quantity}</span></span>
            </div>
      </div>
      <hr style={{borderBottomWidth:0.1,borderBottomColor:'gray',width:'96%', margin:'auto',marginBottom:15}}/>
      
    </div>
  )
}

export default SingleCart
