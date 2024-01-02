import React from 'react'
import './Header.css'
import { Bag, Hamberger, LocationIcon, SearchIcon } from '../../HeroIcons'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {
  const {totalItems,loginDetails} = useSelector((store)=>store.cart);
  const ArrayHead = [
    'Amazon miniTV',
    'Sell',
    'Gift Cards',
    'Buy Again',
    'Browsing History',
    'Your Amazon.in',
    'Amazon Pay',
    'Coupons',
    'Prime',
    'Gift Ideas'
  ];
  return (
    <header className=' h-25 bg-gray-800 grid'>
      <div className='flex h-22 bg-gray-900 items-center justify-evenly'>
        <div className=' image--div  flex items-center hover:border-1 hover:border-white'>
        <img src="./public/images/amazon.png" alt="non image" className='logo sm:w-16' />

        </div>
        <div className='location--name flex items-center ml-2 hidden sm:flex'>
          <LocationIcon />
           <div className='text-white'>
             <span className='block text-xs'>Deliver to {loginDetails?.email ? loginDetails?.email.substring(0,6) : "address"}</span>
             <span  className='block text-sm font-bold'>Rajamundry 533101</span>
           </div>
        </div>
        <div className='search--div h-full flex items-center rounded-md overflow-hidden ml-3'>
            <div className='search--bar--div flex rounded-md overflow-hidden'>
              <input type="text" placeholder='Search Amazon.in' className=' h-9 outline-none text-sm font-semibold pl-2 pt-1 pb-1 w-100 min-w-[150]  whitesmoke '/>
              <div className='search-icon-div h-9  w-9 bg-orange-300 flex items-center justify-center outline-none'>
                <SearchIcon/>
              </div>
            </div>
        </div>
        <div className='lang--div w-8 text-white font-bold text-sm h-full flex items-center ml-2'>
          <span>ENG</span>
        </div>
        <Link to={ '/Auth' }>
          <div className='location--name items-center ml-2 flex flex-col items-center justify-center h-full'>
              
                <span className='block text-xs text-white'>Hello {loginDetails?.email ? loginDetails.email : 'Guest'}</span>
            
              <span  className='block text-sm font-bold text-white'>Accounts & Lists</span>
          </div>
        </Link>
        <div className='location--name items-center ml-2 flex flex-col items-center justify-center h-full'>
            <span className='block text-xs text-white'>Returns</span>
            <span  className='block text-sm font-bold text-white'>& orders</span>
        </div>
        <Link to={'/cart'}>
          <div className='location--name items-center ml-2 w-24 flex flex-col items-center justify-center h-full relative'>
            <span className='block text-xs text-white'><Bag/></span>
            <span className='block text-sm font-bold text-white gap-span absolute top-3 right-6 mt-1 mr-1 bg-gray-700 w-4 h-4 flex items-center justify-center rounded-full'>
              {totalItems}
            </span>
          </div>
        </Link>
        
      </div>
      <div className='flex w-21 gap-2  justify-between'>
          <div className='flex w-21 items-center'>
            <div className='flex gap-1'><a className='px-2 text-sm font-semibold text-white px-2 flex items-center gap-2 whitespace-nowrap' href="#"><Hamberger/>All</a></div>
            <a className='px-2 py-1 text-sm font-semibold text-white px-2 hov whitespace-nowrap' href="#">Amazon miniTV</a>
              {
                ArrayHead.map((element,index)=>{
                  return(
                    <a key={index} className='px-2 py-1 text-sm font-semibold text-white px-2 hov whitespace-nowrap' href="#">
                      {element}
                    </a>
                  )
                })
              }
          </div>
          <div className='hidden sm:flex'>
            <span className='px-2 py-1 text-sm font-semibold text-white'>
              New Launches from Electronics & more | Shop now
            </span>
          </div>

      </div>
    </header>
  )
}

export default Header;
