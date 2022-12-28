import React from "react";
import { useState,useEffect } from "react";
import ProjectDet from "./projectDet";
import { motion } from "framer-motion";
import {ThreeDots} from "react-loader-spinner";

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
        <motion.div 
            initial={{x: '-100%'}}
            animate={{x: '0'}}
            transition={{duration:1, delay:.3}}
            exit={{x: window.innerWidth,transition:{duration:.8}}}
        className="container">
            {projectDet?projectDet.map((projects,index) => <ProjectDet title={projects.title} key={index} id={projects.id} /> )
            :<ThreeDots 
                height="80" 
                width="80" 
                radius="9"
                color="#5da7db" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
                />}
        </motion.div>
    )

}

export default ProjectContainer;