import { useSelector } from 'react-redux'

const Editor = ({role,id,children}) => {
const user = useSelector((state)=>state.user)
  return (
    (role==='editor')&&(user.id===id)&&children
  )
}

export default Editor