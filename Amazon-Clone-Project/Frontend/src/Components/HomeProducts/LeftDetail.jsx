import React, { useContext, useState } from 'react';
import { LocationIcons } from '../../HeroIcons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, calculatePrice } from '../../Redux/CartSlice';
import { createContext } from 'react';
import { UseTotal } from '../../App';
import { calculateTotals} from '../../Redux/CartSlice';


const LeftDetail = ({price,id,product}) => {

    
    const dispatch = useDispatch();
    const {loginDetails} = useSelector(state=>state.cart);

    const [checks,setchecks] = useState(
        {
            isCheck : false,
            isCheckTwo:false,
            selectNumbs:1
        });

    function handleCheck(event){
        const {checked, name, type, value} = event.target;
        setchecks((previousValue)=>{
            return {
                ...previousValue,
                [name] : type==='checkbox' ? checked : value
            }
        })
    }


    async function handleImprove(productData){
       console.log("here are your login details",loginDetails)
        // dispatch(calculateTotals());
        // dispatch(calculatePrice());
        if(loginDetails){
            try {
                const responce = await fetch("http://localhost:3000/addcartItem",{
                    method:'POST',
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${loginDetails.token}`
                    },
                    body:JSON.stringify({...productData})
                })
    
                if(responce.ok){
                    const getCartProducts = await fetch("http://localhost:3000/getCartItems",{
                        method:"GET",
                        headers:{
                            "Authorization":`Bearer ${loginDetails.token}`
                        }
                    })
    
                    if(getCartProducts.ok){
                        const {UserCartItems} = await getCartProducts.json();
                        dispatch(addToCart(UserCartItems));
                    }
                }
            } catch (error) {
                console.log("the error occured",error)
            }
            finally{
                console.log("ho gaya")
            }
        }else{
            window.location = "/Auth"
        }

    }
  return (
    <>             
        <div className=' w-64 border border-gray-300 mr-10 pl-5 pr-5 h-full pb-10' style={{borderWidth:'0.01em'}}>
            <div className='relative'>
                <span className='text-sm top-0 absolute ml-1 font-bold'>
                $
                </span>
                <span className='text-gray-700 pl-3 text-2xl font-serif'> 
                {price}
                </span>
                <div className='mt-2 relative overflow-hidden amazon-badge w-24 h-4  text-sm font-semibold text-white bg-gray-800 flex justify-center items-center'>
                <span className='w-4 h-4 border-transparent bg-white absolute right-0  rounded-tl-[15px] rounded-bl-[15px] '>
                </span>
                    <img src="/images/favicon.ico" alt="no image fonunded" className='h-3 mr-2'/> 
                <span className='mr-2'>
                    fullfilled
                </span>
            </div>
                <span className='text-sm text-blue-400 font-semibold mt-1 '>FREE delivery <span className='text-sm font-bold text-black'>Sunday,17 December</span></span>
                <span  className='text-sm text-green-700 font-semibold block mt-1'>Oder within 6 hrs 48mins</span>
                <div className='location--name flex items-center'>
                <LocationIcons />
                <div className='text-blue-400 ml-1'>
                    <span className=' text-sm text-blue-400 font-semibold'>Deliver to Satish, </span>
                    <span  className=' text-sm font-bold'>Rajamundry 533101</span>
                </div>
                </div>
                <span className='text-lg text-green-700 mt-2 font-semibold'>
                    In Stock
                </span>
                <span className='block text-sm font-semibold hover:underline text-blue-400 hover:text-red-600'>
                    <span className='text-black'> Sold</span> by Authorized India Account <span className='text-black'>and</span> Fulfilled by Amazon.
                </span>
                <span>
                <div className='flex items-start'>
                    <input
                      type="checkbox"
                      name="isCheck" 
                      className='mt-2' 
                      checked = {checks.isCheck}
                      onChange={handleCheck}
                     />
                    <span className='hover:text-red-600 text-sm font-semibold text-blue-400 ml-2 mt-2'>1 Year Extended Warranty <span className='text-black'>for</span> <span className='text-red-600'>₹235.00</span></span>
                    
                </div>
                </span>
                <span>
                <div className='flex items-start'>
                    <input 
                       type="checkbox"
                       name="isCheckTwo" 
                       className='mt-2' 
                       checked = {checks.isCheckTwo}
                       onChange={handleCheck}
                    />
                    <span className='hover:text-red-600 text-sm font-semibold text-blue-400 ml-2 mt-2'>1 Year Extended Warranty <span className='text-black'>for</span> <span className='text-red-600'>₹199.00</span></span>
                </div>
                </span>
                <div className='flex'>
                <span>Quantity :</span>
                <select 
                  name="selectNumbs"
                  className='border border-gray-400 text-xs font-bold w-8 h-5 mt-1 ml-3'
                  
                  onChange={handleCheck}  
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                </div>
                <button className='w-full mt-3 text-sm rounded-full bg-yellow-400 h-7 font-semibold hover:bg-yellow-500' 
                onClick={()=>handleImprove(product)}>Add to Cart</button>
                <button className='w-full mt-3 text-sm rounded-full bg-orange-400 h-7 font-semibold hover:bg-orange-500'>Buy Now</button>
            </div>
        </div>
    </>
  )
}

export default LeftDetail
