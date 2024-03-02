import React, { useEffect, useState } from 'react'
import { ArrayHead } from '../HomeProducts/Functions';
import './Header.css';
import { Bag, Hamberger, LocationIcon, SearchIcon } from '../../HeroIcons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Suggetion from './Suggetion';
import Head from './head';
import TotalItems from './TotalItems';

import ReturnsAndOrders from './ReturnsAndOrders';
import AddressHeader from './AddressHeader';
import ArrayHeadComponent from './ArrayHeadComponent';


const Header = () => {

  const [searchQuery,setSearchQuery] = useState('');
  const [searchData,setSearchData] = useState([]);
  const [showSuggetions,setShow] = useState(false);
  const [dispalyloc,setloc] = useState(false);
  const {totalItems,loginDetails,user,userLocation} = useSelector((store)=>store.cart);
  
  useEffect(() => {

    console.log("login details", loginDetails);
    
  }, [loginDetails]);

  useEffect(()=>{
    const SendApiCall = async()=>{
      try {
        const SuggetionsData = await fetch('http://localhost:5173/public/data/suggestions.json')
        const response = await SuggetionsData.json();
        const filterd = response.filter((product) => {
          const lowercasedTitle = product.title.toLowerCase();
          const SearchQuerry = searchQuery.toLowerCase()
          return lowercasedTitle !== SearchQuerry && lowercasedTitle.includes(SearchQuerry);
        });

        if(filterd.length>0){
          setSearchData(filterd);
        }
      } catch (error) {
        console.log(error);
      }
    }
    SendApiCall();
  },[searchQuery]);

  

  function SearchProducts(event){
    setSearchQuery(event.target.value);
    if(event.target.value.length > 0){
      setShow(true)
    }else{
      setShow(false);
    }
  }

  function displayUserAddress() {
    setloc((previousVal) => !previousVal);
    
  }


  const defaultUserLocation = userLocation.find((location)=>location?.default === true);

  return (
    <div>
      <header className='overflow-visible h-25 bg-gray-800 grid relative'>
        <div className='flex overflow-visible h-22 bg-gray-900 items-center justify-evenly'>
          <div className=' image--div flex items-center hover:border-1 hover:border-white'>
            <img src="./public/images/amazon.png" alt="non image" className='logo' />
          </div>
          <div className='location--name flex items-center ml-2  sm:flex' onClick={()=>displayUserAddress()}>
            <LocationIcon />
            <div className='text-white'>
              <span className='block text-xs'>Deliver to { defaultUserLocation?.fullName ? defaultUserLocation.fullName : "address" }</span>
              <span  className='block text-sm font-bold'>{defaultUserLocation?.mandalName ? defaultUserLocation.mandalName : "add"} {defaultUserLocation?.pinCode && defaultUserLocation?.pinCode}</span>
            </div>
          </div>
          <div>
            <div className='search--div relative h-full rounded-md ml-3'>
                  <div className='search--bar--div flex rounded-md '>
                    <input type="text" onChange={SearchProducts} name='search' placeholder='Search Amazon.in' className='min-w-[100px] h-9 outline-none text-sm font-semibold pl-2 pt-1 pb-1 w-100 min-w-[150]  whitesmoke '/>
                    <div className='search-icon-div h-9  w-9 bg-orange-300 flex items-center justify-center outline-none'>
                      <SearchIcon />
                    </div>
                  </div>
                  
              </div>
              {
                showSuggetions && <Suggetion searchData ={searchData} showSuggetions={showSuggetions} setShow={setShow}/>
              }
          </div>
          
          <div className='lang--div w-8 text-white font-bold text-sm h-full flex items-center ml-2'>
            <span>ENG</span>
          </div>
          { 
            
            <Link to={loginDetails ? '' : '/Auth'}>
            <div className='location--name items-center ml-2 flex flex-col items-center justify-center h-full'>
                
                  <span className='block text-xs text-white'>Hello {loginDetails?.email ? loginDetails.lastname : 'Guest'}</span>
              
                <span  className='block text-sm font-bold text-white'>Accounts & Lists</span>
            </div>
          </Link>
          }

          <ReturnsAndOrders/>

          <TotalItems totalItems={totalItems}/>
          
        </div>
        <ArrayHeadComponent/>
      </header>
      {dispalyloc && <AddressHeader setloc={setloc} dispalyloc={dispalyloc}/>}
    </div>
  )
}

export default React.memo(Header);
