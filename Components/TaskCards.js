import React from 'react'
import { MdDelete} from "react-icons/md";

 const TaskCard = (props) => {
  function deleteElement(){
    props.onDelete();
  }
 
  return (
    <div className='task-card'>
        <span>{props.id}</span><h1>{props.title}</h1>
        <p>{props.descp} </p>
        <button className='del-btn' onClick={deleteElement}><MdDelete color='white'/></button>
    </div>
  )
}

export default TaskCard;