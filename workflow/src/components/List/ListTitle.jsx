import React from 'react'
import More from '../SVG-reutilizable/More'


const ListTitle = ({title}) => {
  return (
    <div className='flex justify-between'>
        <h4 className='text-color-text-h font-bold text-xl text-center'>
          {title}
        </h4>
        <More widthIcon={30} heightIcon={30} />
    </div>

  )
}

export default ListTitle