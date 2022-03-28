import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { get, post, del } from '../api'
import MemberData from '../components/Members-Users/MemberData';
import {MdEdit, MdDelete} from 'react-icons/md'
import ChangeRoleModal from '../components/Modal/ChangeRoleModal';
import DeleteMemberModal from '../components/Modal/DeleteMemberModal';
import Fondo from '../components/layouts/Fondo';
import Spinner from '../components/Spinner/Spinner';
import Leader from '../components/RolePrivate/Leader';
import { Link } from 'react-router-dom';
import Editor from '../components/RolePrivate/Editor';

const Members = () => {
    const [myTeams, setMyTeams] = useState(); 
    const [editModalOpened,setEditModalOpened] = useState(false)
    const [delModalOpened,setDelModalOpened] = useState(false)
    const [idTeamEdit, setIdTeamedit] = useState("")
    const [idMemberEdit, setIdMemberedit] = useState()
    const [nameMember,setNameMember] = useState("")
   

    const handleEdit = (idT, idM, nameM) =>{
      setIdTeamedit(idT)
      setIdMemberedit(idM)
      setNameMember(nameM)
      setEditModalOpened(true)
    }

     const handleDelete = (id,idM) => {
       setIdTeamedit(id)
       setIdMemberedit(idM)
       setDelModalOpened(true)
     }
    const edit = (event) => {
      event.preventDefault()
      const {idTeam,idMember,newRole} = event.target
      const newData = {
          idTeam: idTeam.value,
          idMember: idMember.value,
          newRole: newRole.value
      }
      post("/teams/changeRole",newData)
      .then(res => {
        get("/teams")
        .then(res => setMyTeams(res.data))
        .catch(error => console.log(error))

      })
      .catch(error => console.log(error))
      setEditModalOpened(false);
    }

    const deleteMember = (event) => {
      event.preventDefault()
      const {idTeam,idMember} = event.target
      const delData = {
          idTeam: idTeam.value,
          idMember: idMember.value,
      }
      console.log(idTeam)
      console.log(idMember)
      del("/teams/removeMember",{data:delData})
      .then(res => {
        console.log(res)
        get("/teams")
        .then(res => setMyTeams(res.data))
        .catch(error => console.log(error))

      })
      .catch(error => console.log(error))
      setDelModalOpened(false);
    }

    useEffect(() => {
        get("/teams")
        .then(res => setMyTeams(res.data))
        .catch(error => console.log(error))
      },[])

  return (
    <main className='flex w-full'>
      <Sidebar/>
      <Fondo>
        <div className='w-full h-fit p-3 rounded-r-md text-white'>
            <h1 className='text-2xl font-bold py-4'>Mis grupos de trabajo</h1>
            <hr></hr>
            {myTeams?
                
                myTeams.map((team) => (
                  <div key={team._id} className='flex gap-3 flex-col border-2 border-color-border shadow-md my-4 p-3'>
                    <Link to={"/my-teams/"+team._id}><h2 className='text-lg font-semibold text-color-tertiary'>{team.name}</h2></Link>
                    <p>Lider {team.idLeader.name}</p>
                    <p>{team.idLeader.email}</p>
                    <div className='flex gap-7'>
                      <h3 className='font-bold'>Miembros</h3>
                      <Leader idLeader={team.idLeader._id}> 
                            <Link to={`/users/${team._id}`} className=' text-white text-lg font-bold'>+</Link> 
                      </Leader>

                    </div>

                    {team.members.map((member) => (
                      <div className='flex gap-3 mb-4'>
                       
                        <MemberData key={member._id._id} member={member}/>
                        <div className='flex gap-3 ml-auto'>
                            <Editor role ={member.role} id={member._id._id}>
                              <Link to={`/users/${team._id}`} className=' text-white text-lg font-bold'>+ Colaborador</Link> 
                            </Editor>

                            <Leader idLeader={team.idLeader._id}> 
                              
                                <button onClick={()=>{handleEdit(team._id, member._id._id, member._id.name)}}><MdEdit className='text-color-btn w-6 h-6 hover:bg-white rounded-md'/></button>
                                {editModalOpened&&
                                    <ChangeRoleModal setModalOpen={setEditModalOpened} change={edit} idTeam={idTeamEdit} idMember={idMemberEdit} name={nameMember}/>
                                } 

                                <button onClick={()=>{handleDelete(team._id,member._id._id)}}><MdDelete className='text-color-tertiary w-6 h-6 rounded-md hover:bg-white '/></button>
                                {delModalOpened&&
                                <DeleteMemberModal setModalOpen={setDelModalOpened} action={deleteMember} idTeam={idTeamEdit} idMember={idMemberEdit}/>}
                              
                            </Leader>
                        </div>
                      </div>

                    ))}
                  </div>
                ))   
            :<Spinner/>}
        </div>
      </Fondo>
      


    </main>
    
  )
}

export default Members