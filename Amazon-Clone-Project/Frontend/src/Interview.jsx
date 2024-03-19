import React from 'react'

const Interview = () => {
  return (
    <div className='w-full flex items-center justify-center bg-blue-600 h-screen'>  
        <div  className=' bg-white h-screen p-5'>
            <div className='w-full  flex justify-center'>
                <h1 className='text-2xl font-bold text-gray-700'>
                Products and solutions for every stage of your app development journey
                </h1>
            </div>
            <div className='flex w-full h-screen gap-5 mt-16'>
                <div style={{width:"33%", height:"80%"}} className=' h-full bg-gray-200 rounded-md'>
                    <div style={{height:"40%"}} className=''>

                    </div>
                    <div className='flex items-center justify-center'>
                        <span className='text-2xl font-bold text-gray-7000'>Built</span>
                    </div>  
                </div>
                <div style={{width:"33%", height:"80%"}}  className='w-1/4 bg-gray-200 rounded-md' >

                </div>
                <div style={{width:"33%", height:"80%"}}  className='w-1/4 bg-gray-200 rounded-md'>

                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Interview
