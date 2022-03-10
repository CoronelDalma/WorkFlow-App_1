import React from 'react'

const ModalContainer = ({isOpen, closeModal, title, children}) => {
  return (
    <div className={`bg-stone-700 bg-opacity-70 min-h-screen min-w-full fixed top-0 left-0 z-50 justify-center items-center ${isOpen?'grid':'hidden'}`}>
        <div className='bg-slate-300 p-3 w-80 h-96 flex flex-col '>
            <h3 className='my-2 text-lg'>{title}</h3>
            {children}
            <div className='flex justify-around items-end'>
              <button onClick={()=>closeModal()}>Cerrar</button>
            </div>
            
        </div>
    </div>
  )
}

export default ModalContainer
