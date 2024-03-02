import React from 'react'

const SubSaved = ({element}) => {
  return (
    <div  className='text-black w-44  flex-shrink align-top shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] relative p-4'>
          <img src={element.image} alt="max-h-10" className='pb-2 max-h-24 m-auto'/>
          <span className='hello text-rr font-semibold truncate-3-lines'>
              {element.description}
          </span>
          <div className='flex items-center pt-2'>
            <img src={element.image} alt="" className='h-3'/>
            <span className='text-blue-400 text-sm font-semibold'>{element.rating} ratings</span>
          </div>
            <span className='text-blue-400  text-sm font-semibold'>saved on {element.time}</span>
          <div className='relative pt-2'>
            <span className='text-sm top-0 absolute ml-1 pt-1 font-bold'>
              $
              </span>
              <span className='text-gray-700 pl-3 text-lg font-sans'> 
              {element.price}
            </span>
            <span className=' text-xs font-sans  text-gray-500'> M.R.P :<span className=' line-through'>$678</span></span>
           
          </div>
        </div>
  )
}

export default SubSaved
