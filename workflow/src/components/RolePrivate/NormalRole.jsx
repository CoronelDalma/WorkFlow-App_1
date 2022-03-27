import { useSelector } from 'react-redux'

const NormalRole = ({role,id,children}) => {
const user = useSelector((state)=>state.user)
  return (
    (role==='normal')&&(user.id===id)? "":children
  )
}

export default NormalRole