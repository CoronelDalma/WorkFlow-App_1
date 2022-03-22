import React from 'react'

const MiniBoard = ({name, description, cover}) => {
  return (
    <button className=" bg-color-bg rounded-md border-2 hover:border-color-tertiary hover:shadow-2xl">
      <div className='p-5'>
        <h2 className='text-color-text-h font-bold text-2xl'>{name}</h2>
        <p className='text-color-text-h text-left'>{description}</p>
      </div>
      <div className=''>
        <img className='h-48 w-full object-cover object-center transition-all hover:object-bottom duration-1000 rounded-b-md' src={cover} alt={name} />
      </div>

      
    </button>

  )
}

export default MiniBoard