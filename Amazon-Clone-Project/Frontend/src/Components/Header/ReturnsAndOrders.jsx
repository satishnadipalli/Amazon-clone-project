import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { logout } from '../../Redux/CartSlice';
import { UserProfile } from '../../HeroIcons';
import { Link } from 'react-router-dom';
const ReturnsAndOrders = () => {
  const {loginDetails} = useSelector(state=>state.cart);
  const dispatch = useDispatch();

  // function handlelogout (){
  //   dispatch(logout());
  //   console.log("hello")
  // }
  
  return (
    <Link to={'/dashboard'}>
      <div className='location--name text-gray-700 items-center ml-2 flex flex-col items-center justify-center h-full' >
      <UserProfile/>
      </div>
    </Link>
  )
}

export default ReturnsAndOrders
