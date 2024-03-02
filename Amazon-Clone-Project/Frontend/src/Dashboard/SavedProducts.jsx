import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SubSaved from './SubSaved';
import { BigSaved } from '../HeroIcons';

const SavedProducts = ({id}) => {
  const {loginDetails} = useSelector(state=>state.cart);
  const [savedProduct,setSavedProduct] = useState(null);
  useEffect(()=>{
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
  },[id]);

  return (

      <div className='flex flex-wrap w-full  gap-8'>
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

  )
}

export default SavedProducts;
