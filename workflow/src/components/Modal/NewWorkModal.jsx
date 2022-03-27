import React from 'react'
import {FaWindowClose} from 'react-icons/fa'
import FormInput from '../Form/FormInput'

const NewWorkModal = ({setModalOpen, addWork}) => {
  return (
    <div>
        <div className='absolute left-0 top-0 h-screen w-screen bg-black bg-opacity-30' onClick={()=>{setModalOpen(false)}}></div>
        <div className="bg-white text-color-text-h w-2/4 absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg">
            <button className='absolute right-5 top-5 bg-gradient-to-r from-purple-700 to-blue-500 
                            hover:from-purple-600 hover:to-blue-400 rounded-lg 
                            px-2 text-white' onClick={()=>{setModalOpen(false)}}><FaWindowClose className='w-8 h-8 text-lavender-800 hover:text-lavender-600'/></button>
            <h2 className='p-5 text-lavender-800 text-3xl font-bold'>Agregar Tarea</h2>
            <form className='flex flex-col p-5' onSubmit={addWork}>
                <FormInput name='name' placeholder='Nombre...' type="text" required/>
                <FormInput name='url_img' placeholder='imagen...' type="text" />
                <FormInput name='date' type="date" />
                <FormInput name='priority' placeholder='Prioridad...' type="text" />
                <FormInput name='assigned' placeholder='Colaborador asignado...' type="text"/>
                <textarea className='p-4 bg-color-bg-secondary outline-none border focus:border-color-btn my-5 rounded-md' name='description' placeholder='Descripción...' type="text" />

               
                <button className='bg-gradient-to-r from-purple-700 to-blue-500 
                                hover:from-purple-600 hover:to-blue-400 rounded-lg 
                                px-2 text-white font-bold'>Crear tarea</button>
            
 
            </form>
 
        </div>
    </div>

  )
}

export default NewWorkModal