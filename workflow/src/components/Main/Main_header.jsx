import React from 'react'
import { MdSearch } from 'react-icons/md';
import SearchTeam from '../Search/SearchTeam';

const Main_header = ({username='Usuario'}) => {
  return (
    <div className='flex flex-col  px-6 py-3 border-b border-gray-200'>
       <div className='flex justify-between'>
           <SearchTeam/>
            <div className='flex gap-2 items-center'>
                <p className='leading-7'>{username}</p>
                <button >
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile pic" className='w-8 h-8 rounded-full object-cover' />
                </button>
                
            </div>
           
        </div> 
       <div>Header Bottom</div>
    </div>
  )
}

export default Main_header