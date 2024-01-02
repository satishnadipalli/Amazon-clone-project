import React, { useState } from 'react'
import AddressTable from './AddressTable';
import LocationForm from './LocationForm';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addAddress } from '../../Redux/CartSlice';
import { Plus } from '../../HeroIcons';
import {v4 as uuid4} from 'uuid';
const Location = () => {
  const dispatch = useDispatch();

  const [showTable, setShowTable] = useState(false);
  const [showlocation, setShowLocation] = useState(false);
  
  const [location,setLocation] = useState({
    fullName:'',
    villageName :'',
    mandalName : '',
    districtName : '',
    pinCode :'',
    stateName :'',
    id : ''
  });

  

  const { user } = useSelector(store=>store.cart);
  console.log("the user is ",user)
  
  console.log("userFrom the locaation",user);

  function handleLocationData(event){
    const {type,value,name} = event.target;
    setLocation((previousValue)=>{
      return{
        ...previousValue,
        [name] : value
      }
    })
  }
  function handleSubmit(event){
    event.preventDefault();
    dispatch(addAddress({
      ...location,
      id : uuid4()
    }));
    setShowTable(true);
    setShowLocation(false);
  }
  
  function showAddAddress(){
    setShowLocation(true);
  }



  return (
    <div className='p-10'>
      <div className='flex w-full justify-around '>
          <div className='flex items-center w-1/2 m-auto'>
              <div className=''>
                <span className='block text-sm font-semibold text-gray-600 pl-10'>Your Account =+ <span className='text-orange-500'>Your Address</span></span>
                <span className='text-xl font-semibold text-gray-700 float-left pl-10'>Add Your Address</span>
              </div>
          </div>
      </div>
    <div className='pb-10 gap-5  w-full flex items-center justify-center p-10 '>
      
        {
          showlocation ? <LocationForm location={{location,setLocation,handleLocationData,handleSubmit}} />
                    : 
          <div onClick={showAddAddress} className='rounded-md border-dashed ddd float-right mr-5 p-5 flex items-center justify-center pt-7 h-56 w-60 border-2 border-gray-400'>
              <Plus/>
          </div>
        }
    {
      
      !showlocation && user.length > 0 && 
        Object.values(user).map((element,index)=>{
          return( 
          <AddressTable element={element} key={element.id}/>
        )
        })
    }
      </div>
    </div>
    
  )
}

export default Location
