import React from 'react'
import { useSelector } from 'react-redux'
import { Saved,New,Buy } from '../../HeroIcons'

const Profile = ({handleTab,handleProfile,logouts,tab}) => {

  const {loginDetails,userLocation,defaultLocation} = useSelector(state=>state.cart);
  console.log(defaultLocation,"[]]]]]]]]]]]][]");
  return (
    <div className='w-full  flex flex-col items-center select-none'>
    <div className=' grid  pt-10 '>
        <div className='full  flex gap-24  pt-10' >
            <div className='w-36 h-36 p-1 border-2 border-gray-500  rounded-full'>
            <img
                className='w-36 h-36 h-full rounded-full'
                src={"http://localhost:3000/uploads/"+loginDetails?.profilePhoto}
                alt="No image"
            />
            </div>
            <div className='w-1/2'>
                <div className='flex justify-between gap-14'>
                <span className='text-lg font-semibold'>{loginDetails?.lastname}</span>
                <button className=' py-1  px-4 text-sm rounded-md font-semibold bg-gray-300 border border-1'>Edit Profile</button>
            </div>
                <div className='h-8 flex justify-between mt-3 text-sm font-bold text-gray-700'>
                    <span>0 orders</span>
                    <span>0 deliverd</span>
                    <span>10 cartItems</span>
                </div>
                <div className=''>
                <span className='text-sm font-semibold text-gray-700'><span className='text-sm font-semibold text-black'>Email: </span>{loginDetails?.email}</span>
                { defaultLocation && <div className='w-full  h-24 mt-5 '>
                        <table className='w-full text-sm font-semibold text-gray-600'>
                            <thead>
                                <tr className='font-sm'>                
                                    <td>Village</td>
                                    <td>{defaultLocation.villageName}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pincode</td>
                                    <td>{defaultLocation.pinCode}</td>
                                </tr>
                                <tr>
                                    <td>Mandal</td>
                                    <td>{defaultLocation.mandalName}</td>
                                </tr>
                                <tr>
                                    <td>State</td>
                                    <td>{defaultLocation.stateName}</td>
                                </tr>
                            </tbody>
                        </table>
                </div>}
                {
                    !defaultLocation && 
                    <div style={{width:"100%"}} className='border-1 mt-5 gre flex items-center justify-center py-2 text-sm'>
                        <span>Please add select Your Default Address</span>
                    </div>

                }
                <span className='flex justify-between mt-3' ></span>
                </div>
            </div>
            </div>
            <hr style={{ width: "100%", height: "1px",backgroundColor:"gray"}} className='mt-10' />
            
        </div>
    </div>
  )
}

export default Profile
