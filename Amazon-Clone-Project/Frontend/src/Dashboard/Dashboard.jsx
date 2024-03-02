import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { logout } from '../Redux/CartSlice';
import { Buy, New, Saved } from '../HeroIcons';
import SavedProducts from './SavedProducts';
import NewProduct from './NewProduct';
import BuyedProducts from './BuyedProducts';

const Dashboard = () => {
    const dispatch = useDispatch();
    const {loginDetails,userLocation} = useSelector(state=>state.cart)
    const [tab,setTab] = useState('saved')

    console.log(loginDetails.profilePhoto)
	function handleTab(tab){
		setTab(tab);
	}

    function logouts(){
        dispatch(logout())
    }

    function handleProfile(){
        if(tab==='saved'){
            return <SavedProducts tab={tab}/>
        }else if(tab=='add'){
            return <NewProduct/>
        }else{
            return <BuyedProducts/>
        }
    }
  return (
    <div className='w-full flex '>
        <div className='w-52 h-screen '>

        </div>
        <div className='w-full flex flex-col items-center '>
            <div className='w-1/2 grid  pt-10'>
                <div className='full  flex gap-24  pt-10' >
                    <div className='w-36 h-36 p-1 border-2 border-gray-500  rounded-full'>
                    <img
                        className='w-36 h-36 h-full rounded-full'
                        src={"http://localhost:3000/uploads/"+loginDetails.profilePhoto}
                        alt="No image"
                        onError={(e) => console.error('Error loading image:', e.target.src, e.target.error)}
                    />

                    </div>
                    <div className='w-1/2'>
                        <div className='flex justify-between'>
                        <span className='text-lg font-semibold'>{loginDetails?.lastname}</span>
                        <button className=' py-1  px-4 text-sm rounded-md font-semibold bg-gray-300 border border-1'>Edit Profile</button>
                        </div>
                        <div className='h-8 flex justify-between mt-3 text-sm font-bold text-gray-700'>
                            <span>0 orders</span>
                            <span>0 deliverd</span>
                            <span>10 cartItems</span>
                        </div>
                        <div className=''>
                        <span className='text-sm font-semibold text-gray-700'>{loginDetails?.email}</span>
                        <span className='flex justify-between mt-3' onClick={logouts}>Added addresses :{userLocation?.length >0 ? userLocation.length : 
                        <button onClick={logouts} className=' font-medium text-sm  py-1  px-4 text-sm rounded-md font-semibold bg-gray-300 border border-1 '>
                                Add location
                            </button>} </span>
                        </div>
                    </div>
                    </div>
                    <hr style={{ width: "100%", height: "1px",backgroundColor:"gray"}} className='mt-10' />
                    <div className='mb-10 w-full flex justify-between text-sm font-bold text-gray-500 '>
                        <span onClick={()=>handleTab('saved')} className={ tab==='saved' ? " px-10 py-2 bg-gray-300 flex items-center justify-center gap-2 border-t-2 border-black text-black" : "  px-10 py-2  flex items-center justify-center gap-2" }><Saved/>
                            Saved Products
                        </span>
                        <span onClick={()=>handleTab('add')} className={ tab==='add' ? " px-10 py-2 bg-gray-300 flex items-center justify-center gap-2 border-t-2 border-black text-black" : " px-10 py-2  flex items-center justify-center gap-2" }><New/>
                             Add a New Product
                        </span>
                        <span onClick={()=>handleTab('buy')} className={ tab==='buy' ? " px-10 py-2 bg-gray-300 flex items-center justify-center gap-2 border-t-2 border-black text-black" : " px-10 py-2  flex items-center justify-center gap-2" }><Buy/>
                            Buyed Products
                        </span>
                    </div>
                    {
                        handleProfile()
                    }
                </div>
        </div>
        
    </div>
  )
}

export default Dashboard
