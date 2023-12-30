import { useEffect, useState, createContext, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import OnProduct from './Components/HomeProducts/OnProduct';
import Header from './Components/Header/Header';
import ProductCategoery from './Components/HomeProducts/ProductCategoery';
import Footer from './Components/HomeProducts/Footer';
import Authuntification from './Components/Login/Authuntification';
import { fetchData } from './DataFectch';

const Cart = lazy(() => import('./Redux/CartSection/Cart'));

export const UseTotal = createContext();

function App() {
  const [data, setTotalData] = useState(null);
  const [path, setPath] = useState(true);

  useEffect(() => {
    fetchData().then((data) => {
      const modifiedData = Object.values(data);
      setTotalData(modifiedData);
    });
  }, []);

  useEffect(() => {
    let pathNames = window.location.pathname.includes('/Auth');
    setPath(pathNames);
  }, [window.location.pathname]);

  return (
    <UseTotal.Provider value={{ data, setTotalData }}>
      <Router>
        {!path && <Header />}
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path='/products/:ProductId' element={<OnProduct />} />
          <Route path='/productCategoery/:id' element={<ProductCategoery />}/>
          <Route
            path='/cart'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Cart />
              </Suspense>
            }
          />
          <Route path="/Auth" element={<Authuntification />} />
        </Routes>
        {!path && <Footer />}
      </Router>
    </UseTotal.Provider>
  );
}

export default App;
