import { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';
import { useDispatch, useSelector } from 'react-redux';
import { addHomeProducts } from '../../Redux/CartSlice';
import HomeSkeleton from './HomeSkeleton';

const HomeProducts = () => {
  const dispatch = useDispatch();
  const { loginDetails,homeProducts } = useSelector(state => state.cart);
  const [isLoading,setIsLoading] = useState(true);


  useEffect(() => {
    if(loginDetails && homeProducts.length<=0){

      const fetchRandomProducts = async () => {
        setIsLoading(false);
        try {
          const response = await fetch("http://localhost:3000/randomProducts", {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${loginDetails.token}`
            }
          });
  
          if (response.ok) {
            const { randomProducts } = await response.json();
            dispatch(addHomeProducts(randomProducts));
            setIsLoading(true);
          }
        } catch (error) {
          console.error("Error fetching random products:", error);
        }
      };
  
      // Fetch products only if loginDetails is available
      if (loginDetails) {
        fetchRandomProducts();
      }
    }
  }, [loginDetails]);

  return (
    <div className='relative z-10 p-16 pt-0 bg-transparent'>
      <div className='flex items-center justify-center mb-6'>
        <span className='font-semibold text-lg text-center'>Featured & Liked Products</span>
      </div>
      <div className='flex items-center px-10 gap-0 flex-wrap gap-11'>
        { isLoading ? (homeProducts?.map((element, index) => (
          <SingleProduct key={index} element={element} />
        ))) : (
          <HomeSkeleton/>
        )}
      </div>
    </div>
  );
}

export default HomeProducts;
