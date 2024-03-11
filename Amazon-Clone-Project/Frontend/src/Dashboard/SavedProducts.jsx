import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SubSaved from './SubSaved';
import { BigSaved } from '../HeroIcons';

const SavedProducts = ({id}) => {
  const {loginDetails} = useSelector(state=>state.cart);
  const [savedProduct,setSavedProduct] = useState(null);
  useEffect(()=>{
        if(loginDetails){
          async function fetchSavedData(){
            const response = await fetch("http://localhost:3000/getSavedProducts",{
              method:"GET",
              headers:{
                "Authorization" : `Bearer ${loginDetails?.token}`
              }
            })
            if(response.ok){
              const {SavedProducts} = await response.json();
              setSavedProduct(SavedProducts);
              console.log("hello");
              console.log(SavedProducts)
            }
          }
      
          fetchSavedData();
        }
  },[id]);

  return (

      <div className='w-full p-8'>
        <h1 className='text-lg w-full font-semibold text-gray-700 '>Your Items</h1>
       
        <span className='text-sm text-orange-600 font-semibold pb-9'>Save For Later Items</span>
        <div style={{boxShadow:" box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>
        <hr style={{marginTop:"10px",borderBottom:"1px solid gray", boxShadow:" rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"}}/>
        </div>
          <div className='flex flex-wrap w-full gap-8 mt-10'>
          {
            savedProduct?.length >0 ? 
            savedProduct.map((element)=>{
              return <SubSaved element={element}/>
            }) : 
            <div className='w-full flex-col flex justify-center items-center mt-10 '>
              <div className=' h-14 w-14 rounded-full flex items-center justify-center border-2 border-black'>
                <BigSaved/>
                
              </div>
              <span className='text-lg font-extrabold text-gray-900 mt-5'>No Saved Items yet</span>
            </div>
          }
        </div>
      </div>

  )
}

export default SavedProducts;
