import React, { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Button from '../Buttons/Button'
import NewWorkModal from '../Modal/NewWorkModal'
import  { Navigate } from 'react-router-dom'
import CardList from './CardList'
import ListTitle from './ListTitle'
import {FiDelete} from 'react-icons/fi'
//api
import { get, post, del } from '../../api'


const List = ({ prefix, data,idTeam, setTeam}) => {
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
    const deleteList = (idList) =>{
      del("/teams/"+idTeam+"/removeList/"+idList)
      .then(res => {
        get("/teams/"+idTeam)
        .then(res => {
          setTeam(res.data)
        })
        .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  
    }
  return (
    <div className=' bg-color-bg flex flex-col gap-4 px-3 py-4 border-2 border-color-border rounded-md '>
   
        <Droppable droppableId={`${prefix}`} >
          {(provided, snapshot) => {
            return (
              <div {...provided.droppableProps} ref={provided.innerRef} className='w-[300px] overflow-auto h-full'>
                <div className='flex justify-between'>
                  <ListTitle name={list.name} description={list.description}/>
                  <button onClick={()=> deleteList(list._id)}>
                    <FiDelete className='text-color-tertiary font-semibold w-6 h-6'/>
                  </button>
                </div>

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
