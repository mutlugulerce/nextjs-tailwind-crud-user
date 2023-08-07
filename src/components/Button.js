import React from 'react'

const Button = ({title,styleContainer,handleClick}) => {
  return (
   <button onClick={handleClick} className={`${styleContainer}`}>
   {title}
   </button>
  )
}

export default Button