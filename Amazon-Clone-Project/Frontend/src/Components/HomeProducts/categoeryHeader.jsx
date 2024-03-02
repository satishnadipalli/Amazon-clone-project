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
    <div className='h-24 w-full -mb-10 flex' style={{borderBottom:'1px',borderBottomColor:'gray'}}>
        <div className='borders w-full h-9  flex justify-around items-center '>
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
