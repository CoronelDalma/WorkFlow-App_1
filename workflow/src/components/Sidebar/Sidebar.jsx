import React from 'react'
import Logo from '../SVG-reutilizable/Logo'
import LinksSidebar from './LinksSidebar';


const Sidebar = () => {
  const mockupTableros = 
    [
      {
        "id": 1,
        "title": "tablero 1"
      },
      {
        "id": 2,
        "title": "tablero 2"
      },
      {
        "id": 3,
        "title": "tablero 3"
      }
    ]  
    
  return (
    <div className='w-64 p-5 mt-2 rounded-l-md'>
        <Logo widthLogo='80' height='24'/>
        <nav className='mt-8'>
          <h3 className='text-sm text-purple-900 font-semibold uppercase tracking-wide'>Tableros</h3>
          <div className="mt-3 -mx-3">
          {
            
            mockupTableros.map((tablero) =>(
              <LinksSidebar key={tablero.id} texto={tablero.title} url="#"/>
            ))
          }
          </div>

          <h3 className='mt-6 text-sm text-purple-900 font-semibold uppercase tracking-wide'>Tareas</h3>
          <div className="mt-3 -mx-3">
          {
            
            mockupTableros.map((tablero) =>(
              <LinksSidebar key={tablero.id} texto={tablero.title} url="#"/>
            ))
          }
          </div>

          <h3 className='mt-6 text-sm text-purple-900 font-semibold uppercase tracking-wide'>Tags</h3>
          <div className="mt-3 -mx-3">
          {
            
            mockupTableros.map((tablero) =>(
              <LinksSidebar key={tablero.id} texto={tablero.title} url="#"/>
            ))
          }
          </div>

          <h3 className='mt-6 text-sm text-purple-900 font-semibold uppercase tracking-wide'>Invitaciones</h3>
          <div className="mt-3 -mx-3">
          {
            
            mockupTableros.map((tablero) =>(
              <LinksSidebar key={tablero.id} texto={tablero.title} url="#"/>
            ))
          }
          </div>
          
        </nav>
    </div>
  )
}

export default Sidebar