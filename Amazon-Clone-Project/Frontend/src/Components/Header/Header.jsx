import React, { useEffect, useState } from 'react'
import { ArrayHead } from '../HomeProducts/Functions';
import './Header.css';
import { Bag, DownArrow, Hamberger, LocationIcon, SearchIcon } from '../../HeroIcons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Suggetion from './Suggetion';
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
      <header className='overflow-visible h-25  grid relative pt-3'> {/* bg-gray-800 */}
        <div className='flex overflow-visible h-22  items-center justify-evenly'>{/* bg-gray-900*/}
          <div className=' image--div flex items-center hover:border-1 hover:border-white'>
            <img src="https://ativancouver.ca/wp-content/uploads/jet-engine-forms/12/2023/01/lord-krishna-arjuna-logo-small-sig-1536x1536.png" alt="non image" className='logo w-10 h-10' />
            <span className='font-bold text-gray-800 leading-4'>KRI-SA SITEs</span>
          </div>
          <div className='location--name flex items-center ml-2  sm:flex' onClick={()=>displayUserAddress()}>
            <LocationIcon />
            <div className='text-gray-700 '>
              <span style={{fontSize:"14px"}} className='block text-xs text-gray-600 font-semibold flex'>Deliver to <DownArrow/></span>
              {/* <span  className='block text-sm font-bold'>{ defaultUserLocation?.fullName ? defaultUserLocation.fullName : "address" }</span> */}
            </div>
          </div>
          <div>
            <div className='search--div relative h-full rounded-md ml-3  '>
                  <div className='search--bar--div flex rounded-md w-100 flex  items-center justify-center'>
                    <input type="text" onChange={SearchProducts} name='search' placeholder='Search Amazon.in' className='rounded-lg h-12 text-gray-700 rounded-tr-none rounded-br-none outline-none text-sm font-semibold pl-2 pt-1 pb-1 w-80  bg-gray-200'/>
                    <div className='search-icon-div h-12  w-9 bg-gray-200 flex items-center justify-center outline-none rounded-lg rounded-tl-none rounded-bl-none'>
                      <SearchIcon />
                    </div>
                  </div>
                  
              </div>
              {
                showSuggetions && <Suggetion searchData ={searchData} showSuggetions={showSuggetions} setShow={setShow}/>
              }
          </div>
          
          <div className='lang--div w-8 text-gray-700 font-bold text-sm h-full flex items-center ml-2'>
            <span>ENG</span>
          </div>
          { 
            
            <Link to={loginDetails ? '' : '/Auth'}>
            <div className='location--name items-center text-gray-700 ml-2 flex flex-col items-center justify-center h-full'>
                
                  <span className='block text-xs '>Hello {loginDetails?.email ? loginDetails.lastname : 'Guest'}</span>
              
                <span  className='block text-sm font-bold '>Accounts & Lists</span>
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
