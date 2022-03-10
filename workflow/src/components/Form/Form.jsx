import React from 'react'

const Form = ({props,children}) => {
  return (
    <form {...props} className='flex flex-col gap-3'>
        {children}
    </form>
  )
}

export default Form