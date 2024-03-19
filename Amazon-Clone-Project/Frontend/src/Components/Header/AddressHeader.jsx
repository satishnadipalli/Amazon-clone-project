import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAddress } from '../../Redux/CartSlice';

const AddressHeader = ({dispalyloc,setloc}) => {
  const {userLocation,loginDetails} = useSelector(state=>state.cart);
  const [locationOpen,setLocationOpen] = useState(false)
  const dispatch = useDispatch()


  const handleDefault = async(addressId)=>{
    if(loginDetails){
        const response = await fetch(`http://localhost:3000/updateAddress/${addressId}`,{
        method:"PATCH",
        headers:{
          "Authorization":`Bearer ${loginDetails.token}`
        }
        })

        if(response.ok){
          const getAddressResponse = await fetch("http://localhost:3000/getaddress", {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${loginDetails.token}`
          }
        
      });
      
        if(getAddressResponse.ok){
            const { alladdress } = await getAddressResponse.json();
            console.log(alladdress,"from address table");
            dispatch(addAddress(alladdress));
        
          }
      }
    }
  }

  function handle(){
    setloc((pr)=>!pr)
  }

  function goToLocation(){
    window.location = "/location"
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Set the background color or use 'transparent' as per your design
        zIndex: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}

      onClick={handle}
    >
      
      <div className='w-72 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 dashboard-inner-div'>
        {userLocation.map((element) => (
          <div key={element._id} className='w-72 h-14 flex'>
            <input
              type='radio'
              checked={element?.default}
              className=''
              onChange={() => {
                handleDefault(element._id);
              }}
            />
            <div className='w-full flex flex-col justify-center pl-3'>
              <span className='block text-xs font-semibold text-gray-700'>{element.fullName}</span>
              <span className='block text-xs font-semibold text-gray-600'>
                {element.villageName} {element.mandalName} Andhra Pradesh
              </span>
            </div>
          </div>
        ))}
        <span  className='pl-5 font-semibold text-sm text-blue-400 cursor-pointer' onClick={goToLocation}>Add a location</span>
      </div>
    </div>
  )
}

export default AddressHeader
