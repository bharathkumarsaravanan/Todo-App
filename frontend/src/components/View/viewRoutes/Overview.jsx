import React from "react";
import { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import {Button} from "@mui/material";
import EditPopUp from "../Popups/EditProject";
import {motion} from "framer-motion";

function Overview(){

    const [projectDetails,setProjectDetails] = useState();
    const [editPop, setEditPop] = useState(false)
    const {id} = useParams();

    const viewFetch = useCallback(() => {
        return fetch('http://localhost:4000/view/'+id)
                .then(response => response.json())
                .then((items) => setProjectDetails(items.Item[0]))
    });

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
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration:1, delay:.5}}
            exit={{opacity: 0,transition:{duration:.5}}}
            className="viewElement">
            <Typography variant="h3">Overview</Typography>
            <Typography variant="body1" gutterBottom>{projectDetails&&projectDetails.description}</Typography>
            <Button 
                variant='contained' 
                size='small'
                onClick={() => setEditPop(true)} 
                style={{backgroundColor:'#0096FF', position:'absolute',right:'0rem'}}>
                Update
                </Button>
            <EditPopUp visible={editPop} setVisible={setEditPop} defaultId={id} returnValue={editedValue} />
        </motion.div>
    )
}

export default Overview;