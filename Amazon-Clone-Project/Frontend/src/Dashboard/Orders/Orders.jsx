import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrders } from '../../Redux/CartSlice';

const Orders = ({ setComponent }) => {
  const { loginDetails, userOrders,defaultLocation } = useSelector(state => state.cart);
  const [allProducts, setAllProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginDetails) {
      async function fetchData() {
        try {
          const response = await fetch("http://localhost:3000/getuserOrders", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${loginDetails.token}`
            }
          });
          const responseTwo = await fetch("http://localhost:3000/getallproducts", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${loginDetails.token}`
            }
          });

          if (response.ok && responseTwo.ok) {
            const { userOrders } = await response.json();
            const { products } = await responseTwo.json();
            console.log("Fetched Products:", products);
            dispatch(addOrders(userOrders));
            setAllProducts(products);
            console.log(userOrders,'=p-=0popko')
          } else {
            console.error('Error fetching orders');
          }
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      }

      fetchData();
    }
  }, [loginDetails, dispatch]);

  return (
    <div className='w-full mt-16 '>
      {allProducts.length > 0 && userOrders.map((order) => (
        <div key={order._id} >
          {/* <p>User ID: {order.userId}</p>
          <p>Products:</p> */}
          <ul>
          {order.producsId.map((productOrder, index) => {
  const product = allProducts.find((product) => product.productId === productOrder.productId);
  return (
    <li key={index}>
      {product ? (
              <div className='p-5 hover'>
              <div className='w-full flex pb-5 '>
                    <div style={{width:'15%'}} className='pl-2 flex items-center justify-center'>
                      <img src={"http://localhost:3000/uploads/"+product.image[0]} alt="" className=' h-24 m-auto'/>
                    </div>
                    <div className="info pl-5" style={{width:'60%'}}>
                      <span className='font-rr'>
                        {product.description}
                      </span>
                      <span className='block text-sm font-semibold text-green-700'>In stock</span>
                      <span className='text-sm font-semibold'>Eligible for free shoping</span>
                      <span className=' flex items-center mt-1'>
                        <input type="checkbox" className='mr-1'/>
                        <span className='text-xs font-semibold'>This is a gift Learn more</span>
                      </span>
                    </div>
                    <div className="price" style={{width:'20%'}}>
                        <span className=' float-right font-semibold'>${product.price} <span className='text-blue-400 ggg font-semibold text-xs hover:underline'></span></span>
                    </div>
              </div>
              <div className='flex'>
                <div className='w-1/2 h-12 addressdiv ml-10 mb-5 rounded-md p-1 pl-4'>
                  <span className='text-sm space-x-7'><span className='font-semibold block '>Deliver Location: </span>{defaultLocation.villageName+" "},{defaultLocation.mandalName+" "},{defaultLocation.pinCode+" "},{defaultLocation.districtName+" "}, {defaultLocation.stateName}</span>
                </div>
                <div className='w-1/2 h-12 addressdiv ml-10 mb-5 rounded-md p-1 pl-4'>
                <table className='flex gap-6 text-sm items-center h-full'>
                  <thead>
                    <tr>
                      <td> Order Status</td>
                      <td className=' h-full bg-red-200 ml-3 px-3 py-1 rounded-md'>{order.status}</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> Ordered On</td>
                      <td>{order.orderDate}</td>
                    </tr>
                    
                  </tbody>
                  <tbody>
                  <tr>
                      <td> Deliver On</td>
                      <td>{order.deliverTime}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              </div>
              <div className=' ml-5 -mt-3 flex justify-around mb-5 mt-2 hovers'>
                <button  className=' ggg font-semibold text-xs hover:underline hellos'>Cancel Order</button>
                <button  className=' ggg font-semibold text-xs hover:underline hello1'>Save for later</button>
                <button className='  ggg font-semibold text-xs hover:underline hello2'>Share</button>
                <button className=' ggg font-semibold text-xs hover:underline hello3'>See more like this</button>
              </div>
              <hr style={{borderBottomWidth:0.1,borderBottomColor:'gray',width:'96%', margin:'auto',marginBottom:15}}/>
              
            </div>
        // <div style={{ border: "2px solid gray" }} className=''>
        //   <p>Status: {order.status}</p>
        //   <img className='w-36' src={"http://localhost:3000/uploads/" + (product.image[0] || "")} alt={product.title || ""} />
        //   <p>Title: {product.title || "Title not available"}</p>
        //   <p>Price: {product.price || "Price not available"}</p>
        // </div>
      ) : (
        <div key={index}>
          <p>Product not found</p>
        </div>
      )}
    </li>
  );
})}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Orders;
