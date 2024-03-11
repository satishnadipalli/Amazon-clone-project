import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTotalUsers } from '../../Redux/CartSlice';
import { EditAdmin } from '../../HeroIcons';
import UpdateAdimModel from './updateAdimModel';

const Users = () => {
  const dispatch = useDispatch();
  const {loginDetails, TotalUsers} = useSelector(state=>state.cart);
  const [clickedUser,setClickedUser] = useState(null);
  const [isOpen,setIsOpen] = useState(false);
  useEffect(()=>{
    async function getUsers(){
      const response = await fetch("http://localhost:3000/getallUsers",{
        method:"GET",
        headers:{
          "Authorization" : `Bearer ${loginDetails.token}`,
        }
      });
      if(response.ok){
        const {filteredUsers} = await response.json();
        dispatch(addTotalUsers(filteredUsers))
      }

    }
    getUsers();
  },[]);



  function handleOpen({email}){
    setClickedUser({email})
    console.log(email,"your email add")
    setIsOpen(true);
  }


  return (
    <div className='w-full h-screen p-7 relative'>
      <h1 className='text-xl font-semibold text-gray-600'>Users</h1>
      <div className='w-full flex justify-between h-14 items-center'>
        <button className='px-7 py-1 text-sm text-white font-semibold bg-orange-600 h-7'>
          Download csv
        </button>
        <div className='flex text-sm font-semibold text-gray-500 justify-center items-center gap-2'>
          <span>Search</span>
          <input type="text" className=' border-2 border-gray-600 py-2 rounded-md text-sm h-6 px-1 outline-none ' placeholder='search'/>
        </div>
      </div>
      <table className='w-full'>
        <thead className='w-full'>
          <tr>
          <td className='text-sm font-semibold border pl-3 border-gray-400 h-7'>Sr No</td>
            <td className='text-sm font-semibold border pl-3 border-gray-400 h-7'>User Id</td>
            <td className='text-sm font-semibold border pl-3 border-gray-400 h-7'>Profile Photo</td>
            <td className='text-sm font-semibold border pl-3 border-gray-400 h-7'>User Name</td>
            <td className='text-sm font-semibold border pl-3 border-gray-400 h-7'>User Email</td>
            <td className='text-sm font-semibold border pl-3 border-gray-400 h-7'>Created On</td>
            <td className='text-sm font-semibold border pl-3 border-gray-400 h-7'>Admin</td>
            </tr>
      </thead>
        <tbody>
            {
              TotalUsers && TotalUsers.map((element,index)=>{
                return (
                  <tr className={`text-sm text-gray-700 font-semibold border border-gray-400 h-12 ${index%2==0 ? "bg-gray-100" : "bg-white"}`}>
                    <td className='text-sm font-semibold border pl-3 border-gray-400'>{index}</td>
                    <td className='text-sm font-semibold border pl-3 border-gray-400'>{element._id}</td>
                    <td className='text-sm  flex justify-center w-full  font-semibold  pl-3 items-center  '>
                      < img className='h-10 w-10 rounded-full' src={"http://localhost:3000/uploads/"+element.profilePhoto} alt="" />
                    </td>
                    <td className='text-sm font-semibold border pl-3 border-gray-400'>{element.lastname}</td>
                    <td className='text-sm font-semibold border pl-3 border-gray-400'>{element.email}</td>
                    <td className='text-sm font-semibold border pl-3 border-gray-400'>{element.createdDate}</td>
                    <td className='text-sm font-semibold border pl-3 border-gray-400 gap-3 '>{element.isAdmin ? 'True' : "False"}
                     <div onClick={()=>handleOpen({email:element.email})}><EditAdmin/></div></td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
      {isOpen && <UpdateAdimModel clickedUser={clickedUser}  setClickedUser={setClickedUser} setIsOpen={setIsOpen}/>}
    </div>
  );
};

export default Users;
