import React from 'react'
import Fondo from '../components/layouts/Fondo'
import Sidebar from '../components/Sidebar/Sidebar'
import Board from '../components/Board/Board'

const TeamPage = () => {
  return (
    <div className='page h-screen flex'>
      <Sidebar/>
      <Board nameTeam={"Soy el Equipo 1"}/>
    </div>
  )
}

export default TeamPage