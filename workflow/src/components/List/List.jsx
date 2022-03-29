import React, { useEffect, useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Button from '../Buttons/Button'
import NewWorkModal from '../Modal/NewWorkModal'
import CardList from './CardList'
import ListTitle from './ListTitle'
import {MdEdit, MdDelete} from 'react-icons/md'
//api
import { get, post, del, put, del_ } from '../../api'
import EditListModal from '../Modal/EditListModal'
import Leader from '../RolePrivate/Leader'


const List = ({ prefix, data,idTeam, setTeam, idLeader}) => {
    const [tasks, setTasks] = useState(data.tasks)
    const [modalOpened,setModalOpened] = useState(false)
    const [editListOpened,setEditListOpened] = useState(false)
    const [list, setList] = useState(data)


    const add = (event) => {
      event.preventDefault();
      const {name, description,assigned} = event.target
      const newTask = {
        name: name.value,
        description: description.value,
        assigned: assigned.value
        }
        post("/lists/"+list._id+"/addTask",newTask)
        .then(res => {
          setTasks([...tasks,res.data]);
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
    const updateList = (event) =>{
      event.preventDefault();
      const {description} = event.target
      const newList = {
            description: description.value
      }
      put("/lists/"+list._id,newList)
      .then(res => {
        setList(res.data)
      })
      .catch(error => console.log(error))
      setEditListOpened(false);
  
    }

    const deleteTask = (idTask) => {
          //api
      del_("/lists/"+list._id+"/removeTask/"+idTask)
    .then(res => {
      console.log(res)
      setTasks(...tasks.filter(task => task._id !== idTask))
 
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
                  <div className='flex gap-3'>
                      <button onClick={()=>{setEditListOpened(true)}}>                    
                          <MdEdit className='text-color-btn font-semibold w-6 h-6'/>
                      </button>
                        {editListOpened&&
                            <EditListModal setModalOpen={setEditListOpened} action={updateList} data={list.description} idList={list._id}/>
                        } 
                      <Leader idLeader={idLeader}>
                        <button onClick={()=> deleteList(list._id)}>
                          <MdDelete className='text-color-tertiary font-semibold w-6 h-6'/>
                        </button>
                      </Leader>
 
                  </div>


                </div>

              {tasks&&
                tasks.map((task, i) =>
                  <CardList work={task} key={task._id} index={i} idList={list._id} deleteT={deleteTask}/>
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
