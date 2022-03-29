import React from 'react'
import { MdSearch } from 'react-icons/md';
import ProfilePicMini from '../ProfilePic/ProfilePic';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Leader from '../RolePrivate/Leader';
import ProfilePicMembers from '../ProfilePicMembers/ProfilePicMembers';

const Main_header = ({url_pic='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',idTeam,idLeader,members}) => {
 
  const user = useSelector((state) => state.user);

  return (
    <div className='flex flex-col  px-6 py-3 border-b border-gray-200'>
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
 { /*        <div className='flex gap-3'>
            <h2 className='text-lg font-medium text-gray-900'>Equipo</h2>
            <ProfilePicMembers members={members}/>
  </div>*/}

          <Leader idLeader={idLeader}>
            <div>
              <Link to={`/users/${idTeam}`} className='border-2 border-color-tertiary text-color-tertiary px-4 py-2 rounded-md'>Invitar</Link> 
            </div>
          </Leader>

        </div>
    </div>
  )
}

export default Main_header