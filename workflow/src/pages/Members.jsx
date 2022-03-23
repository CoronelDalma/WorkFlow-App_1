import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { get, post } from '../api'
import MemberData from '../components/Members/MemberData';

const Members = () => {
    const [myTeams, setMyTeams] = useState(); 

    useEffect(() => {
        get("/teams")
        .then(res => setMyTeams(res.data))
        .catch(error => console.log(error))
      },[])

  return (
    <div className='page h-screen flex'>
        <Sidebar/>
        <div className='flex-1 min-w-0 h-fit mt-2 rounded-r-md bg-color-bg-secondary px-9'>
          <h1 className='text-2xl font-bold py-4'>Mis colaboradores</h1>
          <hr></hr>
          {console.log(myTeams)}
          {myTeams&&

              myTeams.map((team) => (
                <div key={myTeams._id} className='flex gap-3 flex-col border-2 border-color-border shadow-md my-4 p-3'>
                  <h2 className='text-lg font-semibold text-color-tertiary'>{team.name}</h2>
                  <p>Lider {team.idLeader.name}</p>
                  <p>{team.idLeader.email}</p>
                  <h3 className='font-bold'>Miembros</h3>
                  {team.members.map((member) => (
                    <div className='flex gap-3 mb-4'>
                      <MemberData member={member}/>
                    </div>
                  ))}
                </div>
              ))
              
              
          }
        </div>

  </div>
  )
}

export default Members