import React from 'react'
import Fondo from '../components/layouts/Fondo'
import Sidebar from '../components/Sidebar/Sidebar'
import Main from '../components/Main/Main'

const Home = () => {
  return (
    <div className='page h-screen flex'>
      <Sidebar/>
      <Main />
    </div>
     
  
    
  )
}

export default Home