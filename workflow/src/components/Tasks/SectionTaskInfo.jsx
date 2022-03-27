import React from 'react'

const SectionTaskInfo = ({children, title='Sin título asignado'}) => {
  return (
    <section className='my-5'>
        <hr className='pb-5'></hr>
        <h2 className='font-bold'>{title}</h2>
            {children}

    </section>
  )
}

export default SectionTaskInfo