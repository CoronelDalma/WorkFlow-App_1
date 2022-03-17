import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import Button from '../Buttons/Button';

const SearchTeam = () => {
    const [searchText, setSearchText] = useState("");
    const history = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        history("/my-teams/?search=" + searchText)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='flex relative'>
                <span ><MdSearch className='w-6 h-6 text-gray-600 absolute inset-y-0 left-0 pl-1'/></span>
                <input type="search" placeholder='Search' value={searchText} onChange={(e)=>setSearchText(e.target.value)} className='text-gray-600 pl-6 rounded-md placeholder-shown:border-red-100'/>
           </div>
           <Button type='submit'>Buscar</Button>
        </form>
        
    </div>
  )
}

export default SearchTeam