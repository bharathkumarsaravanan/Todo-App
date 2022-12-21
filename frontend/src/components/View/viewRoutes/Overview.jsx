import React from "react";
import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import {Button} from "@mui/material";
import EditPopUp from "../Popups/EditProject";

function Overview(){

    const [projectDetails,setProjectDetails] = useState();
    const [state, setState] = useState(true)
    const [editPop, setEditPop] = useState(false)
    const {id} = useParams();

    const viewFetch = useCallback(() => {
        return fetch('http://localhost:4000/view/'+id)
                .then(response => response.json())
                .then((items) => setProjectDetails(items.Item[0]))
    })
    const editFetch = useCallback((newVal) => {
        fetch('http://localhost:4000/view/'+id+'/update',{
            method:'POST',
            body: JSON.stringify(newVal),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        })
        .then(response => response.json())
        .then(data => console.log(data))
    })
    if(!projectDetails){
        viewFetch();
    }
    function editedValue(newValue){
        editFetch(newValue)
    }

    return(
        <div style={{textAlign:'left', width:'20rem', marginLeft:'10rem', marginTop:'5rem'}}>
            <Typography variant="h3">Overview</Typography>
            <Typography variant="body1" gutterBottom className="overviewPara">{projectDetails&&projectDetails.description}</Typography>
            <Button 
                variant='contained' 
                size='small'
                onClick={() => setEditPop(true)} 
                style={{backgroundColor:'#0096FF', position:'absolute',left:'50rem'}}>
                Update
                </Button>
            <EditPopUp visible={editPop} setVisible={setEditPop} defaultId={id} returnValue={editedValue} />
        </div>
    )
}

export default Overview;