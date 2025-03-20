// Banner.jsx
import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="w-full max-w-6xl mx-auto bg-gray-50 p-4 md:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
      {/* Background circles */}
      <div className="absolute right-0 top-0 w-2/3 h-full">
        <div className="absolute right-0 top-0 h-48 w-48 md:h-64 md:w-64 rounded-full bg-amber-50 opacity-80"></div>
        <div className="absolute right-10 md:right-20 bottom-0 h-32 w-32 md:h-48 md:w-48 rounded-full bg-blue-100 opacity-70"></div>
      </div>
      
      {/* Text Content */}
      <div className="z-10 max-w-md text-center md:text-left md:pr-4 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Best Lather Jacket Collection
          <br />
          For You
        </h1>
        <p className="mt-4 text-gray-600">
          For those who prefer a hands-free,
          <br />
          stylish, and functional option.
        </p>
        <button className="mt-6 px-6 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
          Shop Now
        </button>
      </div>
      
      {/* Image */}
      <div className="z-10 relative w-56 h-48 md:w-80 md:h-56">
        <Image
          src="/products/banner.png" 
          alt="Yellow leather crossbody bag"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;