import React from 'react'
import Category from './Category'
import Price from './Price'

const Sidebar = ({handleChange}) => {
    
  return (
    <div className='text-[22px]  mb-[22px] w-[100%]  flex flex-row h-full  z-3    '>
      <section className='' >

      
        
<Category handleChange={handleChange}/>
<Price handleChange={handleChange}/>



      </section>
    </div>
  )
}

export default Sidebar






