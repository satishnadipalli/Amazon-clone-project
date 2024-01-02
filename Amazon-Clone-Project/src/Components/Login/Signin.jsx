import React from 'react'
import { useState } from 'react';
import { auth } from '../../firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signin = ({authes}) => {
  const [signInData,setSignData] = useState({
    lastname : '',
    email : '',
    password : ''
  });
  const {auths,setAuth} = authes;


  function handleSignIn(event){
    const {name,value} = event.target;
    setSignData((previousValue)=>{
      return{
        ...previousValue,
        [name] : value
      }
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log("error occured")
    createUserWithEmailAndPassword(auth,signInData.email,signInData.password)
      .then((userCredientials)=>console.log(userCredientials))
      .catch((error)=>console.log(error))


  }


  return (
    <div className='w-full flex items-center flex-col pb-24'>
      <img src="/images/Amazon-2.png" alt="" className='h-10 '/>
      <form action="submit" onSubmit={(event)=>handleSubmit(event)} className='flex-col rounded-md  flex px-5 py-10 w-80 border border-gray-400'>
        <span className='text-xl font-semibold'>Create Account</span>
        <label htmlFor="input" className='text-sm font-semibold'>
            Your LastName
        </label>
        <input 
          type="text" 
          className='border border-gray-400 w-full mb-3'
          onChange={handleSignIn}  
          value={signInData.lastname}
          name='lastname'
        />
        <label htmlFor="input" className='text-sm font-semibold'>
            Email or mobile phone number
        </label>
        <input 
          type="text" 
          className='border border-gray-400 w-full mb-3'
          onChange={handleSignIn}
          value={signInData.email}
          name='email'
        />
        <label htmlFor="input" className='text-sm font-semibold'>
            Password
        </label>
        <input 
          type="text" 
          placeholder="Atleast 6 characters" 
          className='border text-sm py-1 pl-1 border-gray-400 w-full'
          name='password'
          value={signInData.password}
          onChange={handleSignIn}
        />
        <button type="submit" className=' py-1 rounded-md text-black text-sm w-full bg-yellow-400 mt-5 hover:bg-yellow-500'>
            Verify Email
        </button>
        <span className='text-sm block mt-5'>
            By continuing,you agree to Amazon's <span className='text-blue-400'>Conditions of Use</span> and <span className='text-blue-400'>Privacy Notice</span>
        </span>
        <hr className='mt-3' style={{borderBottomWidth:0.1,borderBottomColor:'gray',width:"80%",margin:'auto'}}/>
        <span className='text-blue-400 text-sm mt-5'>
            Shop on amazon and experience the faster delivery
        </span>
      </form>
      <div className='w-80 h-1 bg-gray-400 mt-5 relative flex justify-center'>
        <span className='text-xs font-semibold text-gray-700 absolute -top-2 bg-white px-2'>We welcoming you to Amazon</span>
      </div>
      <button type='submit' className='text-sm bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-80 py-1 rounded-md mt-5 '>
        Create a new account
      </button>
      <div className='h-full bg-gray-200'>

      </div>
    </div>
  )
}

export default Signin
