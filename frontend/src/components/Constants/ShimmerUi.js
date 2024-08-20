import React from 'react';

const ShimmerUi = () => {
  return (
    <div className="bg-white p-4 sm:p-10 m-4 sm:m-10 animate-pulse">
      <div className="h-32 sm:h-48 bg-gray-300 mb-4"></div>
      <div className="h-4 bg-gray-300 w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-300 w-1/2 mb-4"></div>
      <div className="h-4 bg-gray-300 w-2/3 mb-4"></div>
      <div className="h-4 bg-gray-300 w-1/3 mb-4"></div>
    </div>
  );
};

export default ShimmerUi;
