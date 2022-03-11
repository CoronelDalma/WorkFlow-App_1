import React, { useState } from 'react'
import { MdAddTask } from 'react-icons/md'

const AddCardOrList = ({name,children}) => {
  return (
    <div className='relative overflow-hidden w-4/6 mx-auto'>
      <input type="checkbox" 
              className='absolute top-0 inset-x-0 w-full h-12 
                        opacity-0 z-10 cursor-pointer peer'/>

      <div className='bg-blue-500 h-12 w-full pl-5 flex items-center'>
        <h5 className='text-lg font-semibold text-white'>{name}</h5>
      </div>

      <MdAddTask className='text-white absolute top-3 right-3 peer-checked:text-purple-400'/>
 
      <div className='bg-white overflow-hidden transition-all duration-500
                        max-h-0 peer-checked:max-h-40'>
        {children}
      </div>
    </div>
  )
}

export default AddCardOrList