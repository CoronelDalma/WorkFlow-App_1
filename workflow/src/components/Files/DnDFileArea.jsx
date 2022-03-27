import React, { useState } from 'react'

const DnDFileArea = () => {
    const [fileSelected, setFileSelected] = useState()

  return (
    <div className='h-20 border-2 border-color-border hover:bg-transparent hover:border-dashed hover:border-color-tertiary relative'>
        <input type="file" accept='image/*' name='file' multiple className='absolute m-0 p-0 w-full h-full cursor'/>
        <div className='mt-4 text-center'>
            <h3>Arrastra un archivo</h3>
        </div>
    </div>
  )
}

export default DnDFileArea