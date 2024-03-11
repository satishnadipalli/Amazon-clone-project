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
import Users from './Dashboard/Users.jsx/Users';
import AllProductsAdminDetails from './Dashboard/AllProductAdminDetails/AllProductsAdminDetails';
import ShippingLabel from './Dashboard/AllProductAdminDetails/UpdateProduct';

const Cart = lazy(() => import('./Redux/CartSection/Cart'));

export const UseTotal = createContext();

function App() {
  const dispatch = useDispatch();
  const {loginDetails} = useSelector(state=>state.cart)
  const [data, setTotalData] = useState(null);
  console.log(loginDetails,"////")
  useEffect(() => {
    fetchData("../public/data/products.json").then((data) => {
      const modifiedData = Object.values(data);
      setTotalData(modifiedData);
    });

    const fetchAddress = async() =>{
      if(loginDetails){
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
      }
  }, []);



  return (
    <UseTotal.Provider value={{ data, setTotalData }}>

      <Router>
        {/* {!path && <Header />} */}
        {loginDetails && <Header/>}
        <Routes>
          
           && <Route path={'/'} element={loginDetails ?<Home /> : <Authuntification/>} />
          <Route path='/products/:ProductId' element={loginDetails ? <OnProduct /> : <Authuntification/>} />
          <Route path='/productCategoery/:id' element={loginDetails ? <ProductCategoery /> : <Authuntification/>}/>
          <Route path='/productsss/:id' element={loginDetails ? <SuggetionsSample/> : <Authuntification/>}></Route>
          <Route path='/ontwoproduct/:_id' element={loginDetails ? <OnTwoProduct/> : <Authuntification/>}></Route>
          <Route
            path='/cart'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {loginDetails ? <Cart /> : <Authuntification/>}
              </Suspense>
            }></Route>

            {
                 <Route path="/Auth" element={<Authuntification />} />
            }   
          <Route path='/location' element={<Location/>}></Route>
          <Route path='/dashboard' element={loginDetails ? <Dashboard/> : <Authuntification/>}></Route>

        </Routes>
        {/* {!path && <Footer />} */}
       {loginDetails && <Footer/>}
      </Router>

    </UseTotal.Provider>
  );
}

export default App;
