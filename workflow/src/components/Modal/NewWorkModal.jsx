import React from 'react'
import {FaWindowClose} from 'react-icons/fa'
import FormInput from '../Form/FormInput'

const NewWorkModal = ({setModalOpen, addWork}) => {
  return (
    <div>
        <div className='absolute left-0 top-0 h-screen w-screen bg-black bg-opacity-30' onClick={()=>{setModalOpen(false)}}></div>
        <div className="bg-white w-2/4 absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg">
            <button className='absolute right-5 top-5 bg-gradient-to-r from-purple-700 to-blue-500 
                            hover:from-purple-600 hover:to-blue-400 rounded-lg 
                            px-2 text-white' onClick={()=>{setModalOpen(false)}}><FaWindowClose className='w-8 h-8 text-lavender-800 hover:text-lavender-600'/></button>
            <h2 className='p-5 text-lavender-800 text-3xl font-bold'>Agregar Tarea</h2>
            <form className='flex flex-col p-5' onSubmit={addWork}>
                <FormInput name='title' placeholder='Título...' type="text" required/>
                <FormInput name='url_img' placeholder='imagen...' type="text" />
                <FormInput name='date' type="date" required/>
                <FormInput name='priority' placeholder='Prioridad...' type="text" required/>
                <textarea className='p-4 bg-color-bg-secondary outline-none border focus:border-color-btn my-5 rounded-md' name='description' placeholder='Descripción...' type="text" />

                <div className="flex justify-evenly mb-3">
                    <div>
                    <input type='checkbox' name='completed'
                            className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                    <label className="inline-block text-gray-800">
                        Completado
                    </label>
                    </div>

                    <div>
                    <input type='checkbox' name='validated'
                            className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                    <label className="inline-block text-gray-800">
                        Validado
                    </label>
                    </div>
                </div>
                <button className='bg-gradient-to-r from-purple-700 to-blue-500 
                                hover:from-purple-600 hover:to-blue-400 rounded-lg 
                                px-2 text-white font-bold'>Crear tarea</button>
            
 
            </form>
 
        </div>
    </div>

  )
}

export default NewWorkModal