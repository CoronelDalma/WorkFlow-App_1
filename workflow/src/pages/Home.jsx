import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Fondo from '../components/layouts/Fondo';
import Sidebar from '../components/Sidebar/Sidebar'
import Logo from '../components/SVG-reutilizable/Logo'

const Home = () => {
  const user = useSelector((state) => state.user);
  return (
    <main className='bg-slate-500 grid grid-flow-col ' >
      {user.logged&&<Sidebar/>}
        <Fondo>
          <div className='w-4/5 m-auto p-3 grid grid-cols-1 lg:grid-cols-2 lg:h-4/5 bg-blue-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 -z-1'>
            <div className='rounded-md flex justify-center items-center'>
              <img src="https://blush.design/api/download?shareUri=w8bEAgJLnlaj2vJS&c=Bottom_0%7E393f82-0.1%7E89c5cc-0.2%7E393f82-0.3%7E393f82_Hair_0%7Ee8e1e1-0.1%7E181658-0.2%7Ee8e1e1-0.3%7Eb58143_Skin_0%7Eb28b67-0.1%7E915b3c-0.2%7E915b3c-0.3%7E57331f_Top_0%7Eff4133-0.1%7Effa434-0.2%7Eff4133-0.3%7Ea8e5ba&w=800&h=800&fm=png" 
                alt='hero'/>
            </div>
            <div className='flex flex-col justify-center items-center gap-3 text-white'>
              <h1 className='font-medium'><Logo className='w-24 sm:w-40 md:w-56'/> te ayuda a alcanzar tus metas!</h1>
              <p className='w-2/3'>Armá tus listas de tareas</p>
              <p className='w-2/3'> Asigná colaboradores para cada tarea.</p>
              <p className='w-2/3'> Asigná colaboradores para cada tarea.</p>
              <p className='w-2/3'>Asigná prioridades</p>
              {!user.logged&&<Link to='/register' className='m-6'>Registrate gratis</Link>}
            </div>
          </div>
        </Fondo>

    </main>

    
  )
}

export default Home