import React from 'react'
import {MdEdit, MdDelete} from 'react-icons/md'

const CardList = ({work}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto bg-white">
      {
        work.image&&<img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
      }
      
      <div className="px-6 py-4">
        <div className='flex justify-between'>
          <div className="font-bold text-lg mb-2">{work.title}</div>
          <div className='flex gap-1'>
              <button><MdEdit className='text-purple-500'/></button>
              <button><MdDelete className='text-red-400'/></button>
          </div>
        </div>

        <p className="text-gray-700 text-sm">
          {work.description}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  )
}

export default CardList
