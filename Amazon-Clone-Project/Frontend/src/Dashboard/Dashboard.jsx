import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { logout } from '../Redux/CartSlice';
import { Buy, Buyed, CurrentUsers, DashboardIcon, LogoutIcon, New, OrderIcon,  ProductsIcon,  Saved, SwitchAccount } from '../HeroIcons';
import SavedProducts from './SavedProducts';
import NewProduct from './NewProduct';
import BuyedProducts from './BuyedProducts';
import { Link } from 'react-router-dom';
import Profile from './addnewProduct/Profile';
import Users from './Users.jsx/Users';
import Orders from './Orders/Orders';
import AllProductsAdminDetails from './AllProductAdminDetails/AllProductsAdminDetails';
const Dashboard = () => {
    const [component,setComponent] = useState('profile');
    const dispatch = useDispatch();
    const {loginDetails,userLocation} = useSelector(state=>state.cart)
    const [tab,setTab] = useState('saved')
    const [open,setisOpen] = useState(false);


	function handleTab(tab){
		setTab(tab);
	}

    function logouts(){
        dispatch(logout());
    }

    function handleProfile(){
        if(tab==='saved'){
            return <SavedProducts tab={tab}/>
        }
        else{
            return <BuyedProducts/>
        }
    }

    function logoutFromAccount(){
        dispatch(logout())
        window.location = '/Auth'
    }

    function logoutUser(){
        setisOpen(true);
    }
  return (
    <div className='w-full relative flex relative overflow-hidden pb-24 '>
        
        <div style={{borderRight:"1px solid grey"}} className='flex gap-3 flex-col w-72 relative  p-3 '>
            <div className='flex items-center gap-2 mt-10'>
                <img className='h-14 w-14' src="https://ativancouver.ca/wp-content/uploads/jet-engine-forms/12/2023/01/lord-krishna-arjuna-logo-small-sig-1536x1536.png" alt="" />
                <span className='font-bold text-gray-700 '>KRI-SA EComerce</span>
            </div>
            {
                loginDetails?.isAdmin && 
                <div onClick={()=>setComponent("users")} className='flex gap-4 hover:bg-gray-200 py-2 px-3 hover:rounded-lg hover:scale-105'>
                    <CurrentUsers/>
                <span>Users</span>
                </div>
            }

            <div onClick={()=>setComponent("orders")}  className='flex gap-4 hover:bg-gray-200 py-2 px-3 hover:rounded-lg hover:scale-105'>
                <OrderIcon/>
                <span>Orders</span>
            </div>

            <div onClick={()=>setComponent("savedproducts")}  className='flex gap-4 hover:bg-gray-200 py-2 px-3 hover:rounded-lg hover:scale-105'>
                <Saved/>
                <span>Saved Products</span>
            </div>
            
            <div onClick={()=>setComponent("productsbuyed")}  className='flex gap-4 hover:bg-gray-200 py-2 px-3 hover:rounded-lg hover:scale-105'>
                <Buyed/>
                <span>Products Buyed</span>
            </div>

            <div onClick={()=>setComponent("orders")}  className='flex gap-4 hover:bg-gray-200 py-2 px-3 hover:rounded-lg hover:scale-105'>
                <DashboardIcon/>
                <span>Dashboard</span>
            </div>
            <div onClick={()=>setComponent("profile")}  className='flex gap-4 items-center hover:bg-gray-200 py-2 px-3 hover:rounded-lg hover:scale-105'>
                <img src={"http://localhost:3000/uploads/"+loginDetails?.profilePhoto} alt="" className='w-8 h-8 rounded-full' />
                <span>Profile</span>
            </div>
            <div onClick={()=>setComponent("orders")}  className='flex gap-4 hover:bg-gray-200 py-2 px-3 hover:rounded-lg hover:scale-105'>
                <SwitchAccount/>
                <span>Switch Account</span>
            </div>
            <div onClick={logoutUser}  className='flex gap-4 hover:bg-gray-200 py-2 px-3 hover:rounded-lg hover:scale-105'>
                <LogoutIcon/>
                <span>Logout</span>
            </div>

            {
                loginDetails?.isAdmin &&
                    <div onClick={()=>setComponent("products")}  className='flex gap-4 hover:bg-gray-200 py-2 px-3 hover:rounded-lg hover:scale-105'>
                        <ProductsIcon/>
                        <span>Products</span>
                    </div>
            }

            

        </div>
        {
            component == 'profile' && <Profile handleProfile={handleProfile} handleTab={handleTab} logouts={logouts} tab={tab}/> ||  component == 'users' && <Users/> || component=='orders' && <Orders/> || component == 'products' && <AllProductsAdminDetails/> || component==='savedproducts' && <SavedProducts/> || component ==="productsbuyed" && <BuyedProducts/>                                                                    
        }
        {
            open && <div 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                zIndex: 500,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            className=' w-full  h-screen bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-40 absolute top-72 dashboard-main-div'
           >
            <div className='w-80 flex overflow-hidden items-center flex-col h-36 relative bg-white rounded-md dashboard-inner-div'>
                <span className='text-lg  text-gray-800 font-semibold mt-7'>Logging Out</span>
                <span className='text-sm  text-gray-600 font-semibold mt-2'>You need Log back</span>
                <button onClick={logoutFromAccount} style={{borderTop:"1px solid gray"}} className='w-full hover:bg-gray-200  border-t-2 border-gray-700   py-2 mt-1  absolute bottom-0'>Logout</button>
            </div>
           
        </div>
        }
         
        
    </div>
  )
}

export default Dashboard
