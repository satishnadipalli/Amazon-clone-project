import React, { useState } from 'react'
import AddressTable from './AddressTable';
import LocationForm from './LocationForm';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addAddress } from '../../Redux/CartSlice';
import { Plus } from '../../HeroIcons';
const Location = () => {
  const dispatch = useDispatch();
  const [showTable,setShowTable] = useState(false);
  const [showlocation,setShowLocation] = useState(false);
  const [location,setLocation] = useState({
    fullName:'',
    villageName :'',
    mandalName : '',
    districtName : '',
    pinCode :'',
    stateName :''
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
    dispatch(addAddress(location));
    setShowTable(true);
    setShowLocation(false);
  }
  
  function showAddAddress(){
    setShowLocation(true);
  }


  return (
    <div className=''>
      
    <div className='pb-10 w-full flex items-center justify-center'>
    <div className='w-5/12 '>
      
      {
        showlocation ? <LocationForm location={{location,setLocation,handleLocationData,handleSubmit}} />
                  : 
      <div onClick={showAddAddress} className=' float-right mr-5 mt-5 p-5 flex items-center justify-center pt-7 h-56 w-60 border border-gray-400'>
          <Plus/>
      </div>
      }
    </div>
    <div className='w-full items-center justify-center  h-screen grid grid-cols-2 gap-2 pt-5'>
      <div className='w-full flex flex-wrap gap-5'>
      {
      showTable && user.length > 0 && 
      
              Object.values(user).map((element)=>{
                return( 
                <AddressTable element={element} />
              )
              })
        }
        </div>
      </div>
      </div>
    </div>
    
  )
}

export default Location
