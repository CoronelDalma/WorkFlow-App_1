import React, { useState } from 'react'
import AddCardOrList from './AddCardOrList'
import CardList from './CardList'
import ListTitle from './ListTitle'


const List = ({title,works}) => {
    const [tasks, settasks] = useState(works)
  return (
    <div className='max-w-xl bg-slate-300 flex flex-col gap-4 px-3 py-4'>
        <ListTitle title={title}/>
        {
            tasks.map((task) =>
               <CardList work={task}/>
            )
        }
        <AddCardOrList name={'Nueva tarea'}>
          <p>hola mundo</p>
        </AddCardOrList>
        
    </div>
  )
}

export default List
