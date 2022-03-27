import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Team from '../components/Team/Team'
import { useParams } from 'react-router-dom'
import Fondo from '../components/layouts/Fondo'



const TeamPage = () => {
  const params = useParams()
  
  return (
    <main className='flex w-full '>
      <Sidebar/>
     <Fondo>
        <Team idTeam={params.idTeam}/>
     </Fondo>

    </main>

  )
}

export default TeamPage