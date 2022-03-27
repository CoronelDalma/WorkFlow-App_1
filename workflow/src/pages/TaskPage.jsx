import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get, post, put } from '../api'
import Button from '../components/Buttons/Button'
import DnDFileArea from '../components/Files/DnDFileArea'
import Fondo from '../components/layouts/Fondo'
import ProfilePicMembers from '../components/ProfilePicMembers/ProfilePicMembers'
import Sidebar from '../components/Sidebar/Sidebar'
import SectionTaskInfo from '../components/Tasks/SectionTaskInfo'


const TaskPage = () => {
  const params = useParams()
  const [task,setTask] =useState()
  const [comments, setComments] = useState()


  useEffect(() => {
    get("/tasks/"+params.idTask)
    .then(res =>{ 
      setTask(res.data)
      setComments(res.data.comments)
    })
    .catch(error => console.log(error))
  },[params.idTask])

  const handleUpdate = (event) =>{
    event.preventDefault()
    const {description} = event.target
    const newDescriptionTask = {
      description: description.value
    }
    put("/tasks/"+task._id,newDescriptionTask)
    .then(res => {

    })
  }

  const addComment = (event) =>{
    event.preventDefault()
    const {comment,file} = event.target
    let formData = new FormData()
    formData.append('content',comment.value)
    formData.append('file',file.files[0])

    post("/tasks/"+task._id+"/addComment",formData)
    .then(res => {
      setComments([...comments,res.data])
      event.target.comment.value=""
      event.target.file.value =""
    })
  }
  return (
    <main className='flex w-full'>
    <Sidebar/>
    <Fondo>
      <div className='w-full h-fit p-3 rounded-r-md text-white px-6'>
        {task&&
          <div className='flex flex-col gap-3'>
              <h1 className='text-2xl font-bold py-4'>Tarea : </h1>
              <h3>{task.name}</h3>

              <SectionTaskInfo title='Colaboradores asignados'>
                <ProfilePicMembers members={task.assigned}/>
              </SectionTaskInfo>

              <SectionTaskInfo title={'Descripción'}>
                <form onSubmit={handleUpdate} className='flex flex-col'>
                  <textarea rows={10} cols={40} className='text-color-text-h' name="description">{task.description}</textarea>
                  <Button >Actualizar</Button>
                </form>
              </SectionTaskInfo>

              <SectionTaskInfo title='Comentarios'>
                {comments&&comments.map((comment) =>(
                  <p key={comment._id}>{comment.content}</p>
                ))}

                  <form onSubmit={addComment} className='flex flex-col'>
                    <DnDFileArea/>
                    <textarea rows={5} cols={40} className='text-color-text-h' name="comment" placeholder='Comentar...'></textarea>
                    <Button >Agregar comentario</Button>
                </form>
              </SectionTaskInfo>
 
          </div>
        }
      </div>
  
    </Fondo>


  </main> 
  )
}

export default TaskPage