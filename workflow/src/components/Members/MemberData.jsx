import React, { useRef } from 'react'
import {MdEdit, MdDelete} from 'react-icons/md'
import { post } from '../../api'

const MemberData = ({member, idTeam}) => {
  const role = useRef(null)

  const edit = (event) => {
    const newData = {
        idTeam: idTeam,
        idMember:member._id,
        newRole: role.current
    }
    post("/teams/changeRole",newData)
    .then(res => {
        console.log(res.data)
    })
    .catch(error => console.log(error))
  } 
  return (
    <div className='flex gap-3 flex-wrap mb-3'>
        <div>
            {/*<label htmlFor="name">Nombre: </label>*/}
            <input disabled value={member._id.name} className='pl-2'/>
        </div>
        <div>
            <label htmlFor="role">Rol: </label>
            <input disabled value={member.role}  ref={role} className='pl-2 w-[100px]'/>
        </div>
        <div>
            <label htmlFor="email">Email: </label>
            <input disabled value={member._id.email} className='pl-2'/>
        </div>
        <div className='flex gap-3'>
            <button><MdEdit className='text-color-btn w-6 h-6 hover:bg-white rounded-md'/></button>
            <button><MdDelete className='text-color-tertiary w-6 h-6 rounded-md hover:bg-white '/></button>
        </div>

  </div>
  )
}

export default MemberData