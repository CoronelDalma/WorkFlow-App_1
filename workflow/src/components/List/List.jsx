import React, { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Button from '../Buttons/Button'
import NewWorkModal from '../Modal/NewWorkModal'
import AddCardOrList from './AddCardOrList'

import CardList from './CardList'
import ListTitle from './ListTitle'


const List = ({title,works, prefix}) => {
    const [tasks, settasks] = useState(works)
    const [modalOpened,setModalOpened] = useState(false)

    const add = (event) => {
      event.preventDefault();
      const {title,url_img,date,priority,description,completed,validated} = event.target
      const newTask = {
        title: title.value,
        url_img: url_img.value,
        date: date.value,
        priority: priority.value,
        description: description.value,
        completed: completed.value,
        validated: validated.value
        }
      //addWork(newWork); api
      //setTasks([...tasks,newTask]);
      setModalOpened(false);
  }
  return (
    <div className='w-96 min-h-full bg-color-bg flex flex-col gap-4 px-3 py-4 border-2 border-color-border rounded-md'>
   
        <Droppable droppableId={`${prefix}`} >
          {(provided, snapshot) => {
            return (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <ListTitle title={title}/>
              {
                tasks.map((task, i) =>
                  <CardList work={task} key={task.id} index={i}/>
                )
              }
              {provided.placeholder}
            </div>
            )
          }}

        </Droppable>
        <Button onClick={()=>{setModalOpened(true)}}>Agregar tarea</Button>
        {modalOpened&&
            <NewWorkModal setModalOpen={setModalOpened} addWork={add}/>
      
        } 


    </div>
  )
}

export default List
