import React from 'react'
import {MdEdit, MdDelete} from 'react-icons/md'
import Tag from '../Tags/Tag'
import { Draggable } from 'react-beautiful-dnd'

const CardList = ({work, index}) => {
  return (
    <Draggable draggableId={"draggable"+work.id} index={index}>
      {(provided, snapshot) => {
          return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto bg-color-bg-secondary mb-4"
                  ref={provided.innerRef}
                  snapshot={snapshot}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}>
              {
                work.image&&<img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
              }
              
              <div className="px-6 py-4">
                <div className='flex justify-between'>
                  <div className="text-color-text-h font-bold text-lg mb-2">{work.title}</div>
                  <div className='flex gap-2'>
                      <button className=' '><MdEdit className='text-color-btn w-6 h-6 hover:bg-white rounded-md'/></button>
                      <button><MdDelete className='text-color-tertiary w-6 h-6 rounded-md hover:bg-white '/></button>
                  </div>
                </div>

                <p className="text-color-text-h text-sm">
                  {work.description}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <Tag text={'Nuevo'}/>
                <Tag text={'travel'}/>
                <Tag text={'winter'}/>
              </div>
            </div>
          
          )
      }}

    </Draggable>

  )
  
}

export default CardList
