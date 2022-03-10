import React from 'react'

const Form = ({props,children}) => {
  return (
    <div className='container w-max h-max flex flex-col border-c-border text-white text-center mx-auto rounded'>
      <form {...props} className='flex flex-col gap-3'>
          {children}
      </form>
    </div>
  )
}

export default Form