import React from 'react'
import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar/Sidebar'

const Home = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className='page h-screen flex'>
      {user.logged&&<Sidebar/>}
      <h2>Soy el Loading Page</h2>

    </div>
    
  )
}

export default Home