import React from 'react'

const ListTitle = ({name,description ="Sin descripción"}) => {

  return (
    <div className='flex justify-between' >
        <h4 className='text-color-text-h font-bold text-xl text-center cursor-pointer' title={description}>
          {name}
        </h4>
   
    </div>

  )
}

export default ListTitle