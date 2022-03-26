import React from 'react'
import More from '../SVG-reutilizable/More'


const ListTitle = ({name,description ="Sin descripción"}) => {
  return (
    <div className='flex justify-between' title={description}>
        <h4 className='text-color-text-h font-bold text-xl text-center'>
          {name}
        </h4>
        <More widthIcon={30} heightIcon={30} />
    </div>

  )
}

export default ListTitle