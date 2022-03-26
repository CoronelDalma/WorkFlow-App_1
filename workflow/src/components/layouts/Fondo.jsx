import React from 'react'

const Fondo = ({children}) => {
  return (
    <div className='bg-gradient-to-br from-fondo1 via-violet-600 to-fuchsia-500 w-full min-h-screen '>
        {children}
    </div>
  )
}

export default Fondo