import React from 'react'
import Login from './Login'
import Signin from './Signin'
import { useState } from 'react'
const Authuntification = () => {
  const [auths,setAuth] = useState(true);

  return (
    <div className='mt-14'>
      {
        auths ? <Login 
                    authes = {{auths,setAuth}}
                /> : 
                <Signin
                    authes = {{auths,setAuth}}
                />
      }
    </div>
  )
}

export default Authuntification;
