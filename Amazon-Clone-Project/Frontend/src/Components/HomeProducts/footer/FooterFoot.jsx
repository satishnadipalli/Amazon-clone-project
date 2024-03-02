import React from 'react'

const FooterFoot = () => {
  return (
    <div className='w-full h-16 flex gap-5 items-center justify-center'>
                <img src="/images/amazon.png" alt="" className='h-5' />
                <select name="" id="" className='text-white mb-1 bg-transparent border border-blue-200 h-6 text-sm rounded-md'>
                    <option value="">English</option>
                    <option value="">Hindi</option>
                    <option value="">Telugu</option>
                    <option value="">French</option>
                </select>
    </div>
  )
}

export default FooterFoot
