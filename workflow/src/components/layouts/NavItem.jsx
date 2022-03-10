import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({title, to}) => {
  return (
    <li className='text-purple-900 hover:text-white m-0 ml-3 cursor-pointer'>
        <Link to={to}>{title}</Link>
    </li>
  )
}

export default NavItem