import React, { useEffect, useState } from 'react'
import MiniBoard from '../MiniBoard/MiniBoard'
import MainHeader from './Main_header'

//modal 
import ProfilePic from '../ProfilePic/ProfilePic'
import {FaWindowClose} from 'react-icons/fa'

import { getTeams, addTeam } from "../../api/teams";
import NewTeamModal from '../Modal/NewTeamModal'

const Main = () => {
  const [myTeams, setMyTeams] = useState([])
  const [modalOpened,setModalOpened] = useState(false)
   
  useEffect(() => {
      getTeams().then((data) => setMyTeams(data));
  },[])
 

  const add = (event) => {
      event.preventDefault();
      const {name,cover,description} = event.target
      const newTeam = {
            name:name.value,
            cover:cover.value,
            description:description.value
        }
      addTeam(newTeam);
      setMyTeams([...myTeams,newTeam]);
      setModalOpened(false);
  }

  return (
    <div className='flex-1 min-w-0 h-fit mt-2 rounded-r-md bg-color-bg-secondary'>
        <MainHeader/>
        <div className='p-6'>
          <div className='flex justify-evenly'>
            <ProfilePic urlImg={'https://i.pinimg.com/736x/c0/f0/30/c0f0302707c98b3bb6698aa4e2b42aef.jpg'}/>
            <h2 className='text-color-text-h text-2xl text-center mb-2'>Equipos de trabajo</h2>
            <button onClick={()=>{setModalOpened(true)}} 
                            className='bg-gradient-to-r from-purple-700 to-blue-500 
                                    hover:from-purple-600 hover:to-blue-400 rounded-lg 
                                    px-2 text-white font-bold'>Agregar Equipo</button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-10 rounded-md'>
            {
             myTeams.map((team) =>(
              <MiniBoard key={team.id} name={team.name} url={'#'} description={team.description} cover={team.cover}/>
             )
             )
            }

          </div>
  
        </div>
        {modalOpened&&
            <NewTeamModal setModalOpen={setModalOpened} addTeam={add}/>
      
        }
    </div>
  )
}

export default Main