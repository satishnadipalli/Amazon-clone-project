import React from 'react'
import { Hamberger } from '../../HeroIcons'
import { ArrayHead } from '../HomeProducts/Functions'
const ArrayHeadComponent = () => {
  
  function handleGetfiltere(Categoery){
    console.log(Categoery);
  }
  return (
    <div style={{borderTop:"1px solid rgb(160, 160, 160)",borderBottom:"1px solid rgb(160, 160, 160)"}} className='flex bg-white w-21 mt-3 gap-2 py-2 text-gray-700  bg-white z-40 mb-6 justify-between'>
            <div className='flex w-21 items-center'>
              <div className='flex gap-1'><a className='px-2 text-sm font-semibold  px-2 flex items-center gap-2 whitespace-nowrap' href="#"><Hamberger/>All</a></div>
              <a className='px-2 py-1 text-sm font-semibold  px-2 hov whitespace-nowrap' href="#">Amazon miniTV</a>
                {
                  ArrayHead.map((element,index)=>{
                    return(
                      <a key={index} onClick={()=>handleGetfiltere(element)} className='px-2 py-1 text-sm font-semibold  px-2 hov whitespace-nowrap' href="#">
                        {element}
                      </a>
                    )
                  })
                }
            </div>
            <div className='hidden sm:flex'>
              <span className='px-2 py-1 text-sm font-semibold'>
              New Launches from Electronics & more | Shop now
              </span>
            </div>
        </div>
  )
}

export default ArrayHeadComponent
