import React, { useState } from 'react'
import {FaStar} from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { closeModal } from '../OnTwoProduct/submitfeedbackModel';
import { useSelector } from 'react-redux';
import CartModel from '../../Redux/CartSection/CartModel';
import Rating from '@mui/material/Rating'; 
import Typography from '@mui/material/Typography';


const NewfeedBack = ({setIsOpen,productId}) => {
  const {loginDetails} = useSelector(state=>state.cart)
    const {isOpen} = useSelector(state=>state.sumbitModal);
    const dispatch = useDispatch();
    const [rateValue, setrateValue] = useState(null); 
    console.log(rateValue)
    function handleModel(){
        setIsOpen(false);
    }

    const [feedData,setFeedData] = useState(
      {

        user : loginDetails.lastname,
        profilePhoto:loginDetails.profilePhoto,
        rateGiven:rateValue,
        feed:""
      }
    );

    function handleDetails(e){
      const {value,name} = e.target;
      setFeedData((previousData)=>{
        return{
          ...previousData,
          [name]:value
        }
      })
    }
    
    async function handleSubmit(e){
      e.preventDefault();
      try {
        const response = await fetch(`http://localhost:3000/updateProduct/${productId}`,{
          method:"PUT",
          headers:{
            "Authorization" : `Bearer ${loginDetails.token}`,
            "Content-Type" : "application/json"
          },
          body:JSON.stringify(feedData)
        });
        if(response.ok){
          console.log("Your response successfully added");
        }
      } catch (error) {
        
      }
    }

    
  return (
    <div
    // onClick={handleModel}
    style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(4, 0, 10, 0.7)', 
        zIndex: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }} 
      className=' w-full h-screen flex items-center justify-center absolute top-0 bg-transparent bg-gray-100 fixed'> 
      <form onSubmit={(event)=>handleSubmit(event)}>
        <div className='p-8 pt-4 bg-white w-96 h-60 rounded-xl shadow-[0_20px_50px_rgba(8,4,0.7,0.2)]'>
          <span className='font-bold -mt-3'>Your New Rating will be visible to others</span>
          <div className='flex w-full justify-center items-center text-lg'>
          <p style={{fontSize:'30px'}}>{rateValue===null &&"😴"}{ rateValue==1 &&" 😖" }{rateValue==2 && "😣"} {rateValue ===3 && "😁"} {rateValue === 4 && "😀"} {rateValue ===5 && "😍"}</p>
          </div>
          <div className='mt-3'>
          <Typography component="legend"></Typography>
              <Rating
                name="simple-controlled"
                value={rateValue}
                onChange={(event, newrateValue) => {
                  setrateValue(newrateValue);
                }}
              />
          </div>
          <input 
            type="text" 
            placeholder=' give some feed back' 
            className='  mb-10 block outline-none border-b-2 border-b-green-800 w-full' 
            value={feedData.feed}
            onChange={handleDetails}
            name='feed'
          />
          <div className='text-white font-sm font-semibold w-full flex gap-3 justify-between'>
            
            <button onClick={handleModel} className='w-1/2  py-1  bg-blue-800'>Cancel</button>
            <button type='submit' className='w-1/2  py-1 bg-blue-700'>Submit</button>
          </div>
          </div>
      </form>
    </div>
  )
}

export default NewfeedBack
