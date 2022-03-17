import React, { useState } from 'react'
import { MdAddTask } from 'react-icons/md'
import Form from '../Form/Form'
import FormInput from '../Form/FormInput'
import AddCardOrListTitle from './AddCardOrListTitle'

const AddCardOrList = ({type}) => {
  return (
    <div className='relative overflow-hidden w-4/6 mx-auto shadow-lg'>
      <input type="checkbox"
              className='absolute top-0 inset-x-0 w-full h-12 
                        opacity-0 z-10 cursor-pointer peer'/>

      <div className='bg-color-btn h-12 w-full pl-5 flex items-center'>
        <AddCardOrListTitle addType={type}/>
      </div>

      <MdAddTask className='text-white absolute top-3 right-3 peer-checked:text-color-tertiary'/>
 
      <div className='bg-white overflow-hidden transition-all duration-500
                        max-h-0 peer-checked:max-h-max'>
        {type==='card'?
            <Form action="" method="post" >
              <FormInput type={'text'} name={'title'} label={'Título de la tarea'} />
              <FormInput type={'text'} name={'url_img'} label={'URL de imagen'} />
              <FormInput type={'date'} name={'date'} label={'Fecha límite'} />
              <FormInput type={'text'} name={'priority'} label={'Prioridad'} />
              <p className='block text-color-text-h text-sm font-bold mb-2'>Descripción:</p>
              <p><textarea name='description' 
                            className='shadow appearance-none border rounded w-full py-2 px-3
                            text-color-text-h leading-tight focus:outline-none focus:shadow-outline'>
                  </textarea>
              </p>

              <div className="flex justify-evenly">
                <div>
                  <input type={'checkbox'} name={'complete'} 
                          className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                  <label className="inline-block text-gray-800">
                      Completado
                  </label>
                </div>

                <div>
                  <input type={'checkbox'} name={'validated'}
                          className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                  <label className="inline-block text-gray-800">
                      Validado
                  </label>
                </div>
              </div>
              <button className='my-4'>Enviar</button>
        </Form>
            :<p>Agregar Lista</p>}
      </div>
    </div>
  )
}

export default AddCardOrList