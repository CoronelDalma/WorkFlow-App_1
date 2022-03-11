import React from 'react'
import Fondo from '../components/layouts/Fondo'
import Sidebar from '../components/Sidebar/Sidebar'
import Main from '../components/Main/Main'
import Board from '../components/Board/Board'
const Home = () => {
  return (
    <div className='page h-screen flex'>
      <Sidebar/>
      {/*<Main />*/}
      <Board/>
    </div>
     
  
    
  )
}

export default Home