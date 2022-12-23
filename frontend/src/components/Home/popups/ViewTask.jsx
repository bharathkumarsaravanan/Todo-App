import React from "react";
import ReactDOM from "react-dom";
import { Typography } from "@mui/material";
import Tasks from "../TasksPage/tasks";
import CloseIcon from '@mui/icons-material/Close';
import CreatePopup from "./CreateTask";
import EditPopUp from "./EditTask";
import { useState,useEffect,useCallback } from "react";
import {motion} from "framer-motion"
 
function ViewPage(props){

    const [status,setStatus] = useState();
    const [defaultValue,setDefaultValue] = useState();


    const DeleteFetch = useCallback((id) => {
        return fetch('http://localhost:4000/tudos/tasks/delete',{
                method:'POST',
                body: JSON.stringify(id),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                    }
                })
                .then(response => response.json())
                .then(result => console.log(result))
    })

    const EditFetch = useCallback((editData) => {
        return fetch('http://localhost:4000/tudos/tasks/edit',{
                method:'POST',
                body: JSON.stringify(editData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                    }
                })
                .then(response => response.json())
                .then(result => console.log(result))
    })


    function ClosePopUp(){
        console.log('clicked')
        props.closeBtn();
        }

    function RemoveTask(id,status){
        // console.log(id)
        props.remove(id,status);
        DeleteFetch({id: id});
    }

    function DoubleClickEvent(Item){
        setDefaultValue(Item);
        console.log(Item);

        EditFetch({id: Item.id, status: Item.status==='todo'?'completed':'todo'})

    }

  

    if(!props.visible) return null

    return ReactDOM.createPortal(
        
        <motion.div animate={{opacity:[0,1]}} transition={{duration:0.6}} className="newPortal">
            <motion.div animate={{scale:[0,1.1,1]}} transition={{delay:0.6,duration:0.6}} style={{width:'45rem', height:'35rem'}} className="popup">
                <div style={{display:'flex',justifyContent:'center'}}>
                    <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration:1}}><Typography variant="h3" gutterBottom>{props.project.title}</Typography></motion.div>
                    <CloseIcon onClick={ClosePopUp} className="closeIcon" />
                </div>
                <Typography variant="h4" className="viewTaskHeader" style={{top:'5.5rem'}}  gutterBottom>Todos</Typography>
                <div className="viewTaskContainer1" style={{marginTop:'10px'}}>
                    {props.tasks&&props.tasks.map((list,index) => 
                    <Tasks 
                        key={index} 
                        task={list} 
                        page='view' 
                        delete={RemoveTask} 
                        DoubleClickEvent={DoubleClickEvent} 
                        />)}
                </div>
                <Typography variant="h4" className="viewTaskHeader" style={{top:'21.5rem'}} gutterBottom>Completed</Typography>
                <div className="viewTaskContainer1">
                    {props.completed&&props.completed.map((list,index) => 
                    <Tasks 
                        key={index} 
                        task={list} 
                        page='view' 
                        delete={RemoveTask} 
                        DoubleClickEvent={DoubleClickEvent} 
                        />)}
                </div>
            </motion.div>
        </motion.div>,document.getElementById('portal')

    )
}

export default ViewPage;