import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLoginDetails } from '../../Redux/CartSlice';
import Cookies from 'js-cookie';


const Signin = ({authes}) => {
  const [UserTokenDetails,setToken] = useState(null);
  const [errorMessage,setErrorMessage] = useState('')
  const dispatch = useDispatch();
  console.log("the token is",UserTokenDetails);
  const [signInData,setSignData] = useState({
    lastname : '',
    email : '',
    password : '',
    profilePhoto:''
  });

  const {auths,setAuth} = authes;

  function goToLogin(){
    setAuth(true);
  }


  function handleSignIn(event){
    const {name,value} = event.target;

    setSignData((previousValue) => {
      return {
        ...previousValue,
        [name] : value
      };
  });
  }

  
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('profilePhoto', signInData.profilePhoto);
    formData.append('lastname', signInData.lastname);
    formData.append('email', signInData.email);
    formData.append('password', signInData.password);
    console.log(formData)
    
    
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
        },
        body: formData,
      });

      if (response.ok) {

        const {lastname,email,token,profilePhoto} = await response.json();
  

        dispatch(addLoginDetails({ lastname, email,profilePhoto, token }));
        
        const userDetails = { lastname, email,profilePhoto, token };
        
        console.log("the token",token);
        console.log('SignIn successful');  
        window.location = "/"
        
      } else {
        if(response.status===401){
          setErrorMessage("User already exists please login");
        }
        console.error('SignIn failed');

      }
    } catch (error) {
      console.error('Error during SignIn:', error.message);
    }
  }

  async function handleUpload(e) {
    const selectedFile = e.target.files[0];
    setSignData((previousValue)=>{
      return{
        ...previousValue,
        profilePhoto: selectedFile
      }
    })
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
          className='text-sm font-semibold py-1 pl-2 border border-gray-400 w-full mb-3'
          onChange={handleSignIn}  
          value={signInData.lastname}
          name='lastname'
          autoComplete="off"
        />
        <label htmlFor="input" className='text-sm font-semibold'>
            Email or mobile phone number
        </label>
        <input 
          type="text" 
          className='text-sm font-semibold py-1 pl-2 border border-gray-400 w-full mb-3'
          onChange={handleSignIn}
          value={signInData.email}
          name='email'
          autoComplete="off"
        />
        <label htmlFor="input" className='text-sm font-semibold'>
            Password
        </label>
        <input 
          type="text" 
          placeholder="Atleast 6 characters" 
          className='text-sm font-semibold py-1 pl-2 border text-sm py-1 pl-1 border-gray-400 w-full'
          name='password'
          value={signInData.password}
          onChange={handleSignIn}
          autoComplete="off"
        />
        <label htmlFor="input" className='text-sm font-semibold'>
            Upload Profile photo
        </label>
        <input 
          type="file"
          name="profilePhoto"
          className='text-sm font-semibold py-1 pl-2 border text-sm py-1 pl-1 border-gray-400 w-full'
          
          onChange={handleUpload}
        />
        {errorMessage && <p className='text-sm text-red-700'>{errorMessage}</p>}
        <button 
          type="submit" 
          className=' py-1 rounded-md text-black text-sm w-full bg-yellow-400 mt-5 hover:bg-yellow-500'
        >
            SignIn
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
      <button 
        type='submit' 
        className='text-sm bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-80 py-1 rounded-md mt-5 '
        onClick={goToLogin}  
      >
        Login
      </button>
      <div className='h-full bg-gray-200'>

      </div>
    </div>
  )
}

export default Signin


function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = ()=>{
      resolve(fileReader.result)
    }
    fileReader.onerror = () =>{
      reject(error);
    }
  })
}