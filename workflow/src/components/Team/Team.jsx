import React, { useEffect, useState } from 'react'
import TeamHeader from './Team-header'
import List from '../List/List'
import { get, post } from '../../api'
import NewListModal from '../Modal/NewListModal'
import { DragDropContext} from 'react-beautiful-dnd'

// FAke api
//import { getLists, addList } from "../../api/teams";
import Spinner from '../Spinner/Spinner'


const Team = ({idTeam}) => {
  const [team, setTeam] = useState();
  const [modalOpened,setModalOpened] = useState(false)

  const addList = (event) => {
    event.preventDefault();
    const {name, description} = event.target
    const newList = {
          name:name.value,
          description: description.value
    }
    post("/teams/"+idTeam+"/addList",newList)
    .then(res => {
      //setLists([...lists,res.data]);
      get("/teams/"+idTeam)
      .then(res => {
        setTeam(res.data)
      })
      .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
    setModalOpened(false);
  } 


  useEffect(() => {
    //api
    get("/teams/"+idTeam)
    .then(res => {
      setTeam(res.data)
      console.log(res.data)
    })
    .catch(error => console.log(error))
  },[idTeam])
  
  // ---- DRAGGABLE ----
  const removeFromList = (list, index) => {
    const result = list.tasks

    const [removed] = result.splice(index, 1);
    return [removed, result];
  };

  const addToList = (list, index, element) => {

    const result = list
    result.splice(index, 0, element);
    return result;
  };

  const reorder = (list,startIndex,endIndex) =>{
    console.log(list)
    const res = list;
    const [removed] = res.splice(startIndex,1);
    res.splice(endIndex,0,removed)
    return res;
  }

  const onDragEnd = (result) => {
    if (!result.destination) return;
    
    const listCopy = {...team.lists}

    const sourceList = listCopy[result.source.droppableId]

    if(result.source.droppableId !== result.destination.droppableId){
      const [removedElement, newSourceList] = removeFromList(sourceList, result.source.index)
      listCopy[result.source.droppableId] = newSourceList;
      const destinationList = listCopy[result.destination.droppableId]
      listCopy[result.destination.droppableId] = addToList(
        destinationList, result.destination.index, removedElement
      )
    }else {
      //console.log("misma lista")
      reorder(sourceList,result.source.index, result.destination.index)
   
    }

    //console.log(listCopy)
    //setLists({...listCopy})
  };

  

  return (
      <div className='h-screen rounded-r-md text-white w-full bg-color-bg-secondary'>
        {modalOpened&&<NewListModal setModalOpen={setModalOpened} add={addList}/> }
          {team&&<TeamHeader idTeam={idTeam} idLeader={team.idLeader._id}/>}
          
          <DragDropContext onDragEnd={onDragEnd}>
            {/* <MainContent/>*/}
            {team? 
              <div className='p-6 max-w-full'>
                <div className='flex justify-between '>
                  <div>
                      <h2 className='font-bold text-2xl mb-2'>
                              {team.name}</h2>
                      <p>Descripción: {team.description}</p>
                  </div>

                  <button className='ml-auto border-2 border-color-tertiary rounded-md px-2 text-color-tertiary' onClick={()=>{setModalOpened(true)}}> +Nueva lista</button>
        
                </div>


                <div className='h-[500px] w-[75vw] overflow-x-scroll flex gap-3 mt-10 pb-3 rounded-md mx-auto '>
                  {team&&
                    team.lists.map((list,index) =>(
                      <List key={list._id} prefix={index} data={list} idTeam={idTeam} setTeam={setTeam}/>
      
                    ))
                  }
                   
                  </div>
              </div>
              :
              <Spinner/>
            }

          </DragDropContext>
        
      </div>

    
  )
}

export default Team
