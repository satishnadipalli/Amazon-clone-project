import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addLoginDetails } from '../../Redux/CartSlice';
import { Navigate } from 'react-router-dom';
const Login = (props) => {

  const [errorMessage,setErrorMessage] = useState('');

  console.log(props);
  
  const { loginDetails } = useSelector(store=>store.cart);
  const dispatch = useDispatch();

  const [loginData,setLoginData]= useState({
    email : '',
    password : ''
  });

  function receiveLoginData(event){
    const {name,type,value} = event.target;

    setLoginData((previousValue)=>{
      return{
        ...previousValue,
        [name] : value
      }
    });

  }

  function showSignPage(){
    props.authes.setAuth(false);
  }

  async function handleSubmit(event,loginData){
    const sss = document.querySelector(".sss").innerHTML = "Loading..."
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login',{
        method: 'POST',
        headers:{
          'Content-Type' : 'application/json',
           "Authorization": `Bearer ${loginDetails?.token}`
        },
        body:JSON.stringify(loginData),
      });

      if (response.ok) {
        
        const {lastname,email,token,profilePhoto,isAdmin} = await response.json();

        

        const userDetails = {lastname,email,token,isAdmin}
        
        console.log("Login successfull");
       
        setTimeout(()=>{
          dispatch(addLoginDetails({lastname,email,token,profilePhoto,isAdmin}));
          window.location = '/';
        },2000)
      }else{
        const errorResponse = await response.json();
        if(response.status === 401){
          setErrorMessage("Password mismatched");
        }

      }


    } catch (error) {
      console.log("Login Failed");
    }

    
    
    // dispatch(addLoginDetails(loginData));


  }

  return (
    <div className='w-full flex items-center flex-col pb-24'>
      <img src="https://ativancouver.ca/wp-content/uploads/jet-engine-forms/12/2023/01/lord-krishna-arjuna-logo-small-sig-1536x1536.png" alt="" className='h-10'/>
      <form onSubmit={(event)=>handleSubmit(event,loginData)}  className='flex-col rounded-md  flex px-5 py-10 w-80 border border-gray-400'>
        <span className='text-xl font-semibold'>Sign in</span>
        <label htmlFor="input" className='text-sm font-semibold'>
            Email or mobile phone number
        </label>
        <input type="text"
           className='border border-gray-400 w-full'
           name='email'
           onChange={receiveLoginData}
           value={loginData.email}
        />
        <label htmlFor="input" className='text-sm font-semibold'>
            Password
        </label>
        <input type="text"
           className='border border-gray-400 w-full'
           name='password'
           onChange={receiveLoginData}
           value={loginData.password}
        />


        {errorMessage && <p className='text-red-500 text-sm'>{errorMessage}</p>}


        <button type="submit" className='sss py-1 rounded-md text-black text-sm w-full bg-yellow-400 mt-5 hover:bg-yellow-500'>
            Continue
        </button>
        <span className='text-sm block mt-5'>
            By continuing,you agree to SRI-KA's <span className='text-blue-400'>Conditions of Use</span> and <span className='text-blue-400'>Privacy Notice</span>
        </span>
        <hr style={{marginTop:25,borderBottomWidth:0.1,borderBottomColor:'gray',width:"80%",margin:'auto'}}/>
        <span className='text-blue-400 text-sm mt-5'>
            Shop on SRI-KA and experience the faster delivery
        </span>
      </form>
      <div className='w-80 h-1 bg-gray-400 mt-5 relative flex justify-center'>
        <span className='text-xs font-semibold text-gray-700 absolute -top-2 bg-white px-2'>New to KRI-SA ? </span>
      </div>
      <button onClick={showSignPage} className='text-sm bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-80 py-1 rounded-md mt-5 '>
        Create a new account
      </button>
      <div className='h-full bg-gray-200'>

      </div>
    </div>
  )
}

export default Login
