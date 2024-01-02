import React from 'react'
import { useDispatch } from 'react-redux';
import { removeAddress } from '../../Redux/CartSlice';
const AddressTable = (props) => {
   const dispatch = useDispatch();

  function handleRemoveAddress(id){
    dispatch(removeAddress(id));
  }
  return (
    <div key={props.element.id} className='p-5 pt-7 h-56 w-52 rounded-md border border-gray-400'>
        <span className='text-sm block font-bold '>{props.element.fullName}</span>
        <span className='mt-1 text-sm block font-semibold'>{props.element.villageName} , {props.element.mandalName}</span>
        <span className='mt-2 font-semibold text-sm'>{props.element.districtName}, {props.element.stateName}</span>
        <span className='mt-2 block text-sm font-semibold'>{props.element.pinCode}</span>
        <span className='mt-2 text-sm font-semibold'>India</span>
        <span className='mt-2 text-sm font-semibold block'>satishnadipalli1@gmail.com</span>
        <button onClick={()=>handleRemoveAddress(props.element.id)} className='text-xs mt-2 font-semibold text-blue-400 hover:underline'>Delete</button>
    </div>
  );
}

export default AddressTable
