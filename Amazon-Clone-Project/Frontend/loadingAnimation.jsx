import React from 'react';
import "./loadingAnimation.css";

const LoadingAnimation = () => {
  return (
    <div style={{ height: '600px' }} className='w-full bg-gray-200 flex items-center justify-center'>
        <span className="spinner spinner-blue"></span>
    </div>
  );
}

export default LoadingAnimation;

