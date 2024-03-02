import { useEffect, useState, createContext, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import OnProduct from './Components/HomeProducts/OnProduct';
import Header from './Components/Header/Header';
import ProductCategoery from './Components/HomeProducts/ProductCategoery';
import Footer from './Components/HomeProducts/Footer';
import Authuntification from './Components/Login/Authuntification';
import { fetchData } from './DataFectch';
import Location from './Components/Login/Location';
import { useDispatch, useSelector } from 'react-redux';
import SuggetionsSample from './Components/SuggetionResults/SuggetionsSample';
import { addAddress } from './Redux/CartSlice';
import Dashboard from './Dashboard/Dashboard';
import OnTwoProduct from './Components/OnTwoProduct/OnTwoProduct';

const Cart = lazy(() => import('./Redux/CartSection/Cart'));

export const UseTotal = createContext();

function App() {
  const dispatch = useDispatch();
  const {loginDetails} = useSelector(state=>state.cart)
  const [data, setTotalData] = useState(null);
  
  useEffect(() => {
    fetchData("../public/data/products.json").then((data) => {
      const modifiedData = Object.values(data);
      setTotalData(modifiedData);
    });

    const fetchAddress = async() =>{
      try {
        const getAddressResponse = await fetch("http://localhost:3000/getaddress", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${loginDetails?.token}`
          }

        });
  
        if (getAddressResponse.ok) {
          const { alladdress } = await getAddressResponse.json();
         
          dispatch(addAddress(alladdress));
        }
      } catch (error) {
        console.log("error from the app component",error)
      }
    }

    fetchAddress();
  }, []);



  return (
    <UseTotal.Provider value={{ data, setTotalData }}>

      <Router>
        {/* {!path && <Header />} */}
        <Header/>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path='/products/:ProductId' element={<OnProduct />} />
          <Route path='/productCategoery/:id' element={<ProductCategoery />}/>
          <Route path='/productsss/:id' element={<SuggetionsSample/>}></Route>
          <Route path='/ontwoproduct/:_id' element={<OnTwoProduct/>}></Route>
          <Route
            path='/cart'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Cart />
              </Suspense>
            }></Route>

            {
                 <Route path="/Auth" element={<Authuntification />} />
            }
             
          <Route path='/location' element={<Location/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
        {/* {!path && <Footer />} */}
        <Footer/>
      </Router>
    </UseTotal.Provider>
  );
}

export default App;
