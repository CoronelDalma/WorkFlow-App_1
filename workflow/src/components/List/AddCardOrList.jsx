import React, { useState } from 'react'
import { MdAddTask } from 'react-icons/md'
import Form from '../Form/Form'
import FormInput from '../Form/FormInput'
import NewWorkModal from '../Modal/NewWorkModal'
import AddCardOrListTitle from './AddCardOrListTitle'

const AddCardOrListcopy = ({type}) => {
  const [modalOpened,setModalOpened] = useState(true)

  const add = (event) => {
    event.preventDefault();
    const {title,url_img,date,priority,description,completed,validated} = event.target
    const newWork = {
      title: title.value,
      url_img: url_img.value,
      date: date.value,
      priority: priority.value,
      description: description.value,
      completed: completed.value,
      validated: validated.value
      }
    //addWork(newWork); api
    //setWorks([...works,newWork]);
    setModalOpened(false);
}

  return (
    <div className='relative overflow-hidden w-4/6 mx-auto shadow-lg text-black'>
      <input type="checkbox"
              className='absolute top-0 inset-x-0 w-full h-12 
                        opacity-0 z-10 cursor-pointer peer'/>

      <div className='bg-color-btn h-12 w-full pl-5 flex items-center'>
        <AddCardOrListTitle addType={type}/>
      </div>

      <MdAddTask className='text-white absolute top-3 right-3 peer-checked:text-color-tertiary'/>
 
        {type==='card'&&modalOpened?
            <NewWorkModal setModalOpen={setModalOpened} addWork={add}/>
            :<p>Agregar Lista</p>}

    </div>
  )
}

export default AddCardOrListcopy