import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../SVG-reutilizable/Logo'
import LinksSidebar from './LinksSidebar';

//fake api
//import { getTeams} from "../../api/teams";
import { get } from '../../api'

const Sidebar = () => {
  const [myTeams, setMyTeams] = useState([]);

/*  useEffect(() => {
    getTeams().then((data) => setMyTeams(data));
},[])*/
  useEffect(() => {
    get("/teams")
    .then(res => setMyTeams(res.data))
    .catch(error => console.log(error))
  },[])
    
  return (
    <div className='w-64 p-5 mt-2 rounded-l-md'>
        <Link to='/'>
          <Logo widthLogo='100' height='40' colorLetras='black'/>
        </Link>
        <nav className='mt-8'>
          
          <Link to='/my-teams'>
          <h3 className='text-sm text-color-tertiary font-semibold uppercase tracking-wide'>Equipos de trabajo</h3>
          </Link>
          
          <div className="mt-3 -mx-3">
          {
            
            myTeams.map((team) =>(
              <LinksSidebar key={team._id} texto={team.name} url="/team"/>
            ))
          }
          </div>

          <h3 className='mt-6 text-sm text-color-tertiary font-semibold uppercase tracking-wide'>Tareas</h3>
          <div className="mt-3 -mx-3">
          {
            
            myTeams.map((tablero) =>(
              <LinksSidebar key={tablero.id} texto={tablero.name} url="#"/>
            ))
          }
          </div>

          <h3 className='mt-6 text-sm text-color-tertiary font-semibold uppercase tracking-wide'>Tags</h3>
          <div className="mt-3 -mx-3">
          {
            
            myTeams.map((tablero) =>(
              <LinksSidebar key={tablero.id} texto={tablero.name} url="#"/>
            ))
          }
          </div>

          <h3 className='mt-6 text-sm text-color-tertiary font-semibold uppercase tracking-wide'>Invitaciones</h3>
          <div className="mt-3 -mx-3">
          {
            
            myTeams.map((tablero) =>(
              <LinksSidebar key={tablero.id} texto={tablero.name} url="#"/>
            ))
          }
          </div>
          
        </nav>
    </div>
  )
}

export default Sidebar