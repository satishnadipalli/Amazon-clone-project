import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CategoeryHeader from './categoeryHeader';
import CatProductGen from './CatProductGen';
import { useSelector } from 'react-redux';
import LoadingAnimation from '../../../loadingAnimation';

const ProductCategoery = () => {
    const [categoery,setCategoery] = useState([]);
    const [clickedCategoery,setClickedCategoery] = useState("")

    const {loginDetails} = useSelector(state=>state.cart);
    const {id} = useParams();
    
    

    useEffect(()=>{
      setCategoery(null)

      if(loginDetails){
        async function getCategoery(categoery){
          try {
            
            const response = await fetch(`http://localhost:3000/post-categoery/${id}`,{
              method:"GET",
              headers:{
                "Authorization" : `Bearer ${loginDetails?.token}`
              }
            })
            if(response.ok){
              const {filterdProducts} =await response.json();
              setCategoery(filterdProducts)
              console.log(filterdProducts)
            }
          } catch (error) {
            console.log(error)
          }
      }
  
      if(id){
        getCategoery(id);
      }
      }

    
    },[id,loginDetails?.token]);

    
    if(!categoery){
      return <LoadingAnimation/>
    }

  function handle(cat){
    setCategoery(cat)
  }

  return (
    <div className=''>
        <CategoeryHeader setClickedCategoery={setClickedCategoery}/>
        <div className='flex'>
        <div className='mr-2  whitespace-nowrap font-serif text-rr hidden sm:block'>
        <div>
            <div className='flex gap-2 items-center'>
              <input type="checkbox" id="category-checkbox-1" className="mr-1" />
              <label htmlFor="category-checkbox-1" className='pl-1 pt-1 pb-1 text-rr'>
              {id} category
              </label>
            </div>

           <div className='flex gap-2 items-center'>
            <input type="checkbox" id="category-checkbox-2" className="mr-1" />
              <label htmlFor="category-checkbox-2" className='pl-1 pt-1 pb-1 text-rr block'>
              Below 1000 rupees
              </label>
           </div>
            
            <div className='flex gap-2 items-center'>
              <input type="checkbox" id="category-checkbox-3" className="mr-1" />
              <label htmlFor="category-checkbox-3" className='pl-1 pt-1 pb-1 block'>
              below 500
              </label>
            </div>

            <div className='flex gap-2 items-center'>
              <input type="checkbox" id="category-checkbox-4" className="mr-1" />
              <label htmlFor="category-checkbox-4" className='pl-1 pt-1 pb-1 block'>
              below 100
              </label>
            </div>

            <div className='flex gap-2 items-center'>
              <input type="checkbox" id="category-checkbox-5" className="mr-1" />
              <label htmlFor="category-checkbox-5" className='pl-1 pt-1 pb-1 block'>
              From Amazon
              </label>
            </div>

            <div className='flex gap-2 items-center'>
                <input type="checkbox" id="category-checkbox-6" className="mr-1" />
                <label htmlFor="category-checkbox-6" className='pl-1 pt-1 pb-1 block'>
                From Apple
                </label>
            </div>

           <div className='flex gap-2 items-center'>
              <input type="checkbox" id="category-checkbox-7" className="mr-1" />
                <label htmlFor="category-checkbox-7" className='pl-1 pt-1 pb-1 block'>
                Phones
                </label>
           </div>

            <div className='flex gap-2 items-center'>
              <input type="checkbox" id="category-checkbox-8" className="mr-1" />
              <label htmlFor="category-checkbox-8" className='pl-1 pt-1 pb-1 block'>
              Laptops
              </label>
            </div>

            <div className='flex gap-2 items-center'>
                <input type="checkbox" id="category-checkbox-9" className="mr-1" />
                <label htmlFor="category-checkbox-9" className='pl-1 pt-1 pb-1 block'>
                Accessories
                </label>
            </div>
        </div>
    </div>
        <div className='flex-grow pl-5 overflow-auto '>
          <span className='font-semibold text-orange-500'>
            Results for <span className='font-bold text-black'>{id}</span>
          </span>
          <div className={categoery.length<5 ?'flex align-top h-96 mb-24 flex-row flex-wrap gap-4 ml-10 sm:items-center mt-10':'flex align-top flex-row flex-wrap gap-4 ml-10 sm:items-center mt-10' }>
            { categoery.length>0 ? categoery && categoery.map((element,index) => (<CatProductGen element={element} key={index}/>)):<span>No products Found</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCategoery;
