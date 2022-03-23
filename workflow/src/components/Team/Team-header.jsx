import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md';
import ProfilePicMini from '../ProfilePic/ProfilePic';

//modal 
import InvitationModal from '../Modal/InvitationModal'

import Button from '../Buttons/Button';
import { useSelector } from 'react-redux';

const Main_header = ({url_pic='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}) => {
  const [modalOpened,setModalOpened] = useState(false)
  const user = useSelector((state) => state.user);

  const add = (event) => {
    event.preventDefault();
    const {email,role ,description} = event.target
    const newInvitation = {
          email:email.value,
          role:role.value,
          description:description.value
      }
   // addInvitation(newInvitation);
 
    setModalOpened(false);
}
  return (
    <div className='flex flex-col  px-6 py-3 border-b border-gray-200'>
       {modalOpened&&<InvitationModal setModalOpen={setModalOpened} addInvitation={add}/> }
       <div className='flex justify-between'>
          <div className='flex relative'>
                <span ><MdSearch className='w-6 h-6 text-gray-600 absolute inset-y-0 left-0 pl-1'/></span>
                <input type="search" placeholder='Search' className='text-gray-600 pl-6 rounded-md placeholder-shown:border-red-100'/>
          </div>
          
          <div className='flex gap-2 items-center'>
              <p className='leading-7'>{user.name}</p>
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
            <Button onClick={()=>{setModalOpened(true)}}>Invitar</Button> 
          </div>
        </div>
    </div>
  )
}

export default Main_header