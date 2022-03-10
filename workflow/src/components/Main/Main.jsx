import React from 'react'
import MiniBoard from '../MiniBoard/MiniBoard'
import MainHeader from './Main_header'

//modal 
import NewBoardModal from '../Modal/NewBoardModal'
import useModal from '../../Hooks/useModal'

const Main = () => {
  const [isOpenModalNew, openModalNew, closeModalNew] = useModal();

  return (
    <div className='flex-1 min-w-0 bg-gradient-to-br from-purple-600 via-orange-50 to-orange-600 mt-2 rounded-r-md'>
        <NewBoardModal isOpen={isOpenModalNew} closeModal={closeModalNew} title='Nuevo Equipo de trabajo'/>
        <MainHeader/>
        
       {/* <MainContent/>*/}
       <div className='p-6'>
         <div className='flex justify-evenly'>
          <h2 className='text-2xl text-center mb-2'>Equipos de trabajo</h2>
          <button onClick={() => openModalNew()}>Nuevo Equipo</button>
         </div>
         
         <MiniBoard name={'tablero 1'} url={'#'}/>
        </div>
    </div>
  )
}

export default Main