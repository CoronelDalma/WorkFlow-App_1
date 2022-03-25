import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { get, post, del } from '../api'
import MemberData from '../components/Members/MemberData';
import {MdEdit, MdDelete} from 'react-icons/md'
import ChangeRoleModal from '../components/Modal/ChangeRoleModal';
import DeleteMemberModal from '../components/Modal/DeleteMemberModal';
import Fondo from '../components/layouts/Fondo';

const Members = () => {
    const [myTeams, setMyTeams] = useState(); 
    const [editModalOpened,setEditModalOpened] = useState(false)
    const [delModalOpened,setDelModalOpened] = useState(false)
    const [idTeamEdit, setIdTeamedit] = useState("")

    const handleEdit = (id) =>{
      setIdTeamedit(id)
      setEditModalOpened(true)
    }

     const handleDelete = (id) => {
       setIdTeamedit(id)
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
      del("/teams/removeMember",delData)
      .then(res => {
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
    <main className='grid grid-flow-col w-full'>
      <Sidebar/>
      <Fondo>
        <div className='w-full h-fit p-3 rounded-r-md px-9'>
            <h1 className='text-2xl font-bold py-4'>Mis colaboradores</h1>
            <hr></hr>
            {console.log(myTeams)}
            {myTeams&&

                myTeams.map((team) => (
                  <div key={team._id} className='flex gap-3 flex-col border-2 border-color-border shadow-md my-4 p-3'>
                    <h2 className='text-lg font-semibold text-color-tertiary'>{team.name}</h2>
                    <p>Lider {team.idLeader.name}</p>
                    <p>{team.idLeader.email}</p>
                    <h3 className='font-bold'>Miembros</h3>
                    {team.members.map((member) => (
                      <div className='flex gap-3 mb-4'>
                        <MemberData key={member._id._id} member={member}/>
                        <div className='flex gap-3 ml-auto'>
                          <button onClick={()=>{handleEdit(team._id)}}><MdEdit className='text-color-btn w-6 h-6 hover:bg-white rounded-md'/></button>
                          {editModalOpened&&
                              <ChangeRoleModal setModalOpen={setEditModalOpened} change={edit} idTeam={idTeamEdit} idMember={member._id._id} name={member._id.name}/>
                          } 

                          <button onClick={()=>{handleDelete(team._id)}}><MdDelete className='text-color-tertiary w-6 h-6 rounded-md hover:bg-white '/></button>
                          {delModalOpened&&
                          <DeleteMemberModal setModalOpen={setDelModalOpened} action={deleteMember} idTeam={idTeamEdit} idMember={member._id._id}/>}
                        </div>
                      </div>
                    ))}
                  </div>
                ))   
            }
        </div>
      </Fondo>
      


    </main>
    
  )
}

export default Members