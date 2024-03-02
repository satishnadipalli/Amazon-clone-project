import React from 'react';
import { Link } from 'react-router-dom';
const Suggetion = ({searchData,showSuggetions,setShow}) => {
  console.log(searchData)
  
  function handleDontshow(){
    setShow(false)
  }

  
  return (
    <div className='flex flex-col bg-white absolute z-500 border-4 border-solid shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-white  z-50   outline-none text-sm font-semibold pl-2 pt-1 pb-1 w-150 ml-3'>
      {
        searchData.length > 0 && 
        searchData.map((element)=>{
          return (
            <Link to={`/productsss/${element.title}`} >
              <div onClick={handleDontshow} className='shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 font-mono font-light py-2 text-md'>
                {element.title}
              </div>   
            </Link>
            
          )
        })
      }
    </div>
  );
};

export default Suggetion;

