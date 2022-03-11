import React from 'react'

const MiniBoard = ({name, id}) => {
  return (
    <div className="h-full w-full ">

      <button className='w-1/3 h-64 rounded-md bg-blue-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100'>
          <h3>{name}</h3>
      </button>
    </div>

  )
}

export default MiniBoard