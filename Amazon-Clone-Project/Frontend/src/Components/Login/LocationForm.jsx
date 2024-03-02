import React, { useState } from 'react'

const LocationForm = (props) => {
  const {user,setLocation,handleLocationData,handleSubmit} = props.location;
<<<<<<< HEAD:Amazon-Clone-Project/Frontend/src/Components/Login/LocationForm.jsx


  
=======
>>>>>>> 08c388d4be91e4f9dd3fea1bbb3771d39f78ebc6:Amazon-Clone-Project/src/Components/Login/LocationForm.jsx
  return (
    <>
      <form action="" className='m-auto mt-7 w-80 flex-col rounded-md  flex px-5 py-10 w-80 border border-gray-400'>
              <img src="/images/Amazon-2.png" className='h-10 m-auto' alt="" />
              <span className='text-xl font-semibold block'>Enter Your Deliviry Address</span>
              <label htmlFor="input" className='text-sm font-semibold'>
                FullName
              </label>
              <input 
                type="text" 
                placeholder='fullname'
                name='fullName'
                className='text-sm py-1 mb-3 border pl-1 border-gray-400 w-full'
                value={location.fullName}
                onChange={handleLocationData}
              />
              <label htmlFor="input" className='text-sm font-semibold'>
                  Village
              </label>
              <input 
                type="text" 
                placeholder='village name'
                name='villageName'
                className='text-sm py-1 mb-3 border pl-1 border-gray-400 w-full'
                value={location.villageName}
                onChange={handleLocationData}
              />
              <label htmlFor="input" className='text-sm font-semibold'>
                  Mandal
              </label>
              <input 
                type="text" 
                placeholder='Mandal Name'
                name='mandalName'
                className='text-sm py-1 mb-3 border pl-1 border-gray-400 w-full'
                value={location.mandalName}
                onChange={handleLocationData}
              />
              <label htmlFor="input" className='text-sm font-semibold'>
                Pincode
              </label  >
              <input 
                type="text" 
                placeholder='Pincode'
                name='pinCode'
                className='text-sm py-1  mb-3 border pl-1 border-gray-400 w-full'
                value={location.pinCode}
                onChange={handleLocationData}
              />
              <label htmlFor="input" className='text-sm font-semibold'>
                District
              </label>
              <input 
                type="text" 
                placeholder='District'
                name='districtName'
                className='text-sm py-1 mb-3 border pl-1 border-gray-400 w-full'
                value={location.districtName}
                onChange={handleLocationData}
              />
              <label htmlFor="input" className='text-sm font-semibold'>
                State
              </label>
              <input 
                type="text" 
                placeholder='state'
                name='stateName'
                className='text-sm mb-5 py-1 pl-1 mb-3 border border-gray-400 w-full'
                value={location.stateName}
                onChange={handleLocationData}
            />
             <div className='w-72 h-1 bg-gray-400 mt-5 relative flex justify-center'>
              <span className='text-xs font-semibold text-gray-700 absolute -top-2 bg-white px-2'>
                Please add a valid address </span>
            </div>
             <span className='text-sm font-semibold px-1 mt-3'>
              Add delivery address to make your delivery super fast
             </span>
             <button type='submit' onClick={handleSubmit}  className='py-2 hover:bg-yellow-500 rounded-md text-sm w-full bg-yellow-400 mt-5'>Add address</button>
          </form>
    </>
  )
}

export default LocationForm
