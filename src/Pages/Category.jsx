import React from 'react'
import Input from '../productcomp/Input'
const Category = ({handleChange}) => {
  return (
    <div className='flex flex-row text-xl'>
      <h2 className='mb-3 font-bold text-center'>Category</h2>

<div className='flex flex-row '>
<label htmlFor="" >
    <input type="radio" onChange={handleChange} value="" name='test' className=''/>All 
   
 </label>
 </div>
 <div className='flex flex-row '>
<Input type="radio" handleChange={handleChange} value="fiction" title='Fiction' name='test' className='mt-[3px]'/>
<Input type="radio" handleChange={handleChange} value="non-fiction" title='Non-Fiction' name='test' />
<Input type="radio" handleChange={handleChange} value="classic" title='Classic' name='test' />
<Input type="radio" handleChange={handleChange} value="thriller" title='Thriller' name='test' />
<Input type="radio" handleChange={handleChange} value="crime" title='Crime' name='test' />
</div>
    </div>
  )
}

export default Category
