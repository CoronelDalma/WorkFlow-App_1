import React from 'react'
import { MdSearch } from 'react-icons/md';

const Main_header = ({username='Usuario'}) => {
  return (
    <div className='flex flex-col  px-6 py-3 border-b border-gray-200'>
       <div className='flex justify-between'>
           <div className='flex relative'>
                <span ><MdSearch className='w-6 h-6 text-gray-600 absolute inset-y-0 left-0 pl-1'/></span>
                <input type="search" placeholder='Search' className='text-gray-600 pl-6 rounded-md placeholder-shown:border-red-100'/>
           </div>
          
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