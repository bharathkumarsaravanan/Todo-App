import React from "react";
import { Typography } from "@mui/material";
import TaskItem from "./taskItem";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Tasks(){
    const [tasks, setTasks] = useState([{}]);
    const [completed, setcompleted] = useState([{}]);
    const {id} = useParams();
    const tasksFetch = () => {
        return fetch('http://localhost:4000/tudos/'+id)
                .then(response => response.json())
                .then((task) => {
                    setTasks(task.tasks)
                    setcompleted(task.completed)
                })
    }
    useEffect(() => {
        tasksFetch();
    },[])
    return(
        <div className="viewTasksComponent" style={{}}>
            <div>
                <Typography variant= 'h3' className="viewTaskHeaderText" >Works done</Typography>
                <div className="viewWorkContainer">
                    {tasks&&tasks.map((task, index) => <TaskItem key={index} title={task.title} description={task.description} />)}     
                </div>
               
            </div><br />
            <div>
                <Typography variant= 'h3' className="viewTaskHeaderText" style={{top:'31rem'}}>Pending Works</Typography>
                <div className="viewWorkContainer">
                        {completed&&completed.map((task, index) => <TaskItem key={index} title={task.title} description={task.description} />)}     
                </div>
            </div>
        </div>
    )

}

export default Tasks;