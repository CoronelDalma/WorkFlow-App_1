import React from 'react'

const AddCardOrListTitle = ({addType}) => {
  return (
    <div >
        <h2 className='text-lg font-semibold text-white'>{addType==='card'?'+ Agregar tarea':'+ Agregar Lista'}</h2>
    </div>
  )
}

export default AddCardOrListTitle