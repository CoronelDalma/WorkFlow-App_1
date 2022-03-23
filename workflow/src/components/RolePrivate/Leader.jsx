import React from 'react'
import { useSelector } from 'react-redux'

const Leader = ({idLeader,children}) => {
  const user = useSelector((state)=>state.user)
  return (
    idLeader===user.id&&children
  )
}

export default Leader