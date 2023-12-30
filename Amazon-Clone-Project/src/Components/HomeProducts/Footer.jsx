import React from 'react'
import { useNavigate } from 'react-router-dom';
const Footer = () => {
    const history = useNavigate();
    function backToback( ){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  return (
    <div className='h-screen w-full footer'>
          <div className='w-full flex items-center justify-center text-sm main-footer h-10 text-white' onClick={backToback}>
            <span>Back to top</span>
          </div>
          <div className=' footer w-full flex-grow flex justify-around pl-24 pr-24 pt-10 pb-14'>
            <div>
                <h3 className='block text-white block text-rr font-bold'>Get to Know Us</h3>
                <span className='text-white block text-sm p-1'>About Us</span>
                <span className='text-white block text-sm p-1'>Careers</span>
                <span className='text-white block text-sm p-1'>Press Releases</span>
                <span className='text-white block text-sm p-1'>Amazon Science</span>
            </div>
            <div>
                <h3 className='block text-white block text-rr font-bold'>Get to Know Us</h3>
                <span className='text-white block text-sm p-1'>About Us</span>
                <span className='text-white block text-sm p-1'>Careers</span>
                <span className='text-white block text-sm p-1'>Press Releases</span>
                <span className='text-white block text-sm p-1'>Amazon Science</span>
                <span className='text-white block text-sm p-1'>About Us</span>
                <span className='text-white block text-sm p-1'>Careers</span>
                <span className='text-white block text-sm p-1'>Press Releases</span>
                <span className='text-white block text-sm p-1'>Amazon Science</span>
            </div>
            <div>
                <h3 className='block text-white block text-rr font-bold'>Get to Know Us</h3>
                <span className='text-white block text-sm p-1'>About Us</span>
                <span className='text-white block text-sm p-1'>Careers</span>
                <span className='text-white block text-sm p-1'>Press Releases</span>
                <span className='text-white block text-sm p-1'>Amazon Science</span>
            </div>
          </div>
          <hr style={{ border: 'none', borderBottom: '0.2px solid gray', width: '100%', margin: '0.5em 0' }} />
          <div className=' h-36 w-full bg-gray-800'>
            <div className='w-full h-16 flex gap-5 items-center justify-center'>
                <img src="/images/amazon.png" alt="" className='h-5' />
                <select name="" id="" className='text-white mb-1 bg-transparent border border-blue-200 h-6 text-sm rounded-md'>
                    <option value="">English</option>
                    <option value="">Hindi</option>
                    <option value="">Telugu</option>
                    <option value="">French</option>
                </select>
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className=' w-8/12  flex flex-wrap justify-center items-center'>
                    <span className='text-white p-2 text-sm'>Australia</span>
                    <span className='text-white p-2 text-sm'>Brazil</span>
                    <span className='text-white p-2 text-sm'>Canada</span>
                    <span className='text-white p-2 text-sm'>China</span>
                    <span className='text-white p-2 text-sm'>France</span>
                    <span className='text-white p-2 text-sm'>Germany</span>
                    <span className='text-white p-2 text-sm'>Italy</span>
                    <span className='text-white p-2 text-sm'>Japan</span>
                    <span className='text-white p-2 text-sm'>Mexico</span>
                    <span className='text-white p-2 text-sm'>Netherlands</span>
                    <span className='text-white p-2 text-sm'>Poland</span>
                    <span className='text-white p-2 text-sm'>Singapore</span>
                    <span className='text-white p-2 text-sm'>Spain</span>
                    <span className='text-white p-2 text-sm'>Turkey</span>
                    <span className='text-white p-2 text-sm'>United Arab Emirates</span>
                    <span className='text-white p-2 text-sm'>United Kingdom</span>
                    <span className='text-white p-2 text-sm'>United States</span>
                </div>
            </div>
            <div className='h-full'>

            </div>
            
          </div>
    </div>
  )
}

export default Footer
