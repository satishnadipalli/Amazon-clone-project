import React from 'react'
<<<<<<< HEAD:Amazon-Clone-Project/Frontend/src/Components/Login/AddressTable.jsx
import { useDispatch, useSelector } from 'react-redux';
import { addAddress, removeAddress } from '../../Redux/CartSlice';

const AddressTable = (props) => {
  const dispatch = useDispatch();
  const {loginDetails,userLocation} = useSelector(state=>state.cart)

  async function handleRemoveAddress(_id){
    // dispatch(removeAddress(_id));
    props.setdisplayDelete(true);
    const response = await fetch(`http://localhost:3000/deleteAddress/${_id}`,{
      method:"DELETE",
      headers:{
        "Authorization":`Bearer ${loginDetails.token}`
      }
    })

    if(response.ok){
      const getAddressResponse = await fetch("http://localhost:3000/getaddress", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${loginDetails.token}`
      }
      
    });
    props.setdisplayDelete(false);
    
    if(getAddressResponse.ok){
        const { alladdress } = await getAddressResponse.json();
        dispatch(addAddress(alladdress));
        
      }
    }

  }

  const handleDefault = async(addressId)=>{
    const response = await fetch(`http://localhost:3000/updateAddress/${addressId}`,{
      method:"PATCH",
      headers:{
        "Authorization":`Bearer ${loginDetails.token}`
      }
    })

    if(response.ok){
      const getAddressResponse = await fetch("http://localhost:3000/getaddress", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${loginDetails.token}`
      }
      
    });
    
    if(getAddressResponse.ok){
        const { alladdress } = await getAddressResponse.json();
        dispatch(addAddress(alladdress));
        
      }
    }
  }


  
  return (
    <div key={props.element._id} className='p-5 pt-7 h-56 w-52 rounded-md border border-gray-400 relative'>
      {props.element.default && <span className='text-xs mt-2 font-semibold text-blue-400 hover:underline'>Deliver to this address </span>}
        <input type="checkbox" 
          checked={props.element.default}
          name='default' onChange={()=>{handleDefault(props.element._id)}} 
          className='absolute top-1 right-1'
        />
=======

const AddressTable = (props) => {
  console.log(props);
  return (
    <div className='p-5 pt-7 h-56 border border-gray-400'>
>>>>>>> 08c388d4be91e4f9dd3fea1bbb3771d39f78ebc6:Amazon-Clone-Project/src/Components/Login/AddressTable.jsx
        <span className='text-sm block font-bold '>{props.element.fullName}</span>
        <span className='mt-1 text-sm block font-semibold'>{props.element.villageName} , {props.element.mandalName}</span>
        <span className='mt-2 font-semibold text-sm'>{props.element.districtName}, {props.element.stateName}</span>
        <span className='mt-2 block text-sm font-semibold'>{props.element.pinCode}</span>
        <span className='mt-2 text-sm font-semibold'>India</span>
        <span className='mt-2 text-sm font-semibold block'>satishnadipalli1@gmail.com</span>
<<<<<<< HEAD:Amazon-Clone-Project/Frontend/src/Components/Login/AddressTable.jsx
        <button onClick={()=>handleRemoveAddress(props.element._id)} className='text-xs mt-2 font-semibold text-blue-400 hover:underline'>Delete</button>
=======
        <button className='text-xs mt-2 font-semibold text-blue-400 hover:underline'>Delete</button>
>>>>>>> 08c388d4be91e4f9dd3fea1bbb3771d39f78ebc6:Amazon-Clone-Project/src/Components/Login/AddressTable.jsx
    </div>
  );
}

export default AddressTable
