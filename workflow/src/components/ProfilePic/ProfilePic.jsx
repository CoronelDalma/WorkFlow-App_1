import React from 'react'

const ProfilePicMini = ({urlImg = 'https://i.pinimg.com/736x/c0/f0/30/c0f0302707c98b3bb6698aa4e2b42aef.jpg', size = 8, title='sin nombre'}) => {
  return (
    <span className='border-white rounded-full ' title={title}>
        <img src={urlImg} alt="profile pic" className='w-7 h-7 rounded-full object-cover'/>
    </span>
  )
}

export default ProfilePicMini