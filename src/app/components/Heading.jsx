import React from 'react';

const Heading = ({ children }) => {
  return (
    <div className='w-full flex items-center justify-center font-montserrat'>
        <div className="bg-secondary-light text-center py-4 px-6 md:px-8 lg:px-10 rounded-md shadow-md">
      <h2 className="text-white text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide">
        {children}
      </h2>
        </div>
    </div>
  );
};

export default Heading;
