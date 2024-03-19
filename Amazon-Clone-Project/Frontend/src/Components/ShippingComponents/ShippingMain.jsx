import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, calculatePrice, calculateTotals, removeAllItems } from '../../Redux/CartSlice';

const ShippingMain = ({setComponent}) => {
  const { defaultLocation, userLocation,cartProducts,loginDetails } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [shippingDetails, setShippingDetails] = useState({
    firstname: "",
    lastname: "",
    firstnumber: "",
    deliverLocation: defaultLocation ? defaultLocation : "",
    secondnumber: "",
    cardDetails: {
      cardNumber: "",
      cardCvv: "",
      cardExpire: ""
    },
    userName: "",
    producsId: cartProducts && cartProducts.map(product => ({
      productId: product.productId,
      image:product.image[0],
      description:product.description,
      title:product.title,
      price:product.price,
      productCreatedId: product.createdBy
    })),
    status: "",
    totalPrice:cartProducts && cartProducts.reduce((total,product)=>total+product.price,0)
  });


  const [page, setPage] = useState(0);

  function handleSecondStep() {
    setPage(page + 1);
  }

  function handleDetails(e) {
    const { name, value } = e.target;
    if (name.includes("cardDetails.")) {
      const [parentName, childName] = name.split(".");
      setShippingDetails(prevState => ({
        ...prevState,
        [parentName]: {
          ...prevState[parentName],
          [childName]: value
        }
      }));
    } else {
      setShippingDetails(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  }

  async function handleSubmit(e) {

    e.preventDefault();
    const response = await fetch("http://localhost:3000/orderProduct",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${loginDetails.token}`
      },
      body:JSON.stringify(shippingDetails)
    })
    if(response.ok){
        dispatch(removeAllItems());
        dispatch(calculateTotals());
        dispatch(calculatePrice());
        try{
        const responseTwo = await fetch(`http://localhost:3000/emptycart`,{
            method:"DELETE",
            headers:{
              "Authorization" : `Bearer ${loginDetails.token}`
            }
        });
        if(responseTwo.ok){
          const emptyArray = []
          dispatch(addToCart(emptyArray))
          console.log("successfully removed all the items")
        }
        } catch (error) {
          console.log(error);
        }

      window.location ="/dashboard"
      setComponent("orders")
    }else{
      console.log('You are facing an issue regarding the network')
    }
    console.log(shippingDetails)

  }

  return (
    <div className='w-full min-h-screen p-4 md:p-10 flex justify-center mt-10'>
      <div className='w-full md:w-1/2 border border-gray-300 p-5 flex flex-col'>
        <div className='w-full h-2 bg-green-600 flex'>
          <div style={{ width: "33%" }} className='bg-red-100 h-full'></div>
          <div style={{ width: "33%" }} className='bg-blue-100 h-full'></div>
          <div style={{ width: "33%" }} className='bg-green-100 h-full'></div>
        </div>

        {page === 0 &&
          <>
            <p className='text-lg font-semibold mt-7 mb-5'>Deliver To this address</p>
            <div className='relative'>
              {userLocation &&
                userLocation.map((element, index) => (
                  <div key={index} className={`w-full p-2 mb-4 ${element.default && "bg-orange-200 border-2 rounded-md"}`}>
                    <div className='flex items-center'>
                      <input type='radio' checked={element.default ? true : false} className='mt-1 mr-3' />
                      <div>
                        <span className='font-semibold text-sm mr-2'>Satish Nadipalli</span>
                        <span className='font-semibold text-sm text-gray-700'>
                          GantiKorlam, ButchyahPeta, 531025, VisakhaPatnam, AndhraPradesh, India
                        </span>
                      </div>
                    </div>
                    <div className='text-blue-400 font-semibold text-xs hover:underline mt-2 ml-6'>
                      <span>Edit Address</span>
                    </div>
                  </div>
                ))}
            </div>
          </>
        }
        {
          page === 1 &&
          <div className='w-full '>
            <p className='font-semibold mt-3 mb-5'>Please enter your details</p>

            <div className='flex justify-between gap-10'>
              <input
                type="text"
                className='rounded-md bg-gray-200 w-1/2 py-2 px-3 outline-none'
                placeholder='firstname'
                value={shippingDetails.firstname}
                onChange={handleDetails}
                name="firstname"
              />
              <input
                type="text"
                className='rounded-md bg-gray-200 w-1/2 py-2 px-3 outline-none'
                placeholder='Lastname'
                value={shippingDetails.lastname}
                onChange={handleDetails}
                name="lastname"
              />
            </div>
            <div className='flex justify-between gap-10 mt-10'>
              <input
                type="text"
                className='rounded-md bg-gray-200 w-1/2 py-2 px-3 outline-none'
                placeholder='Phone Number'
                value={shippingDetails.firstnumber}
                onChange={handleDetails}
                name="firstnumber"
              />
              <input
                type="text"
                className='rounded-md bg-gray-200 w-1/2 py-2 px-3 outline-none'
                placeholder='Second Number'
                value={shippingDetails.secondnumber}
                onChange={handleDetails}
                name="secondnumber"
              />
            </div>
            <p className='font-semibold mt-7 mb-5'>Use the email address that you used to login to this site</p>
            <div className='flex justify-between gap-10'>
              <input type="text"
                className='rounded-md bg-gray-200 w-1/2 py-2 px-3 outline-none'
                placeholder='Email address'
              />
              <div className='w-1/2'>

              </div>
            </div>
            <p className='font-semibold mt-8 mb-6'>Please select the card that you want to pay</p>
            <div className='text-sm font-semibold flex gap-2 text-gray-700 mt-5 mb-5'>
              <input type="radio" name='radio' className='' />
              <span>Credit Card</span>
            </div>
            <div className='text-sm font-semibold flex gap-2 text-gray-700'>
              <input type="radio" name='radio' />
              <span>Debit Card</span>
            </div>
            <div className='flex justify-between mt-6 items-center'>
              <label className=' text-sm font-semibold'>Enter Card Details</label>
              <input
                type="text"
                className='rounded-md bg-gray-200 w-3/4 py-2 px-3 outline-none'
                placeholder='xxxx xxxx xxxx xxxx'
                value={shippingDetails.cardDetails.cardNumber}
                onChange={handleDetails}
                name="cardDetails.cardNumber"
              />
            </div>
            <div className='flex mt-6 gap-12 w-3/4 float-right'>
              <input
                type="text" className='rounded-md bg-gray-200 w-1/2 py-2 px-3 outline-none'
                placeholder='06/21'
                value={shippingDetails.cardDetails.cardExpire}
                onChange={handleDetails}
                name="cardDetails.cardExpire"
              />
              <input
                type="text"
                className='rounded-md bg-gray-200 w-1/2 py-2 px-3 outline-none'
                placeholder='CVV'
                value={shippingDetails.cardDetails.cardCvv}
                onChange={handleDetails}
                name="cardDetails.cardCvv"
              />
            </div>
          </div>
        }{
          page === 0 &&
          <div className='w-full flex items-center justify-center mt-6'>
            <button style={{ backgroundColor: "rgba(147, 147, 255,0.7)" }} className='bg-blue-500 w-full md:w-full py-2 text-sm text-black font-semibold border-none'>
              Add a new Address
                    </button>
          </div>
        }

        {page === 0 && <button onClick={handleSecondStep} className=' float-right w-full mt-10 bg-blue-500 text-white text-sm font-semibold py-2'>Next</button>}
        {page === 1 && <button onClick={(e) => handleSubmit(e)} className=' float-right w-full mt-10 bg-blue-500 text-white text-sm font-semibold py-2'>Pay $ 2432</button>}

      </div>
    </div>
  );
};

export default ShippingMain;
