import React, { useRef } from 'react'
import { post } from '../../api'

const MemberData = ({member, idTeam}) => {
 
  return (
    <div className='flex gap-3 flex-wrap mb-3'>
        <div>
            {/*<label htmlFor="name">Nombre: </label>*/}
            <input disabled value={member._id.name} className='pl-2'/>
        </div>
        <div>
            <label htmlFor="role">Rol: </label>
            <input disabled value={member.role} className='pl-2 w-[100px]'/>
        </div>
        <div>
            <label htmlFor="email">Email: </label>
            <input disabled value={member._id.email} className='pl-2'/>
        </div>
  </div>
  )
}

export default MemberData