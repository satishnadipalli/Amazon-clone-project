import React from 'react'
import { ratingImage } from '../Components/HomeProducts/Functions'

const SubSaved = ({element}) => {
  console.log("element",element)
  return (
    <div  className=' rounded-md text-black w-52 h-80 hover:scale-105 duration-200 flex-shrink align-top shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] relative p-4'>
          <img src={"http://localhost:3000/uploads/"+element.image[0]} alt="max-h-10" className='pb-2 max-h-24 m-auto'/>
          <span className='hello text-rr  font-semibold truncate-3-lines'>{element.title}</span>
          <span className='hello text-rr  font-semibold truncate-3-lines'>
              {element.description}
          </span>
          <div className='flex text-sm text-gray-700 items-center pt-2 gap-2'>
            <img src={ratingImage(element.avgRating)} alt="" className='h-3'/>
            <span>Rating : <span className='font-semibold'>{element.avgRating}</span></span>
          </div>
          
          <div className='relative pt-2'>
          Price :
            <span className='text-sm top-0 absolute ml-1 pt-1 font-bold'>
              $
              </span>
              <span className='text-gray-700 pl-3 text-lg font-sans'> 
              {element.price}
            </span>
            <span className=' text-xs font-sans block  text-gray-500'> M.R.P :<span className=' line-through'>$678</span></span>
            <span className='text-blue-400  text-sm font-semibold'>saved on {element.time}</span>
            <span className='text-blue-900 block  text-sm font-semibold'>This item is saved in cart</span>
            <button className='font-semibold bg-yellow-500 mt-2 text-sm w-full py-1 text-white'>Shop Now</button>
          </div>
        </div>
  )
}

export default SubSaved
