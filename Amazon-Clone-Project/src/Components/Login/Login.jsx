import React, { useState } from 'react'

const Login = (props) => {
  const [loginData,setLoginData]= useState({
    email : '',
    password : ''
  });
  function handleLogin(){
    props.auths.setAuth(false);
  }

  function receiveLoginData(event){
    const {name,type,value} = event.target
    setLoginData((previousValue)=>{
      return{
        ...previousValue,
        [name] : value
      }
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    


  }

  return (
    <div className='w-full flex items-center flex-col pb-24'>
      <img src="/images/Amazon-2.png" alt="" className='h-10'/>
      <form action="submit" onSubmit={handleSubmit} className='flex-col rounded-md  flex px-5 py-10 w-80 border border-gray-400'>
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
        <button className=' py-1 rounded-md text-black text-sm w-full bg-yellow-400 mt-5 hover:bg-yellow-500'>
            Continue
        </button>
        <span className='text-sm block mt-5'>
            By continuing,you agree to Amazon's <span className='text-blue-400'>Conditions of Use</span> and <span className='text-blue-400'>Privacy Notice</span>
        </span>
        <hr style={{marginTop:25,borderBottomWidth:0.1,borderBottomColor:'gray',width:"80%",margin:'auto'}}/>
        <span className='text-blue-400 text-sm mt-5'>
            Shop on amazon and experience the faster delivery
        </span>
      </form>
      <div className='w-80 h-1 bg-gray-400 mt-5 relative flex justify-center'>
        <span className='text-xs font-semibold text-gray-700 absolute -top-2 bg-white px-2'>New to Amazon ? </span>
      </div>
      <button onClick={handleLogin} className='text-sm bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-80 py-1 rounded-md mt-5 '>
        Create a new account
      </button>
      <div className='h-full bg-gray-200'>

      </div>
    </div>
  )
}

export default Login
