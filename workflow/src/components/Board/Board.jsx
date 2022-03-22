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

const Board = ({nameTeam}) => {
  
  return (
    <div className='flex-1 min-w-0 bg-gradient-to-br from-color-btn via-orange-50 to-color-bg-secondary mt-2 rounded-r-md'>
       
        <BoardHeader/>
        
       {/* <MainContent/>*/}
       <div className='p-6'>
         <div className='flex justify-evenly'>
           
          <h2 className='text-color-text-h font-bold text-2xl text-center mb-2'>{nameTeam}</h2>
          
         </div>
         <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-10 rounded-md'>
          <List title={'Lista 1'} works={tasksMockup}/>
          <List title={'Lista 2'} works={tasksMockup}/>
          <List title={'Lista 3'} works={tasksMockup}/>
         </div>


        </div>
    </div>
  )
}

export default Board
