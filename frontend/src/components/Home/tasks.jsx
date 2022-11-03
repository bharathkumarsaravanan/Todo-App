import React from "react";
import { Typography } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {motion} from "framer-motion"


function Tasks(task){

// console.log(task.task.id)
    return(
        <motion.div animate={{scale: [0,1.1,1]}}  transition={{delay: 1.5, duration: 0.6}} >
        <div className="task" style={{position:'relative'}} onDoubleClick={() => task.DoubleClickEvent(task.task)} >
            <Typography variant="h5" gutterBottom>
                {task.task.title}
            </Typography>
            {task.page==='view'&&<DeleteOutlineIcon style={{color:'#395B64', opacity:'0.5', position:'absolute',top:'2px',right:'2px',cursor:'pointer'}} onClick={() => task.delete(task.task.id,task.task.status)} />}
            <Typography className="taskTitle" variant="body1" gutterBottom>{task.task.description}</Typography>
        </div>
        </motion.div>
    )

}

export default Tasks; 