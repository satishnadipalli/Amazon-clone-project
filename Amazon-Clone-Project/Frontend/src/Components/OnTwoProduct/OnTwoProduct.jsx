import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {calculateEMI,ratingImage,percentageCalculator} from '../../Components/HomeProducts/Functions'
import LeftDetail from '../HomeProducts/LeftDetail';
import { fetchData } from '../../DataFectch';
import LoadingAnimation from '../../../loadingAnimation';
import CategoeryHeader from '../HomeProducts/categoeryHeader';
import { addLoginDetails } from '../../Redux/CartSlice';
import { useSelector } from 'react-redux';
const OnTwoProduct = () => {
const {loginDetails} = useSelector(state=>state.cart)
const { _id } = useParams();
const [productData, setProductData] = useState(null);


useEffect(() => {
  async function handlecall(){
    const response = await fetch("http://localhost:3000/getallproducts",{
        method:"GET",
        headers:{
            "Authorization" : `Bearer ${loginDetails.token}`
        }
    });
    if(response.ok){
        const {products} = await response.json();
        setProductData(products);
        console.log("products came",products)
    }
  }
  handlecall();
}, []);

if (!productData) {
  return <LoadingAnimation/>; 
}

// const product = productData[ProductId];
const product = productData.find(product => product._id === _id);
if (!product) {
  return <div>Product not found</div>;
}

return (
  <div >
    <CategoeryHeader/>
    <div className='flex justify-between'>
      <div className='w-10'>
          
      </div>
        <div className='flex justify-center flex-grow '>
          <img src={"http://localhost:3000/uploads/"+product.image} alt={`Product ${_id}`} className='h-96'/>
        </div>
        <div className=' flex-grow pl-5'>
          <div className='pb-3'>
            <p className='text-xl font-bold font-sans'>{product.title}</p>
            <p className='text-xl text-gray-700 font-semibold font-sans w-80 h-28 overflow-hidden '>{product.description}</p>
            <p className='text-blue-400  text-sm font-semibold'>Brand :{product.brand}</p>
            <p className='text-blue-400 text-sm font-semibold hover:text-red-600'>Visit {product.attribute} store now</p>
            <div className='rating-star  h-7 text-sm text-yellow-500 flex items-center '>
                <span className='mr-1 text-md text-black'>{product.avgRating.toFixed(1)}</span>
                <img src={ratingImage(product.avgRating)} alt="" className='h-4'/>
              <span className='text-blue-400 text-md font-bold pl-5'>{product.ratings}</span>
              <span className='text-blue-400 ml-2 text-sm font-semibold'>ratings</span>
            </div>
            <div className='amazon-badge w-24 h-4  text-sm font-semibold text-white bg-gray-800 flex justify-center items-center'>
              {product.badge && (product.badge) === "choice" ? `Amazon's ${product.badge}` : `${product.badge}`}
            </div>
          </div>
          <hr style={{ border: 'none', borderBottom: '0.5px gray-400', width: '90%', margin: '0.5em 0' }} />
          <div className='w-12 h-6 bg-red-600 rounded-md flex items-center justify-center mt-3'>
              <span className='text-white text-sm font-bold'>Deal</span>
          </div>
          {/* <hr className='w-24 h-0.5 border-t-0.5 border-gray-400' /> */}
          <div className='relative'>
              <span className='text-2xl text-red-600 font-serif'>
                -{percentageCalculator(product.price,product.oldPrice)}%
              </span>
              <span className='text-sm top-0 absolute ml-1 font-bold'>
                $
              </span>
              <span className='text-black pl-3 text-2xl font-serif'> 
                {product.price}
              </span>
          </div>
          <span className=' text-sm font-sans  text-gray-500'> M.R.P :<span className=' line-through'>${product.oldPrice}</span></span>
          <div className='relative overflow-hidden amazon-badge w-24 h-4  text-sm font-semibold text-white bg-gray-800 flex justify-center items-center'>
            <span className='w-4 h-4 border-transparent bg-white absolute right-0  rounded-tl-[15px] rounded-bl-[15px] '>

            </span>
              <img src="/images/favicon.ico" alt="no image fonunded" className='h-3 mr-2'/> 
              <span className='mr-2'>
                fullfilled
              </span>
          </div>
          <span className='text-sm text-gray-600 font-semibold'>
            inclusive of all taxes
          </span>
          <span className='block text-sm text-gray-600 font-semibold'>
            <span className='text-sm text-gray-800'>EMI </span> 
            starts at <span className='text-sm text-gray-800'>$ {calculateEMI(product.price)}</span> per month 
            <span className='ml-2 text-blue-400 hover:text-red-600'>EMI options</span>
          </span>
          <hr style={{ border: 'none', borderBottom: '0.5px solid black', width: '90%', margin: '0.5em 0' }} />
        </div>
        <LeftDetail
          price={product.price}
          id={product.id}
          product={product}
        />
    </div>
    
  </div>
);
};

export default OnTwoProduct;


