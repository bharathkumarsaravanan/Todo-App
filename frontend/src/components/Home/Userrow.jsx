import React from "react";
import { useState,useEffect } from "react";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Cells from "./Cells";

function Userrow(userData){

    const [visible,setVisible] = useState(false)
    const [projects,setProjects] = useState()

    function Showprojects(){
        setVisible(!visible)
    }
     
    const projectFetch = () => {
        return fetch('http://localhost:4000/users/' + userData.columns.id)
                .then(response => response.json())
                .then((data) => setProjects(data.projects))
    }

    useEffect(() =>{
        projectFetch();
    },[])



    return([
        <TableRow onClick={Showprojects} key={userData.id}>
            <TableCell key={userData.id +1}>{userData.columns.id}</TableCell>
            <TableCell key={userData.id +2}>{userData.columns.name}</TableCell>
        </TableRow>,
        <Cells projects={projects} visible={visible} />
    ])
}




export default Userrow;