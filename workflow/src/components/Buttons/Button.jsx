import React from 'react'

const Button = ({action,children}) => {
  return (
    <button onClick={()=>action()} className='bg-gradient-to-r from-purple-700 to-blue-500 hover:from-purple-600 hover:to-blue-400 rounded-lg px-3 py-2 text-white font-bold'>
        {children}
    </button>
  )
}

export default Button