import React from 'react';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="relative inline-flex">
      <div className="flex h-5 w-5 absolute top-0 left-0">
        <div className="inline-flex w-full h-full bg-gray-400 rounded-full justify-center items-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="flex h-5 w-5 absolute top-0 left-6">
        <div className="inline-flex w-full h-full bg-gray-400 rounded-full justify-center items-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="flex h-5 w-5 absolute top-0 left-12">
        <div className="inline-flex w-full h-full bg-gray-400 rounded-full justify-center items-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
);

export default LoadingSpinner;