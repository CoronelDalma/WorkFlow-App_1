import React from 'react'
import BoardHeader from './Board-header'
import List from '../List/List'

const tasksMockup =[
  {
      id:1,
      img: '¿',
      title:'Tarea1',
      date:'2022-3-18',
      priority:'1',
      complete: false,
      validate: false,
      description:'dfgd dfgdfgdf dfgdfg'
  },
  {
      id:2,
      img: '¿',
      title:'Tarea2',
      date:'2022-3-18',
      priority:'1',
      complete: false,
      validate: false,
      description:'dfgd dfgdfgdf dfgdfg'
  }
]

const Main = () => {
  
  return (
    <div className='flex-1 min-w-0 bg-gradient-to-br from-purple-600 via-orange-50 to-orange-600 mt-2 rounded-r-md'>
       
        <BoardHeader/>
        
       {/* <MainContent/>*/}
       <div className='p-6'>
         <div className='flex justify-evenly'>
           
          <h2 className='text-2xl text-center mb-2'>Equipos de trabajo</h2>
          
         </div>
         <div className='flex-1 overflow-auto bg-gray-500'>
          <List title={'Lista 1'} works={tasksMockup}/>
         </div>


        </div>
    </div>
  )
}

export default Main