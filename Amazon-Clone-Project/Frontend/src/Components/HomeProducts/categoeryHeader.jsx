import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"

const categoeries = [
    'All',
    'Mobiles',
    'Home',
    'Fashion',
    'Amazon',
    'Deals',
    'Computers'
  
  ]

   
const CategoeryHeader = ({getCategoery,setClickedCategoery}) => {
  
  const {loginDetails} = useSelector(state=>state.cart);

  
  return (
    <div className='h-7 w-full  mt-9  flex items-center mb-6' style={{borderBottom:'1px solid rgb(160, 160, 160)'}}>
        <div className=' w-full h-7 pb-1  flex justify-around items-center '>
            {
              categoeries.map((element,index)=>{
                return (
                  <Link to={`/productCategoery/${element}`} key={index} >
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
