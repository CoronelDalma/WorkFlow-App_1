import React, { useState } from 'react'
import {IoIosArrowDown} from 'react-icons/io'

const Dropdown = ({children}) => {
    const [openOptions,setOpenOptions] = useState(false)
  return (

        <div className="relative inline-block text-right">
            <div>
                <button type="button" onClick={()=> setOpenOptions(!openOptions)} className="inline-flex justify-center w-full rounded-md border border-color-tertiary shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ">
                    <IoIosArrowDown/>
                </button>
            </div>
            {openOptions&&
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                       <div className="py-1" role="none">
                            {children}
                       </div>
                   </div>
            }
 
        </div>
  )
}

export default Dropdown