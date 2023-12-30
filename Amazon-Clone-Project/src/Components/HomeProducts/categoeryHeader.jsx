import React from 'react'
import {Link} from "react-router-dom"
const categoery = [
    'All',
    'Mobiles',
    'Home',
    'Fashion',
    'Amazon',
    'Deals',
    'Computers'
  
  ]
const CategoeryHeader = () => {
  return (
    <div className='h-24 w-full -mb-10 flex' style={{borderBottom:'1px',borderBottomColor:'gray'}}>
        <div className='borders w-full h-9  flex justify-around items-center '>
            {
              categoery.map((element,index)=>{
                return (
                  <Link to={`/productCategoery/${element}`} key={index}>
                    <span className='text-xs font-semibold' >{element}</span>
                  </Link>
                )
              })
            }
        </div>
    </div>
  )
}

export default CategoeryHeader
