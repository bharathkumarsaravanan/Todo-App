import React from "react";
import ProjectBox from "./projBox";
import { useState, useEffect } from "react";
import {useInView} from "react-intersection-observer";


function ProjectProgress(){
    const [projects, setProjects] = useState();
    const {ref, inView} = useInView();


    const projFetch = () => {
        fetch('http://localhost:4000')
        .then(response => response.json())
        .then(data => setProjects(data.tudoItems));
    }
    useEffect(() => {
        projFetch();
    },[])

    return(
        <div className="projprogContainer" ref={ref}>
            <div className="projprogScroll">
                {projects&&
                    projects.map((project, index) => 
                        <ProjectBox 
                            key={index} 
                            delayVal={index} 
                            view={inView} 
                            id={project.id} 
                            name={project.title} />)
                            }    
            </div>
        </div>
    )
}

export default ProjectProgress;