import React from 'react'

const UniqueProduct = ({img}) => {
  return (
    <div className='border-2 0 flex flex-col justify-center items-center'>
      <img src={img} alt=" no image" className='pt-2 h-20' />
      <div className='flex -ml-10 mt-4'>
        <div className=' bg-red-600 text-xs  px-2 py-0 text-white inline'>50% off</div>
        <span className='text-sm inline ml-1 text-red-600 font-bold'>Deal</span>
      </div>
    </div>
  )
}

export default UniqueProduct
