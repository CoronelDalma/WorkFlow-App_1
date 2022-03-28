import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {logout} from '../../features/user/userSlice'
import Logo from '../SVG-reutilizable/Logo'
import NavItem from './NavItem'
import {FiMenu,FiXCircle} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Header = () => {
    const user = useSelector((state)=>state.user)
    const dispatch = useDispatch()

    const [openMenu, setOpenMenu] = useState(false);
    const signOut = () =>{
        dispatch(logout())
      }
  return (
      <nav className="bg-color-btn py-3 z-999">
        <div className='max-w-screen-xl mx-auto flex justify-between relative pr-6'>
          <Link to="/"><Logo className='w-44'/></Link>
          <ul className={`${openMenu?"block bg-color-btn":"hidden"} rounded-md bg-clip-padding  md:flex absolute right-0 top-7 md:static p-2 pl-10 md:p-0 md space-y-2 md:space-y-0`}>
              <NavItem to="/" title={"Link"}/>
              <NavItem to="/" title={"Link"}/>
              <NavItem to="/" title={"Link"}/>

              {user.logged?<li onClick={signOut} className='mx-3 cursor-pointer'>Cerrar sesión</li>:<NavItem to="/login" title={"Iniciar sesión"}/>}
              {user.logged&&<p className='mx-2 text-white'>{user.name}-{user.role}</p>}
          </ul>
          <button onClick={()=>{setOpenMenu(!openMenu)}} className='block md:hidden mr-2 md:mr-0'>{openMenu?<FiXCircle className='h-5 w-5'/>:<FiMenu className='h-5 w-5'/>}</button>
        </div>
    </nav> 
    
  )
}

export default Header