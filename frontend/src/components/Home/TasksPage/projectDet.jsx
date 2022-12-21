import React from "react";
import { Typography } from "@mui/material";
import { useState,useEffect,useCallback } from "react";
import Tasks from "./tasks";
import {Button} from "@mui/material";
import CreatePopup from "../popups/CreateTask";
import ViewPage from "../popups/ViewTask";
import {motion} from "framer-motion";


function ProjectDet(project){

    const [tasks,setTasks] = useState();
    const [completed,setcompleted] = useState();
    const [popup,setPopup] = useState(false)
    const [view,setView] = useState(false)
    const [newitem,setnewItem] =useState({id:''});

    const tasksFetch = useCallback(() => {
        return fetch('http://localhost:4000/tudos/'+project.id)
                .then(response => response.json())
                .then((task) => {
                    setTasks(task.tasks)
                    setcompleted(task.completed)
                })
    })

    var CreatTaskFetch = useCallback((NewItem) =>{
        return fetch('http://localhost:4000/tudos',{
                method: "POST",
                body: JSON.stringify(NewItem),
                headers: {'Content-type': 'application/json; charset=UTF-8'}
                })
                .then(response => response.json())
                .then(result => {
                    console.log(result.Item[0])
                    setnewItem(result.Item[0])
                });
    })


    tasksFetch();


    function TaskPopup(){
        setPopup((prev) => !prev)
    }
    function ViewPopup(){
        setView(prev => !prev)
        console.log("view",view)
    }

    function AddTask(newTask){
        CreatTaskFetch(newTask)
        // newTask.id = newid.id;
        console.log(newTask);
        if(newTask.status==='todo'){
            setTasks(prev =>{
                return [...prev,newitem]
            })
        }else{
            setcompleted(prev =>{
                return [...prev,newitem]
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
            console.log(tasks)
        }else{
            setcompleted((prev) => {
                return prev.filter((items)=> {
                    return items.id !== id
                })
            })
        }

       
    }

    return(
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1}} className="projectList">
            <div style={{display:'flex',gap:'45rem'}}>
                <motion.div animate={{x: 0, opacity: 1}} initial={{x: -100,opacity: 0}} transition={{delay: 1, duration: 1}}><Typography variant="h4" style={{width:'30rem',fontWeight:'6px'}} gutterBottom>
                    {project.title}
                </Typography></motion.div>
                <div style={{display:'flex',gap:'2rem', padding:'14px 10px 0px 0px',marginBottom:'10px'}}>
                <Button 
                    variant="contained" 
                    component={motion.button}
                    // initial={{scale:1}}
                    animate={{scale:[0,1.5,1]}}
                    transition={{delay:2.3,duration:0.4}} 
                    onClick={TaskPopup}>
                        Add
                    </Button>
                <Button 
                    variant="contained" 
                    component={motion.button}
                    // initial={{scale:1}}
                    animate={{scale:[0,1.5,1]}}
                    transition={{delay:2.5,duration:0.4}} 
                    onClick={ViewPopup}>
                    View
                    </Button>
                </div>
            </div>
        
        <motion.div initial={{x: -100}} animate={{x: 0}} transition={{delay: 1.2}} className="projectContainer">
            {tasks&&tasks.map((list,index) => <Tasks key={index} delay={index} task={list} page='index' />)}
        </motion.div>

            <CreatePopup portal={popup} project={project.id} popup={TaskPopup} getValue={AddTask} default={false} />

            <ViewPage visible={view} tasks={tasks} completed={completed} project={project} closeBtn={ViewPopup} remove={RemoveTask} />
    </motion.div>
    )

}

export default ProjectDet;