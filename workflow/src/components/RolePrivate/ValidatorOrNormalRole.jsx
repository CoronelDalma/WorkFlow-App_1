import { useSelector } from 'react-redux'

const ValidatorOrNormalRole = ({role,id,children}) => {
const user = useSelector((state)=>state.user)
  return (
    (role==='validator'||role==='normal')&&(user.id===id)? "":children
  )
}

export default ValidatorOrNormalRole