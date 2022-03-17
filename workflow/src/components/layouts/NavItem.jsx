import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({title, to}) => {
  return (
    <li className='text-color-bg font-semibold m-0 ml-3 cursor-pointer'>
        <Link to={to}>{title}</Link>
    </li>
  )
}

export default NavItem