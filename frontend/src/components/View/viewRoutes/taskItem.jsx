import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";


function TaskItem(props){

    return(
        <motion.div
            animate={{scale:[0,2,1]}}
            transition={{delay:1, duration:.5}}
            className="ViewTaskItem">
            <Typography variant='h5' style={{fontWeight:'500'}}  gutterBottom>{props.title}</Typography>
            <Typography variant='body1'>{props.description}</Typography>
        </motion.div>
    )
}

export default TaskItem;