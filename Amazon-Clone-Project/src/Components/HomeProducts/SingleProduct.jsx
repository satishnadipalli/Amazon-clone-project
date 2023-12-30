import UniqueProduct from './UniqueProduct';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { fetchData } from '../../DataFectch';
import { numbering } from './Functions';
const SingleProduct = ({ parts }) => {
  const imagesparts = [parts.img1, parts.img2, parts.img3, parts.img4];


  return (
    <div className='bg-white w-96 h-80'>
      <span className='font-semibold text-lg ml-4 font-sans'>{parts.headding}</span>
      <div className='bg-white h-80 w-96 sm:w-96 bg-amawhite grid grid-cols-2 sm:grid-cols-2 p-4 pt-1'>
        {imagesparts.map((element, index) => (
          <Link key={index} to={`/products/${encodeURIComponent(numbering(element))}`}>
            <UniqueProduct img={import.meta.env.BASE_URL + element} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SingleProduct;


