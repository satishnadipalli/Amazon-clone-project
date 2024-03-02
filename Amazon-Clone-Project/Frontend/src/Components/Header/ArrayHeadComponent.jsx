import React from 'react'
import Head from './head'
import { Hamberger } from '../../HeroIcons'
import { ArrayHead } from '../HomeProducts/Functions'
const ArrayHeadComponent = () => {
  
  function handleGetfiltere(Categoery){
    console.log(Categoery);
  }
  return (
    <div className='flex w-21 gap-2  justify-between'>
            <div className='flex w-21 items-center'>
              <div className='flex gap-1'><a className='px-2 text-sm font-semibold text-white px-2 flex items-center gap-2 whitespace-nowrap' href="#"><Hamberger/>All</a></div>
              <a className='px-2 py-1 text-sm font-semibold text-white px-2 hov whitespace-nowrap' href="#">Amazon miniTV</a>
                {
                  ArrayHead.map((element,index)=>{
                    return(
                      <a key={index} onClick={()=>handleGetfiltere(element)} className='px-2 py-1 text-sm font-semibold text-white px-2 hov whitespace-nowrap' href="#">
                        {element}
                      </a>
                    )
                  })
                }
            </div>
            <Head/>
        </div>
  )
}

export default ArrayHeadComponent
