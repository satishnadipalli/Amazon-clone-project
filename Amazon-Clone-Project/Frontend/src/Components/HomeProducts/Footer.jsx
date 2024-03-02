import React from 'react'
import { useNavigate } from 'react-router-dom';
import FooterCountry from './footer/footerCountry';
import FooterPhase from './footer/footerPhase';
import FooterFoot from './footer/FooterFoot';
const Footer = () => {
    // const history = useNavigate();


  function ha(){
    window.scrollTo({top:0,behavior:'smooth'})
  }
  

  return (
    <div className='h-screen w-full footer'>
          <div className='w-full flex items-center justify-center text-sm main-footer h-10 text-white' onClick={ha}>
            <span>Back to top</span>
          </div>
          <FooterPhase/>
          <hr style={{ border: 'none', borderBottom: '0.2px solid gray', width: '100%', margin: '0.5em 0' }} />
          <div className=' h-36 w-full bg-gray-800'>
            <FooterFoot/>
            <FooterCountry/>
            <div className='h-full'>
            </div>
          </div>
    </div>
  )
}

export default Footer
