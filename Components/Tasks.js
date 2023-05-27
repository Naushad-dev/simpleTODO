

// const TasksArea = () => {
//   const allTasks = [
//     {
//       id: "#12",
//       taskTitle: "Assignmnets",
//       description: "Complete all previous Assignments on time",
//     },
//   ];
// console.log(allTasks)
//   const[task,setTask]= useState('');
//   const[taskdescp,setTaskDescp]=useState('')

//   const pushData=(title,descp)=>{
//     const data={}
//     data.taskTitle=title;
//     data.description=descp;
//     return data;
//   }
// function submitData(){
//   let subdata=pushData(task,taskdescp);
//   allTasks.push(subdata);
// }


// export default TasksArea;
import React, { useState } from "react";
import TaskCard from "./TaskCards";
import "./componentsStyle/componetstyles.css";

const TasksArea = () => {
  const [allTasks, setAllTasks] = useState([
    {
      id: "#12",
      taskTitle: "Assignmnets",
      description: "Complete all previous Assignments on time",
    },
    {
      id: "#13",
      taskTitle: "Journals",
      description: "Complete all previous Journals on time",
    },
    {
      id: "#15",
      taskTitle: "Projects",
      description: "Complete Mini project  on time",
    },
  ]);

  const [task, setTask] = useState("");
  const [taskdescp, setTaskDescp] = useState("");

  const pushData = (title, descp) => {
    const data = {};
    data.id = "#" + Math.floor(Math.random() * 100); // Generate a random ID
    data.taskTitle = title;
    data.description = descp;
    return data;
  };

  function submitData() {
    if(task=="" && taskdescp==""){
alert("Enter the Task")
    }
    else{
    let subdata = pushData(task, taskdescp);
    setAllTasks([...allTasks, subdata]); // Append new task to the existing task array
    setTask(""); // Clear the task input field
    setTaskDescp(""); // Clear the description input field
    }
  }
  const deleteTask = (taskId) => {
    const updatedTasks = allTasks.filter((task) => task.id !== taskId);
    setAllTasks(updatedTasks);
  };

  return (
    <div className="task-conatiner">
      <div className="display-tasks">
        {allTasks.map((data) => (
          <TaskCard key={data.id} id={data.id} title={data.taskTitle} descp={data.description} onDelete={()=>deleteTask(data.id)}/>
        ))}
      </div>
      <div className="button-container">
        <input
          type="text"
          className="task-input"
          placeholder="✍️Enter task Title"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <input
          type="text"
          className="task-descp"
          placeholder="✍️Enter Descp"
          value={taskdescp}
          onChange={(event) => {
            setTaskDescp(event.target.value);
          }}
        />
        <button onClick={submitData}>Add task</button>
      </div>
    </div>
  );
};

export default TasksArea;
