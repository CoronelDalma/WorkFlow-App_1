import React from 'react'

const Fondo = ({children}) => {
  return (
    <div className='bg-gradient-to-br from-purple-600 via-orange-50 to-orange-600 w-full h-screen flex'>
        {children}
    </div>
  )
}

export default Fondo