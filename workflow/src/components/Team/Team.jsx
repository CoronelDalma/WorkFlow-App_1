import React, { useEffect, useState } from 'react'
import TeamHeader from './Team-header'
import List from '../List/List'
import { get } from '../../api'
import NewListModal from '../Modal/NewListModal'
import { DragDropContext} from 'react-beautiful-dnd'

// FAke api
import { getLists, addList } from "../../api/teams";


const Team = ({idTeam}) => {
  const [team, setTeam] = useState();
  const [modalOpened,setModalOpened] = useState(false)
  const [lists, setLists] = useState();

  const addList = (event) => {
    event.preventDefault();
    const {name} = event.target
    const newList = {
          name:name.value
          //id: uuid()
    }
      //fake api
    addList(newList);
    //setList
    setModalOpened(false);
} 

  useEffect(() => {
    //-- fake
    getLists().then((data) => setLists(data));
    //api
    get("/teams/"+idTeam)
    .then(res => {
      setTeam(res.data)
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

    const result = list.tasks
    result.splice(index, 0, element);
    return result;
  };

  const reorder = (list,startIndex,endIndex) =>{
    const res = list.tasks;
    const [removed] = res.splice(startIndex,1);
    res.splice(endIndex,0,removed)
    return res;
  }

  const onDragEnd = (result) => {
    if (!result.destination) return;
    
    const listCopy = {...lists}

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
    <div className='flex-1 min-w-0 h-fit bg-gradient-to-br from-color-btn via-orange-50 to-color-bg-secondary mt-2 rounded-r-md'>
       {modalOpened&&<NewListModal setModalOpen={setModalOpened} add={addList}/> }
        <TeamHeader/>
        
        <DragDropContext onDragEnd={onDragEnd}>
          {/* <MainContent/>*/}
          {team? 
            <div className='p-6'>
              <div className='flex justify-between'>
                <div>
                    <h2 className='text-color-text-h font-bold text-2xl mb-2'>
                            {team.name}</h2>
                    <p>Descripción: {team.description}</p>
                </div>

                <button className='ml-auto border-2 border-color-tertiary rounded-md px-2 text-color-tertiary' onClick={()=>{setModalOpened(true)}}> +Nueva lista</button>
                <button className='ml-auto'>Colaboradores</button>
      
              </div>


                <div className='flex overflow-x-scroll gap-3 mt-10 rounded-md'>
                  {
                    lists.map((list,index) =>(
                      <List title={list.title} works={list.tasks} key={list.id} prefix={index}/>
                    ))
                  }

                </div>
            </div>
            :
            <p>Loading...</p>
          }

        </DragDropContext>
       
    </div>
  )
}

export default Team
