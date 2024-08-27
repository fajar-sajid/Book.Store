import React from 'react';

const NavProduct = ({ handleInputChange, query }) => {
  return (
    <div className='pt-8'>
      <nav className='flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-4'>
        <p className='text-xl font-semibold sm:ml-0'>Search</p>
        <div className='border border-black border-solid w-full sm:w-[185px] rounded mt-2 sm:mt-0'>
          <input
            type="text"
            placeholder='Search by Title'
            onChange={handleInputChange}
            value={query}
            className='w-full p-2'
          />
        </div>
      </nav>
    </div>
  );
}

export default NavProduct;
