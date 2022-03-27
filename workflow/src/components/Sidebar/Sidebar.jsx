import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import LinksSidebar from './LinksSidebar';
import {BsArrowLeftCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {RiTeamFill} from 'react-icons/ri'
import {MdDashboardCustomize, MdMarkEmailRead} from 'react-icons/md'
import {FaTasks,FaTags} from 'react-icons/fa'
import { setOpen } from '../../features/sidebarSlice';


import { get } from '../../api'
import TextSidebar from './TextSidebar';
import { useSelector, useDispatch } from 'react-redux';

const Sidebar = () => {
  const open = useSelector((state) => state.sidebar);
  const dispatch = useDispatch()

  const [myTeams, setMyTeams] = useState([]);

  useEffect(() => {
    get("/teams")
    .then(res => setMyTeams(res.data))
    .catch(error => console.log(error))
  },[])
   
  return (

    <div className={`${open?"w-64 p-5" : "w-[120px] md:w-20 px-3 py-5 overflow-hidden"} duration-300 rounded-l-md bg-color-bg-secondary relative`}>
        <button className='absolute cursor-pointer -right-2 top-9 text-white'
                onClick={() => dispatch(setOpen(open))}>
                  <BsArrowLeftCircleFill className={`w-8 h-8 ${!open&&"rotate-180 "} rounded-full `}/>
        </button>
        <Link to='/' className='flex gap-x-4 items-center'>
          <span><AiFillHome className='w-9 h-9 duration-500 '/></span>
          <h2 className={`font-bold text-2xl origin-left duration-300 ${!open&& "scale-0"}`}>Home</h2>
        </Link>
        <nav className='mt-8'>
          
          <Link to='/my-teams' className='flex gap-x-4 items-center'>
            <span><MdDashboardCustomize className={`w-5 h-5 ${!open&&"scale-125"} duration-500 text-color-tertiary`}/></span>
            <TextSidebar text={"Mis equipos de trabajo"} openSidebar={open}/>
          </Link>
{ /*         <div className="mt-3 -mx-3">
          {
            
            myTeams.map((team) =>(
              <LinksSidebar key={team._id} texto={team.name} url={"/my-teams/"+team._id}/>
            ))
          }
        </div>*/}
          <Link to='/members' className='flex gap-x-4 items-center mt-4'>
            <span><RiTeamFill className={`w-5 h-5 ${!open&&"scale-125"} duration-500 text-color-tertiary`}/></span>
            <TextSidebar text={"Grupos"} openSidebar={open}/>
          </Link>

          <Link to='#' className='flex gap-x-4 items-center mt-4'>
            <span><FaTasks className={`w-5 h-5 ${!open&&"scale-125"} duration-500 text-color-tertiary`}/></span>
            <TextSidebar text={"Tareas"} openSidebar={open}/>
          </Link>
 

          <Link to='#' className='flex gap-x-4 items-center mt-4'>
            <span><FaTags className={`w-5 h-5 ${!open&&"scale-125"} duration-500 text-color-tertiary`}/></span>
            <TextSidebar text={"Tags"} openSidebar={open}/>
          </Link>
{ /*         <div className="mt-3 -mx-3">
          {
            
            myTeams.map((tablero) =>(
              <LinksSidebar key={tablero.id} texto={tablero.name} url="#"/>
            ))
          }
        </div>*/}

          <Link to='/users' className='flex gap-x-4 items-center mt-4'>
            <span><MdMarkEmailRead className={`w-5 h-5 ${!open&&"scale-125"} duration-500 text-color-tertiary`}/></span>
            <TextSidebar text={"Usuarios registrados"} openSidebar={open}/>
          </Link>
          
        </nav>
    </div>
  )
}

export default Sidebar