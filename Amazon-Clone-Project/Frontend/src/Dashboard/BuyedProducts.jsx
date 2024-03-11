import React from 'react'
import { Buy } from '../HeroIcons'

const BuyedProducts = () => {
  return (
    <div className='w-full flex-col flex justify-center items-center mt-10 '>
      <div className=' h-14 w-14 rounded-full flex items-center justify-center border-2 border-black'>
        <Buy/>
        
      </div>
      <span className='text-lg font-extrabold text-gray-900 mt-5'>No Products buyed Yet</span>
    </div>
  )
}

export default BuyedProducts
