import React from 'react'
import { useParams } from 'react-router-dom'
const SuggetionsSample = () => {
    const {id} = useParams();
    console.log(id);
  return (
    <div>
      hello
    </div>
  )
}

export default SuggetionsSample
