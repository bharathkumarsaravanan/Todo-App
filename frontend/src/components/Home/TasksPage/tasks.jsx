import React from "react";
import { Typography } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {motion} from "framer-motion";
import { useEffect, useState } from "react";

function Tasks(task){

    const [desc, setDesc] = useState("Loading...");
    useEffect(() => {
        // console.log(task.task.description)
        if (task.task.description) {
            if (task.task.description.split(' ').length > 10) {
                setDesc(task.task.description.split(' ').slice(0,10).join(' ')+'...')
            } else {
                setDesc(task.task.description)
            }
        }

        
    },[])

    return(
        <motion.div animate={{scale: [0,1.1,1]}}  transition={{delay: 1.5, duration: 0.6}} >
            <div className="task" onDoubleClick={() => task.DoubleClickEvent(task.task)} >
                <Typography variant="h5" gutterBottom>
                    {task.task.title}
                </Typography>
                {task.page==='view'&&<DeleteOutlineIcon 
                                        className="closeIcon"
                                        onClick={() => task.delete(task.task.id,task.task.status)} />}
                <Typography 
                    variant="body1" 
                    gutterBottom>{task.page==='view'?
                        task.task.description
                        :desc }</Typography>
            </div>
        </motion.div>
    )

}

export default Tasks; 