import React from 'react'

const Button = (props) => {
  return (
    <button {...props} className='bg-gradient-to-r from-color-btn to-blue-500 hover:from-purple-600 hover:to-blue-400 rounded-lg px-3 py-2 text-white font-bold'>
        {props.children}
    </button>
  )
}

export default Button