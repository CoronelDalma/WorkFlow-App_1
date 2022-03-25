import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Team from '../components/Team/Team'
import { useParams } from 'react-router-dom'
import Fondo from '../components/layouts/Fondo'


const TeamPage = () => {
  const params = useParams()
  
  return (
    <main className='flex w-full'>
      <Sidebar/>
      <Fondo>
        <div className='w-full'>
          <Team idTeam={params.idTeam}/>
        </div>
 
      </Fondo>

 
    </main>

  )
}

export default TeamPage