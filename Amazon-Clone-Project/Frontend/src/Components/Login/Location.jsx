import React, { useEffect, useState } from 'react'
import AddressTable from './AddressTable';
import LocationForm from './LocationForm';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addAddress } from '../../Redux/CartSlice';
import { Plus } from '../../HeroIcons';
import {v4 as uuid4} from 'uuid';
const Location = () => {
  const dispatch = useDispatch();
  const [displaydelete,setdisplayDelete] = useState(false)
  const {loginDetails} = useSelector(state=>state.cart);
  const [showTable, setShowTable] = useState(false);
  const [showlocation, setShowLocation] = useState(false);
  const { userLocation } = useSelector(store=>store.cart);
  const [location,setLocation] = useState({
    fullName:'',
    villageName :'',
    mandalName : '',
    districtName : '',
    pinCode :'',
    stateName :'',
    id : ''
  });

  useEffect(()=>{
    loginDetails ? console.log("ji") : console.log("flase")
    if(loginDetails){
      const fetchAddress = async(req,res) =>{
        const response = await fetch("http://localhost:3000/getaddress",{
          method:"GET",
          headers:{
            "Authorization" : `Bearer ${loginDetails.token}`
          }
        })
        
        if(response.ok){
          const {alladdress} = await response.json();
          dispatch(addAddress(alladdress));
          setShowTable(true);
          setShowLocation(false);
        }
      }
  
      fetchAddress();
    }
  },[])
  

  function handleLocationData(event){
    const {type,value,name} = event.target;
    setLocation((previousValue)=>{
      return{
        ...previousValue,
        [name] : value
      }
    })
  }
  async function handleSubmit(event) {
    event.preventDefault();
  
    if(loginDetails){
      try {
        const response = await fetch("http://localhost:3000/add-address", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${loginDetails?.token}`
          },
          body: JSON.stringify(location)
        });
    
        if (response.ok) {
         
          const getAddressResponse = await fetch("http://localhost:3000/getaddress", {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${loginDetails?.token}`
            }
  
          });
    
          if (getAddressResponse.ok) {
            const { alladdress } = await getAddressResponse.json();
           
            dispatch(addAddress(alladdress));
            setShowTable(true);
            setShowLocation(false);
  
          } else {
  
            console.log("Error fetching addresses:", getAddressResponse.statusText);
  
          }
        } else {
          console.log("Error adding address:", response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  
  function showAddAddress(){
    setShowLocation(true);
  }



  return (
    <div className='p-10'>
      {displaydelete && <p>deleting Address........</p>}
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
      
      !showlocation && userLocation.length > 0 && 
        userLocation.map((element,index)=>{
          return( 
          <AddressTable element={element} key={element._id} displaydelete={displaydelete} setdisplayDelete={setdisplayDelete}/>
        )
        })
    }
      </div>
    </div>
    
  )
}

export default Location
