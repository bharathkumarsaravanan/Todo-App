import React from "react";
import { Typography } from "@mui/material";
import { useState,useEffect,useCallback } from "react";
import Tasks from "./tasks";
import {Button} from "@mui/material";
import CreatePopup from "./popups/CreateTask";
import ViewPage from "./popups/ViewTask";

function ProjectDet(project){

    const [tasks,setTasks] = useState();
    const [completed,setcompleted] = useState();
    const [popup,setPopup] = useState(false)
    const [view,setView] = useState(false)

    const tasksFetch = () => {
        return fetch('http://localhost:4000/tudos/'+project.id)
                .then(response => response.json())
                .then((task) => {
                    setTasks(task.tasks)
                    setcompleted(task.completed)
                })
    }

    useEffect(() => {
        tasksFetch();
    },[])

    function TaskPopup(){
        setPopup((prev) => !prev)
    }
    function ViewPopup(){
        setView(prev => !prev)
        console.log(view)
    }

    function AddTask(newTask){
        if(newTask.status==='todo'){
            setTasks(prev =>{
                return [newTask,...prev]
            })
        }else{
            setcompleted(prev =>{
                return [newTask,...prev]
            })
        }
       
    }

    function RemoveTask(id,status){
        console.log(id)
        if(status==='todos'){
            setTasks((prev) => {
                return prev.filter((items)=> {
                    return items.id !== id
                })
            })
        }else{
            setcompleted((prev) => {
                return prev.filter((items)=> {
                    return items.id !== id
                })
            })
        }
       
    }

    return(
        <div className="projectList">
            <div style={{display:'flex',gap:'45rem'}}>
                <Typography variant="h4" style={{width:'30rem'}} gutterBottom>
                    {project.title}
                </Typography>
                <div style={{display:'flex',gap:'2rem', padding:'14px 10px 0px 0px',marginBottom:'10px'}}>
                <Button variant="contained" onClick={TaskPopup}>Add</Button>
                <Button variant="contained" onClick={ViewPopup}>View</Button>
                </div>
            </div>
        
        <div className="projectContainer">
            {tasks&&tasks.map((list,index) => <Tasks key={index} id={list.id} title={list.title} description={list.description} page='index' />)}
        </div>

        <div className="popup" style={{display:!popup&&'none',width: '15rem'}}>
            <CreatePopup project={project.id} popup={TaskPopup} Add={AddTask} />
        </div>

        <div style={{display: !view&&'none'}} >
            <ViewPage tasks={tasks} completed={completed} title={project.title} closeBtn={ViewPopup} remove={RemoveTask} />
        </div>
    </div>
    )

}

export default ProjectDet;