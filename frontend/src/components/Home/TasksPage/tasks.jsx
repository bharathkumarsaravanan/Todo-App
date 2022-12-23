import React from "react";
import { Typography } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {motion} from "framer-motion"


function Tasks(task){

    return(
        <motion.div animate={{scale: [0,1.1,1]}}  transition={{delay: 1.5, duration: 0.6}} >
            <div className="task" onDoubleClick={() => task.DoubleClickEvent(task.task)} >
                <Typography variant="h5" gutterBottom>
                    {task.task.title}
                </Typography>
                {task.page==='view'&&<DeleteOutlineIcon 
                                        className="closeIcon"
                                        onClick={() => task.delete(task.task.id,task.task.status)} />}
                <Typography variant="body1" gutterBottom>{task.task.description}</Typography>
            </div>
        </motion.div>
    )

}

export default Tasks; 