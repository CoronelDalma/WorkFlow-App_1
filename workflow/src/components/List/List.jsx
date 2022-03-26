import React, { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Button from '../Buttons/Button'
import NewWorkModal from '../Modal/NewWorkModal'

import CardList from './CardList'
import ListTitle from './ListTitle'
//api
import { get, post } from '../../api'
import AddCardOrListcopy from './AddCardOrList'

const List = ({ prefix, data}) => {
    const [tasks, setTasks] = useState(data.tasks)
    const [modalOpened,setModalOpened] = useState(false)
    const [list, setList] = useState(data)

    const add = (event) => {
      event.preventDefault();
      const {name, description} = event.target
      const newTask = {
        name: name.value,
        description: description.value,
        }
        post("/lists/"+list._id+"/addTask",newTask)
        .then(res => {
          setTasks([...tasks,res.data]);
          console.log(res)
        })
        .catch(error => console.log(error))
        setModalOpened(false);
    }
   
  return (
    <div className='w-96 min-h-full bg-color-bg flex flex-col gap-4 px-3 py-4 border-2 border-color-border rounded-md'>
   
        <Droppable droppableId={`${prefix}`} >
          {(provided, snapshot) => {
            return (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <ListTitle name={list.name} description={list.description}/>
                {console.log(list)}
              {
                tasks.map((task, i) =>
                  <CardList work={task} key={task._id} index={i} idList={list._id}/>
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
