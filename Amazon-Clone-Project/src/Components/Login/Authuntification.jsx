import React from 'react'
import Login from './Login'
import Signin from './Signin'
import { useState } from 'react'
const Authuntification = () => {
  const [auths,setAuth] = useState(true);

  return (
    <>
      {
        auths ? <Login 
                    authes = {{auths,setAuth}}
                /> : 
                <Signin
                    authes = {{auths,setAuth}}
                />
      }
    </>
  )
}

export default Authuntification;
