import React from 'react'

const FormInput = ({label,type,name}) => {
  return (
    <div className='mt-4'>
        <label htmlFor={name} className='block text-gray-700 text-sm font-bold mb-2'>{label}</label>
        <input type={type} name={name}  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder={label}/>
    </div>
  )
}

export default FormInput