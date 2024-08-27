import React from 'react'

const Buttons = ({onClickHandler,value,title}) => {
  return (
    <div>
   <button onClick={onClickHandler} value={value} className='p-1 w-[120px] bg-black text-white hover:bg-yellow-400 hover:text-black border-solid border-l-[2px]  border-b-[2px] border-t-[2px] border-r-[2px] border-gray-100 rounded-xl' >{title}</button>
    </div>
  )
}

export default Buttons
