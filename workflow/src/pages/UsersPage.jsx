import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { get, post } from '../api'
import { MdMarkEmailRead } from 'react-icons/md'

import Fondo from '../components/layouts/Fondo';
import Spinner from '../components/Spinner/Spinner';
import UserData from '../components/Members/UserData';
import { useParams } from 'react-router-dom';

const UsersPage = () => {
    const params = useParams()
    const [users, setUsers] = useState(); 

    const handleAddInvitation = (id) =>{
      const newMember = {
          idTeam: params.idTeam,
          idNewMember: id,
      }
      post("/teams/addMember",newMember)
      .then(res => {
        console.log(res)
        
      })
      .catch(error => console.log(error))
    }




    useEffect(() => {
        get("/users")
        .then(res => setUsers(res.data))
        .catch(error => console.log(error))
      },[])

  return (
    <main className='flex w-full'>
      <Sidebar/>
      <Fondo>
        <div className='w-full h-fit p-3 rounded-r-md'>
            <h1 className='text-2xl font-bold py-4'>Usuarios registrados</h1>
            <hr></hr>
            {console.log(users)}
            {users?

                users.map((user) => (
                  <div key={user._id} className='flex gap-3 border-2 border-color-border shadow-md my-4 p-3 w-4/5 mx-auto'>
                    <UserData  user={user}/>
                    <button onClick={()=>{handleAddInvitation(user._id)}}><MdMarkEmailRead className='text-color-tertiary w-6 h-6 ml-auto rounded-md hover:bg-white '/></button>
                  </div>
                ))   
            :<Spinner/>}
        </div>
      </Fondo>
      


    </main>
    
  )
}

export default UsersPage