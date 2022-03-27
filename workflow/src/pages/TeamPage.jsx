import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Team from '../components/Team/Team'
import { useParams } from 'react-router-dom'



const TeamPage = () => {
  const params = useParams()
  
  return (
    <main className='flex w-full '>
      <Sidebar/>
     
      <Team idTeam={params.idTeam}/>
    </main>

  )
}

export default TeamPage