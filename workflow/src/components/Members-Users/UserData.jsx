import React, { useRef } from 'react'
import { post } from '../../api'

const UserData = ({user}) => {
 
  return (
    <div className='flex gap-3 flex-wrap mb-3'>
        <div>
            {/*<label htmlFor="name">Nombre: </label>*/}
            <input disabled value={user.name} className='pl-2'/>
        </div>
        <div>
            <label htmlFor="role">Rol: </label>
            <input disabled value={user.role} className='pl-2 w-[100px]'/>
        </div>
        <div>
            <label htmlFor="email">Email: </label>
            <input disabled value={user.email} className='pl-2'/>
        </div>
        {/*<label>{user._id}</label>*/}
  </div>
  )
}

export default UserData