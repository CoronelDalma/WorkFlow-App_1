import React from 'react'

const MiniBoard = ({name, id}) => {
  return (
    <button className='bg-slate-400 w-1/3 h-64 rounded-md'>
        <h3>{name}</h3>
    </button>
  )
}

export default MiniBoard