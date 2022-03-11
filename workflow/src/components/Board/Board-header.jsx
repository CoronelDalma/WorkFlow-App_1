import React from 'react'
import { MdSearch } from 'react-icons/md';
import ProfilePicMini from '../ProfilePic/ProfilePic';

  //modal 
  import InvitationModal from '../Modal/InvitationModal'
  import useModal from '../../Hooks/useModal'
import Button from '../Buttons/Button';

const Main_header = ({username='Usuario',url_pic='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}) => {
  const [isOpenModal, openModal, closeModal] = useModal();

  return (
    <div className='flex flex-col  px-6 py-3 border-b border-gray-200'>
       <InvitationModal isOpen={isOpenModal} closeModal={closeModal} title='Mandar invitación'/>
       <div className='flex justify-between'>
          <div className='flex relative'>
                <span ><MdSearch className='w-6 h-6 text-gray-600 absolute inset-y-0 left-0 pl-1'/></span>
                <input type="search" placeholder='Search' className='text-gray-600 pl-6 rounded-md placeholder-shown:border-red-100'/>
          </div>
          
          <div className='flex gap-2 items-center'>
              <p className='leading-7'>{username}</p>
              <button >
                <img src={url_pic} alt="profile pic" className='w-8 h-8 rounded-full object-cover' />
              </button>
                
          </div>
           
        </div> 

        <div className='flex items-center justify-between py-2'>
          <div className='flex gap-3'>
            <h2 className='text-lg font-medium text-gray-900'>Equipo</h2>
            <div className='flex items-center'> {/* componente colaboradores*/}       
                <ProfilePicMini/>
                <ProfilePicMini/>
                <ProfilePicMini/>
            </div>
          </div>

          <div>
            <Button action={openModal}>Invitar</Button>
          </div>
        </div>
    </div>
  )
}

export default Main_header