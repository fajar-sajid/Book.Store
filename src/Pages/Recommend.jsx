import React from 'react';
import Buttons from '../productcomp/Buttons';

const Recommend = ({ handleClick }) => (
  <div className='pt-5 xl:ml-7'>
    <h1 className='text-xl font-bold text-center sm:text-left'>Recommended</h1>
    <div className='flex flex-wrap justify-center gap-2 mt-3 text-lg sm:justify-start'>
      <Buttons onClickHandler={handleClick} value="fiction" title="Fiction" />
      <Buttons onClickHandler={handleClick} value="non-fiction" title="Non-Fiction" />
      <Buttons onClickHandler={handleClick} value="classic" title="Classic" />
      <Buttons onClickHandler={handleClick} value="crime" title="Crime" />
      <Buttons onClickHandler={handleClick} value="thriller" title="Thriller" />
      <Buttons onClickHandler={handleClick} value='' title="All" />
      <Buttons onClickHandler={handleClick} value={50} title="$0 - $50" />
      <Buttons onClickHandler={handleClick} value={100} title="$50 - $100" />
      <Buttons onClickHandler={handleClick} value={150} title="$100 - $150" />
      <Buttons onClickHandler={handleClick} value={200} title="$150 - $200" />
    </div>
  </div>
);

export default Recommend;

