import React from 'react'
import Login from './Login'
import Signin from './Signin'
import { useState } from 'react'
const Authuntification = () => {
  const [auth,setAuth] = useState(true);
//   console.log(auth);
  return (
    <>
      {
        auth ? <Login 
                    auths = {{auth,setAuth}}
                /> : 
                <Signin
                    auths = {{auth,setAuth}}
                />
      }
    </>
  )
}

export default Authuntification
