import UniqueProduct from './UniqueProduct';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { fetchData } from '../../DataFectch';
import { numbering } from './Functions';

const SingleProduct = ({ element }) => {
  console.log(element);

  return (
    <Link to={`/ontwoproduct/${element.productId}`}>
      <div className="max-w-md w-64 h-96 rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative p-3">
          <div className='w-full h-52 flex items-center justify-center'>
            <img className="w-full max-h-52" src={"http://localhost:3000/uploads/"+element.image[0]} alt="Product Image"/>
          </div>
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            {element.badge}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2 overflow-hidden">
            <div className="clamp-1">{element.title}</div>
          </h3>
          <p className="text-gray-600 text-sm mb-4 clamp-2">
            {element.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">${element.price}</span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm  py-1 px-3 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;



