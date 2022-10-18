import React from "react";
import { Typography } from "@mui/material";
import { useState,useEffect,useCallback } from "react";
import Tasks from "./tasks";
import {Button} from "@mui/material";
import CreatePopup from "./popups/CreateTask";


function ProjectDet(project){

    const [tasks,setTasks] = useState();
    const [popup,setPopup] = useState(false)

    const tasksFetch = () => {
        return fetch('http://localhost:4000/tudos/'+project.id)
                .then(response => response.json())
                .then((task) => setTasks(task.tasks))
    }

    useEffect(() => {
        tasksFetch();
    },[])

    function TaskPopup(){
        setPopup((prev) => !prev)
    }

    function AddTask(newTask){
        setTasks(prev =>{
            return [newTask,...prev]
        })
    }

    return(
        <div className="projectList">
            <div style={{display:'flex',gap:'45rem'}}>
                <Typography variant="h4" style={{width:'30rem'}} gutterBottom>
                    {project.title}
                </Typography>
                <div style={{display:'flex',gap:'2rem', padding:'10px 10px 0px 0px'}}>
                <Button variant="contained" onClick={TaskPopup}>Add</Button>
                <Button variant="contained" >View</Button>
                </div>
            </div>
        
        <div className="projectContainer">
            {tasks&&tasks.map((list,index) => <Tasks key={index} title={list.title} description={list.description} />)}
        </div>

        <div className="popup" style={{display:!popup&&'none'}}>
            <CreatePopup project={project.id} popup={TaskPopup} Add={AddTask} />
        </div>
    </div>
    )

}

export default ProjectDet;