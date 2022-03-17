import React, { useState } from 'react'
import AddCardOrList from './AddCardOrList'
import CardList from './CardList'
import ListTitle from './ListTitle'


const List = ({title,works}) => {
    const [tasks, settasks] = useState(works)
  return (
    <div className='max-w-xl bg-color-bg flex flex-col gap-4 px-3 py-4 border-2 border-color-border rounded-md'>
        <ListTitle title={title}/>
        {
            tasks.map((task) =>
               <CardList work={task} key={task.id}/>
            )
        }
        <AddCardOrList type={'card'}/>
 
        
    </div>
  )
}

export default List
