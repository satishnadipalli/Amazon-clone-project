import React from 'react'
import { Link } from 'react-router-dom'
import { Bag } from '../../HeroIcons'
const TotalItems = ({totalItems}) => {
  return (
    <Link to={'/cart'}>
        <div className='location--name items-center ml-2 w-24 flex flex-col items-center justify-center h-full relative'>
            <span className='block text-xs text-white'><Bag/></span>
            <span className='block text-sm font-bold text-white gap-span absolute top-3 right-6 mt-1 mr-1 bg-gray-700 w-4 h-4 flex items-center justify-center rounded-full'>
            {totalItems}
            </span>
        </div>
    </Link>
  )
}

export default TotalItems
