import React from 'react'
import Button from '../Buttons/Button'
import {FaWindowClose} from 'react-icons/fa'

const EditListModal = ({setModalOpen,action, data,idList}) => {
  return (
    <div>
        <div className='absolute left-0 top-0 h-screen w-screen bg-black bg-opacity-30 ' onClick={()=>{setModalOpen(false)}}></div>
        <div className="bg-white w-2/4  absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg text-color-text-h z-50">
            <Button className='absolute right-5 top-5 px-2'
                onClick={()=>{setModalOpen(false)}}><FaWindowClose className='w-8 h-8 '/></Button>
            <h2 className='p-5 text-3xl font-bold'>Valor a cambiar</h2>
            <form className='flex flex-col p-5' onSubmit={action}>
                <input name="description"  cols="30" rows="10"placeholder={data}></input>

                <Button>Guardar</Button>
            </form>

        </div>
    </div>
  )
}

export default EditListModal