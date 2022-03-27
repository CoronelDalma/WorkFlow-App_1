
import React, { useState } from 'react'
import {FaFileDownload} from 'react-icons/fa'
import { get } from '../../api'

const Comment = ({comment}) => {
    const [file, setFile] = useState()
    const downloadFile = () =>{
        get(comment.file)
        .then(res =>{
            console.log(res.data)
            setFile(res.data)
        })
    }
  return (
    <div className='h-full w-full mt-6 px-4 py-2 bg-color-bg-secondary rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
        <div className='flex justify-between'>
            <p><span className='text-lg font-bold'>Usuario:</span> {comment.idUser}</p>
        </div>
  
        <p>{comment.content}</p>
        {comment.file&&
            <button onClick={downloadFile}><FaFileDownload/></button>
        }
        {
            file&&
            <div>
                <img src={file} alt='' className='h-40 w-56 '/>
            </div>
        }

    </div>
  )
}

export default Comment
