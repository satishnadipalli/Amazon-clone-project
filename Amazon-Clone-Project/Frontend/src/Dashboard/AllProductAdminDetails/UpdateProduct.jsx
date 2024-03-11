import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ShippingLabel = ({clickedProduct,setIsUpdateForm}) => {

    const {loginDetails} = useSelector(state=>state.cart)
    const [productDetails,setProductDetails] = useState({
      _id:clickedProduct._id,
      title: clickedProduct.title,
      image: clickedProduct.image,
      categoery:clickedProduct.categoery,
      image_small: clickedProduct.image_small,
      attribute: clickedProduct.attribute,
      brand: clickedProduct.brand,
      description: clickedProduct.description,
      avgRating: clickedProduct.avgRating,
      ratings: clickedProduct.ratings,
      price: clickedProduct.price,
      oldPrice: clickedProduct.oldPrice,
      badge: clickedProduct.badge,
      quantity:clickedProduct.quantity
    });

    function handleDetails(event){
      const {value,name} = event.target
      setProductDetails((previousValue)=>{
        return {
          ...previousValue,
          [name] : value
        }
      })
    }

    async function handleSubmit(event) {
        try {
          event.preventDefault();
        //   const formData = new FormData();
    
        // formData.append('title', productDetails.title);
        // formData.append('image', productDetails.image);
        // formData.append('categoery', productDetails.categoery);
        // formData.append('image_small', productDetails.image_small);
        // formData.append('brand', productDetails.brand);
        // formData.append('description', productDetails.description);
        // formData.append('avgRating', productDetails.avgRating);
        // formData.append('ratings', productDetails.ratings);
        // formData.append('price', productDetails.price);
        // formData.append('oldPrice', productDetails.oldPrice);
        // formData.append('badge', productDetails.badge);
        // formData.append('quantity', productDetails.quantity);
    

          const response = await fetch("http://localhost:3000/updatefullProduct", {
            method: "PATCH",
            headers: {
              "Authorization": `Bearer ${loginDetails.token}`,
              "Content-Type" : "application/json"
            },
            body:JSON.stringify(productDetails)
          });
    
          if (response.ok) {
            setIsUpdateForm(false);
            console.log
          } else {
            console.error(`Error: ${response.status} - ${response.statusText}`);
          }
        } catch (error) {
          console.error("An unexpected error occurred:", error);
        }
      }
    
  return (
    <div className="flex p-5 h-scree w-full n bg-gray-100 absolute m-auto">
      <div className="m-auto">
      <div>
        <div className="mt-5 bg-white rounded-lg shadow">
        <div className="flex">
            <h1 className="inline text-center text-2xl font-semibold leading-none pt-5 pl-6 mb-7">Update the Product</h1>
        </div>
        <div className="px-5 pb-5">

            <label className='text-sm text-gray-700 font-semibold ml-1'>Product Title</label>
            <input
                onChange={handleDetails}
                value={productDetails.title}
                placeholder="title"
                name='title'
                className="mb-3 text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            />
            
            <label className='text-sm text-gray-700 font-semibold ml-1'>Product Description</label>
            <input
                placeholder="Product Description"
                onChange={handleDetails}
                value={productDetails.description}
                name="description"
                className="mb-3 text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            />


            <div className="flex">
            <div className=" w-1/4 pr-2">
                <label className='text-sm text-gray-700 font-semibold ml-1'>Product Brand</label>
            <select
                className="mb-3 text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                id="grid-state"
                onChange={handleDetails}
                value={productDetails.brand}
                name='brand'
                
                >
                <option>Amazon</option>
                <option>Apple</option>
                <option>Lg</option>
                <option>sony</option>
                <option>Nike</option>
                <option>Adidas</option>
            </select>
            </div>
            <div className="flex-grow">
            <label className='text-sm text-gray-700 font-semibold ml-1'>Product Categoery</label>
                <select 
                    className="mb-3 text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    id="grid-state"
                    name='categoery'
                    onChange={handleDetails}
                    value={productDetails.categoery}
                    >
                    <option>Amazon</option>
                    <option>Home</option>
                    <option>Mobiles</option>
                    <option>Fashion</option>
                    <option>Deals</option>
                    <option>Computers</option>
                </select>
            </div>
            </div>
                <label className='text-sm text-gray-700 font-semibold ml-1'>Product Price</label>
                <input
                    placeholder="price"
                    onChange={handleDetails}
                    value={productDetails.price}
                    name="price"
                    className="mb-3 text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <label className='text-sm text-gray-700 font-semibold ml-1'>Old price</label>
                <input
                placeholder="key attributes"
                onChange={handleDetails}
                value={productDetails.attribute}
                name='attribute'
                className="mb-3 text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <div className="flex">
                <div className="flex-grow w-1/4 pr-2">
                    <label className='text-sm text-gray-700 font-semibold ml-1'>Old price</label>
                    <input
                        onChange={handleDetails}
                        value={productDetails.oldPrice}
                        name='oldPrice'
                        placeholder="old price"
                        className="mb-3 text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    />
                </div>

                <div className="flex-grow">
                <label className='text-sm text-gray-700 font-semibold ml-1 mb-1'>Product badge</label>
                <select 
                    className="mb-3 text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    id="grid-state"
                    value={productDetails.badge}
                    onChange={handleDetails}
                    name='badge'
                    >
                    <option>choice</option>
                    <option>limited</option>
                    <option>seller</option>
                </select>

                </div>
                </div>
                <button onClick={handleSubmit} className='w-full bg-gray-600 text-white py-1 mt-3'>Update</button>
            </div>
        </div>
        </div>
    </div>
</div>

  );
};

export default ShippingLabel;
