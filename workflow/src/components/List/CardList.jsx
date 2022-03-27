import React, { useState } from 'react'
import {MdEdit, MdDelete, MdComment} from 'react-icons/md'
import Tag from '../Tags/Tag'
import { Draggable } from 'react-beautiful-dnd'
import AlertDeleteModal from '../Modal/AlertDeleteModal'
import { del } from '../../api'
import Dropdown from '../Dropdown/Dropdown'

const CardList = ({work, index, idList}) => {
  const [modalOpened,setModalOpened] = useState(false)

  const deleteTask = (event) => {
    event.preventDefault();
    console.log(idList)
    console.log(work._id)
    //api
    del("/lists/"+idList+"/removeTask/"+work._id)
    .then(res => {
      console.log(res)
    })
    .catch(error => console.log(error))
    setModalOpened(false);
} 
  return (
    <Draggable draggableId={work._id} index={index}>
      {(provided, snapshot) => {
          return (
            <div className="w-[250px] rounded  shadow-lg mx-auto bg-color-bg-secondary mb-4"
                  ref={provided.innerRef}
                  snapshot={snapshot}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}>
              {
                work.image&&<img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
              }
              
              <div className="px-6 py-4">
                <div className='flex justify-between'>
                  <div className="text-color-text-h font-bold text-lg mb-2">{work.name}</div>
                  <Dropdown>
                      <a href="/" className="text-color-text-h block px-4 py-2 text-sm hover:bg-color-bg-secondary" >Editar</a>
                      <a href="/" className="text-color-text-h block px-4 py-2 text-sm hover:bg-color-bg-secondary" >Comentarios</a>
                     <hr/>
                     <button className='text-color-text-h px-4 py-2 text-sm w-full hover:bg-color-tertiary hover:text-white'>Eliminar</button>
                  </Dropdown>

                </div>

                <p className="text-color-text-h text-sm">
                  {work.description}
                </p>
                <p className="text-color-text-h text-sm">
                  {work.priority}
                </p>
                <p className="text-color-text-h text-sm">
                  {work.date}
                </p>
 
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
              <div className="px-6 pt-4 pb-2">
                <Tag text={'Nuevo'}/>
                <Tag text={'travel'}/>
                <Tag text={'winter'}/>
              </div>
              {modalOpened&&<AlertDeleteModal setModalOpen={setModalOpened} action={deleteTask}/> }
            </div>
            
          )
      }}

    </Draggable>

  )
  
}

export default CardList
