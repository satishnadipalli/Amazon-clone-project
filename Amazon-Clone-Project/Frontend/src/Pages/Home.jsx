import React from 'react'
import Courosal from '../Courosal/Courosal'
import HomeProducts from '../Components/HomeProducts/HomeProducts'
import CatgoryCoursal from '../Courosal/CatgoryCoursal'
import Suggetion from '../Components/Header/Suggetion'
const Home = () => {
  return (
    <div className='relative'>
      <Courosal/>
      <HomeProducts/>
      <CatgoryCoursal/>
      
    </div>
  )
}

export default Home
