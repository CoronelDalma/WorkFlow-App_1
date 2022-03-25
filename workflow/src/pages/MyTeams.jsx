import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Main from '../components/Main/Main'
import Fondo from '../components/layouts/Fondo'


const Home = () => {

  return (
    <main className='flex w-full'>
      <Sidebar/>
      <Fondo>
        <Main/>
      </Fondo>

 
    </main> 
  )
}

export default Home