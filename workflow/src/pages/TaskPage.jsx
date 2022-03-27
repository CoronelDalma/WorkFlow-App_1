import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../api'
import Fondo from '../components/layouts/Fondo'
import Sidebar from '../components/Sidebar/Sidebar'

const TaskPage = () => {
  const params = useParams()
  const [task,setTask] =useState()

  useEffect(() => {
    get("/tasks/"+params.idTask)
    .then(res => setTask(res.data))
    .catch(error => console.log(error))
  },[params.idTask])

  return (
    <main className='flex w-full'>
    <Sidebar/>
    <Fondo>
      {console.log(task)}
    </Fondo>


  </main> 
  )
}

export default TaskPage