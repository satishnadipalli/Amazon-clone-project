import React from 'react';
import { Link } from 'react-router-dom';

const Suggetion = ({ searchData, setShow }) => {
  function handleDontshow() {
    setShow(false);
  }

  return (
    <div className='absolute z-50 mt-1 ml-36 bg-white border border-gray-300 rounded-md shadow-md'>
      {searchData.length > 0 &&
        searchData.map((element) => (
          <Link to={`/productsss/${element.title}`} key={element.id}>
            <div onClick={handleDontshow} className='px-4 py-2 text-sm hover:bg-gray-100'>
              {element.title}
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Suggetion;
