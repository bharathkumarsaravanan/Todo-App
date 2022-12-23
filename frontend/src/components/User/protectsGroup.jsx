import React from "react";
import Tiles from "./projectTiles";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";

function ProjectsGroup(){
    const [projects, setProjects] = useState();

    useEffect(() => {
        fetch('http://localhost:4000/settings/projects')
        .then(response => response.json())
        .then(data => setProjects(data.project))
    },[])

    return(
        <div className="projGroup">
            <Typography variant="h4">Active Projects</Typography>
            <div style={{display:'flex',gap:'6.3rem'}}>
                {projects&&projects.map((data, index) =>  <Tiles 
                                                                key={index} 
                                                                title={data.title}
                                                                img={data.imgurl}
                                                                />)}
            </div>
        </div>
    )
}

export default ProjectsGroup;