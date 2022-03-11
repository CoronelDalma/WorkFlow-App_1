import React from 'react'
import MiniBoard from '../MiniBoard/MiniBoard'
import MainHeader from './Main_header'

//modal 
import NewBoardModal from '../Modal/NewBoardModal'
import useModal from '../../Hooks/useModal'
import ProfilePic from '../ProfilePic/ProfilePic'

const Main = () => {
  const [isOpenModalNew, openModalNew, closeModalNew] = useModal();

  return (
    <div className='flex-1 min-w-0 bg-gradient-to-br from-purple-600 via-orange-50 to-orange-600 mt-2 rounded-r-md'>
        <NewBoardModal isOpen={isOpenModalNew} closeModal={closeModalNew} title='Nuevo Equipo de trabajo'/>
        <MainHeader/>
        
       {/* <MainContent/>*/}
       <div className='p-6'>
         <div className='flex justify-evenly'>
           <ProfilePic urlImg={'https://i.pinimg.com/736x/c0/f0/30/c0f0302707c98b3bb6698aa4e2b42aef.jpg'}/>
          <h2 className='text-2xl text-center mb-2'>Equipos de trabajo</h2>
          <button onClick={() => openModalNew()} className='bg-gradient-to-r from-purple-700 to-blue-500 hover:from-purple-600 hover:to-blue-400 rounded-lg px-2 text-white font-bold'>Nuevo Equipo</button>
         </div>
         <div className='flex-1 overflow-auto bg-gray-50'>
          <MiniBoard name={'tablero 1'} url={'#'}/>
          <MiniBoard name={'tablero 2'} url={'#'}/>
          <MiniBoard name={'tablero 3'} url={'#'}/>
          <MiniBoard name={'tablero 4'} url={'#'}/>
          <MiniBoard name={'tablero 5'} url={'#'}/>
          <MiniBoard name={'tablero 6'} url={'#'}/>
         </div>


        </div>
    </div>
  )
}

export default Main