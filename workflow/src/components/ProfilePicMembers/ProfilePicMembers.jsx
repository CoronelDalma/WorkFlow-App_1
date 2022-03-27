import React from 'react'
import ProfilePicMini from '../ProfilePic/ProfilePic'

const ProfilePicMembers = ({members}) => {
    /* ver como trae la pic del colaborador */
  return (
    <div className='flex items-center'>
        {
            members.map((member) =>(
                <ProfilePicMini key={member._id} urlImg={member.url_pic} title={member.name}/>
            ))
        }      


    </div>
  )
}

export default ProfilePicMembers