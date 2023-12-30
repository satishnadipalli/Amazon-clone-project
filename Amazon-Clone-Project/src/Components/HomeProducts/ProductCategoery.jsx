import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CategoeryHeader from './categoeryHeader';
import CatProductGen from './CatProductGen';
import { useSelector } from 'react-redux';
const ProductCategoery = () => {
    const [categoery,setCategoery] = useState(null);
    const {id} = useParams();
    console.log(categoery)
    const BASE_URL = '../public/data/search.json'; 
    useEffect(()=>{
      const fetchData = async () => {
        try {
          const response = await fetch(BASE_URL);
          const data = await response.json();
          return setCategoery(data[id]);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
        };
      fetchData();
    },[id]);
  return (
    <div className=''>
        <CategoeryHeader/>
        <div className='flex'>
          <div className='mr-2  whitespace-nowrap font-serif text-rr hidden sm:block'>
            <div>
              <input type="checkbox" id="category-checkbox-1" className="mr-1" />
              <label htmlFor="category-checkbox-1" className='pl-1 pt-1 pb-1 text-rr'>
                {id} category
              </label>

              <input type="checkbox" id="category-checkbox-2" className="mr-1" />
              <label htmlFor="category-checkbox-2" className='pl-1 pt-1 pb-1 text-rr block'>
                Below 1000 rupees
              </label>
                
              <input type="checkbox" id="category-checkbox-3" className="mr-1" />
              <label htmlFor="category-checkbox-3" className='pl-1 pt-1 pb-1 block'>
                below 500
              </label>

              <input type="checkbox" id="category-checkbox-4" className="mr-1" />
              <label htmlFor="category-checkbox-4" className='pl-1 pt-1 pb-1 block'>
                below 100
              </label>

              <input type="checkbox" id="category-checkbox-5" className="mr-1" />
              <label htmlFor="category-checkbox-5" className='pl-1 pt-1 pb-1 block'>
                From Amazon
              </label>

              <input type="checkbox" id="category-checkbox-6" className="mr-1" />
              <label htmlFor="category-checkbox-6" className='pl-1 pt-1 pb-1 block'>
                From Apple
              </label>

              <input type="checkbox" id="category-checkbox-7" className="mr-1" />
              <label htmlFor="category-checkbox-7" className='pl-1 pt-1 pb-1 block'>
                Phones
              </label>

              <input type="checkbox" id="category-checkbox-8" className="mr-1" />
              <label htmlFor="category-checkbox-8" className='pl-1 pt-1 pb-1 block'>
                Laptops
              </label>

              <input type="checkbox" id="category-checkbox-9" className="mr-1" />
              <label htmlFor="category-checkbox-9" className='pl-1 pt-1 pb-1 block'>
                Accessories
              </label>
            </div>
          </div>
        <div className='flex-grow h-screen pl-5 overflow-auto '>
          <span className='font-semibold text-orange-500'>
            Results for <span className='font-bold text-black'>{id}</span>
          </span>
          <div className='flex flex-row flex-wrap gap-4 justify-center sm:items-center'>
            { categoery && categoery.map((element) => (
              <CatProductGen
                key={element.id}
                image={element.image}
                price={element.price}
                oldPrice={element.oldPrice}
                description={element.description}
                ratings={element.ratings}
                avgRating={element.avgRating}
                id={element.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCategoery;
