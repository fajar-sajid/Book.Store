import React from 'react'

const Input = ({handleChange,value,title,name}) => {
  return (
    <div>
        <div className='pl-[50px]'>
            <label htmlFor="">
            <input type="radio" name={name} onChange={handleChange} value={value} />
             <span></span>{title}
             </label>
        </div>
    </div>
  )
}

export default Input
