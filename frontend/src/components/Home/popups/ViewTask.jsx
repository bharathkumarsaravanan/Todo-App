import React from "react";
import ReactDOM from "react-dom";
import { Typography } from "@mui/material";
import Tasks from "../tasks";
import CloseIcon from '@mui/icons-material/Close';
import CreatePopup from "./CreateTask";
import EditPopUp from "./EditTask";
import { useState,useEffect,useCallback } from "react";
import {motion} from "framer-motion"
 
function ViewPage(props){

    const [popup,setpopUp] = useState(false);
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

    const EditFetch = useCallback((item) => {
        return fetch('http://localhost:4000/tudos/tasks/edit',{
                method:'POST',
                body: JSON.stringify(item),
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

        DeleteFetch({id: id});
        props.remove(id,status);
    }

    function DoubleClickEvent(Item){

        // console.log(Item)
        setDefaultValue(Item);


        setpopUp((prev) => !prev)

    }

    function clickPopUp(){
        setpopUp((prev) => !prev)
    }

    function Edittask(task,id){
        console.log(task,id);
    }   

    if(!props.visible) return null

    return ReactDOM.createPortal(
        
        <div className="newPortal">
            <div className="popup" style={{textAlign:'center'}}>

                <EditPopUp visible={popup} project={props.title.id} popup={clickPopUp} getValue={Edittask} default={defaultValue?defaultValue:''} />

                {/* <div className="popup" style={{display:!popup&&'none',width: '15rem'}}>
                    <CreatePopup project={props.title.id} popup={clickPopUp} getValue={Edittask} default={defaultValue} />
                </div> */}


                
                <div style={{display:'flex',justifyContent:'center',textAlign:'center'}}>
                    <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration:1}}><Typography variant="h3" gutterBottom>{props.title.title}</Typography></motion.div>
                    <CloseIcon onClick={ClosePopUp} style={{position:'absolute',right:'10px',top:'8px',cursor:'pointer'}}  />
                </div>

                    <Typography variant="h4" style={{color:'#395B64',opacity:'0.5'}} gutterBottom>Todos</Typography>

                <div style={{display:'flex',flexWrap:'wrap',width:'40rem',gap:'20px',justifyContent:'center',marginTop:'2rem',marginBottom:'1rem'}}>
                    {props.tasks&&props.tasks.map((list,index) => 
                        <Tasks 
                            key={index} 
                            task={list} 
                            page='view' 
                            delete={RemoveTask} 
                            DoubleClickEvent={DoubleClickEvent} 
                            />)}
                </div>

                    <Typography variant="h4" style={{color:'#395B64',opacity:'0.5'}} gutterBottom>Completed</Typography>

                <div style={{display:'flex',flexWrap:'wrap',width:'40rem',gap:'20px',justifyContent:'center',marginTop:'2rem',marginBottom:'1rem'}}>
                    {props.completed&&props.completed.map((list,index) => 
                    <Tasks 
                        key={index} 
                        task={list} 
                        page='view' 
                        delete={RemoveTask} 
                        DoubleClickEvent={DoubleClickEvent} 
                        />)}
                </div>
            </div>
        </div>,document.getElementById('portal')

    )
}

export default ViewPage;