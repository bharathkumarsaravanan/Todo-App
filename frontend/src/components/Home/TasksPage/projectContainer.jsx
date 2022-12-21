import React from "react";
import { Typography } from "@mui/material";
import Tasks from "./tasks";
import { useCallback,useState,useEffect } from "react";
import ProjectDet from "./projectDet";

function ProjectContainer(){

    const [projectDet,setProjectDet] = useState();

    const projectFetch = () => {
        return fetch('http://localhost:4000/tudos')
                .then(response => response.json())
                .then((data)=> setProjectDet(data.tudos))
    }

    useEffect(() =>{
        projectFetch();
    },[])

    return(
        <div className="container">
            {projectDet&&projectDet.map((projects,index) => <ProjectDet title={projects.title} key={index} id={projects.id} /> )}
        </div>
    )

}

export default ProjectContainer;