import React, { useEffect, useState } from 'react'
import TeamHeader from './Team-header'
import List from '../List/List'
import { get } from '../../api'
import Button from '../Buttons/Button'

const tasksMockup =[
  {
      id:1,
      img: '¿',
      title:'Tarea1',
      date:'2022-3-18',
      priority:'1',
      complete: false,
      validate: false,
      description:'dfgd dfgdfgdf dfgdfg'
  },
  {
      id:2,
      img: '¿',
      title:'Tarea2',
      date:'2022-3-18',
      priority:'1',
      complete: false,
      validate: false,
      description:'dfgd dfgdfgdf dfgdfg'
  }
]

const Team = ({idTeam}) => {
  const [team, setTeam] = useState(); 

  useEffect(() => {
    get("/teams/"+idTeam)
    .then(res => {
      setTeam(res.data)
    })
    .catch(error => console.log(error))
  },[idTeam])
  
  return (
    <div className='flex-1 min-w-0 bg-gradient-to-br from-color-btn via-orange-50 to-color-bg-secondary mt-2 rounded-r-md'>
       
        <TeamHeader/>
        
       {/* <MainContent/>*/}
       {team? 
       <div className='p-6'>
         <div className='flex justify-evenly'>
           <div>
              <h2 className='text-color-text-h font-bold text-2xl mb-2'>
                      {team.name}</h2>
              <p>Descripción: {team.description}</p>
           </div>

           <button className='ml-auto'>Miembros</button>
          {console.log(team)}
         </div>
         <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-10 rounded-md'>
          <List title={'Lista 1'} works={tasksMockup}/>
          <List title={'Lista 2'} works={tasksMockup}/>
          <List title={'Lista 3'} works={tasksMockup}/>
         </div>

        </div>
        :
        <p>Loading...</p>}
    </div>
  )
}

export default Team
