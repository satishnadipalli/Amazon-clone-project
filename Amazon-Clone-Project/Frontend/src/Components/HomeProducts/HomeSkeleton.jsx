import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

const StyledSkeletonContainer = styled.div`
  /* Your custom styles here */
`;

const HomeSkeleton = () => {
  return (
    Array(8).fill(0).map((ele, index) => (
      <div key={index} className="max-w-md w-64 h-96 rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative w-full p-3">
          <div className='w-full h-52 flex items-center justify-center'>
            <Skeleton height={220} width={220} />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2 overflow-hidden">
            <div className="">
              <Skeleton count={3} />
            </div>
          </h3>

          <div className="flex justify-between">
            <Skeleton height={30} width={100} />
            <Skeleton height={30} width={100} />
          </div>

        </div>
      </div>
    ))
  );
};

export default HomeSkeleton;
