import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Team from '../components/Team/Team'
import { useParams } from 'react-router-dom'


const TeamPage = () => {
  const params = useParams()
  
  return (
    <div className='page h-screen flex'>
      <Sidebar/>
      <Team idTeam={params.idTeam}/>
    </div>
  )
}

export default TeamPage