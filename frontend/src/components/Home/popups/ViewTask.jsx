import React from "react";
import { Typography } from "@mui/material";
import Tasks from "../tasks";
import CloseIcon from '@mui/icons-material/Close';
import { useState,useEffect,useCallback } from "react";
 
function ViewPage(props){

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

    function ClosePopUp(){
            console.log('clicked')
            props.closeBtn();
        }

    function RemoveTask(id,status){

        DeleteFetch({id: id});
        props.remove(id,status);
    }

    return(
        <div className="popup" style={{display:'inline',right:'30rem',textAlign:'center'}}>
            <div style={{display:'flex',justifyContent:'center',textAlign:'center'}}>
            <Typography variant="h3" gutterBottom>{props.title}</Typography>
            <CloseIcon onClick={ClosePopUp} style={{position:'absolute',right:'10px',top:'8px',cursor:'pointer'}}  />
            </div>
                <Typography variant="h4" style={{color:'#395B64',opacity:'0.5'}} gutterBottom>Todos</Typography>
            <div style={{display:'flex',flexWrap:'wrap',width:'40rem',gap:'20px',justifyContent:'center',marginTop:'2rem',marginBottom:'1rem'}}>
                {props.tasks&&props.tasks.map((list,index) => <Tasks key={index} id={list.id} title={list.title} description={list.description} page='view' delete={RemoveTask} />)}
            </div>
                <Typography variant="h4" style={{color:'#395B64',opacity:'0.5'}} gutterBottom>Completed</Typography>
            <div style={{display:'flex',flexWrap:'wrap',width:'40rem',gap:'20px',justifyContent:'center',marginTop:'2rem',marginBottom:'1rem'}}>
                {props.completed&&props.completed.map((list,index) => <Tasks key={index} id={list.id} title={list.title} description={list.description} page='view' delete={RemoveTask} />)}
            </div>
        </div>

    )
}

export default ViewPage;