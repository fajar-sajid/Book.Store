import React from 'react'
import Input from '../productcomp/Input'
const Price = ({handleChange}) => {
    
  return (
    <div className='flex flex-row text-xl '>
      <h1 className='mb-3 font-bold text-center '>Price</h1>

         
      <Input
      handleChange={handleChange}
      value={''}
      title="All"
      name="test2 "/>
      
      <Input
      handleChange={handleChange}
      value={50}
      title="$0 - $50"
      name="test2 "/>

<Input
      handleChange={handleChange}
      value={100}
      title="$50 - $100"
      name="test2 "/>

<Input
      handleChange={handleChange}
      value={150}
      title="$100 - $150"
      name="test2 "/>

<Input
      handleChange={handleChange}
      value={200}
      title="Over $50"
      name="test2 "/>
      
      

    </div>
  )
}

export default Price


