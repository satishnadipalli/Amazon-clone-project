import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addAddress } from '../../Redux/CartSlice';

const AddressTable = (props) => {
  const dispatch = useDispatch();
  const {loginDetails} = useSelector(state=>state.cart);

  const handleDeleteAddress = async(id) =>{
    const response = await fetch(`http://localhost:3000/deleteAddress/${id}`,{
      method:"DELETE",
      headers:{
        "Authorization" : `Bearer ${loginDetails.token}`
      }
    });
    if(response.ok){
      const getResponse = await fetch("http://localhost:3000/getaddress",{
        method:"GET",
        headers:{
          "Authorization" : `Bearer ${loginDetails.token}`
        }
      });
      if(getResponse.ok){
        const addresses = await getResponse.json();
        dispatch(addAddress(addresses));
      }
    }
  }


  return (
    <div key={props.element._id} className='p-5 pt-7 h-56 border border-gray-400'>
        <span className='text-sm block font-bold '>{props.element.fullName}</span>
        <span className='mt-1 text-sm block font-semibold'>{props.element.villageName} , {props.element.mandalName}</span>
        <span className='mt-2 font-semibold text-sm'>{props.element.districtName}, {props.element.stateName}</span>
        <span className='mt-2 block text-sm font-semibold'>{props.element.pinCode}</span>
        <span className='mt-2 text-sm font-semibold'>India</span>
        <span className='mt-2 text-sm font-semibold block'>satishnadipalli1@gmail.com</span>
        <button onClick={()=>handleDeleteAddress(props.element._id)} className='text-xs mt-2 font-semibold text-blue-400 hover:underline'>Delete</button>
    </div>
  );
}

export default AddressTable
