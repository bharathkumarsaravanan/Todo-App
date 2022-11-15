import React from "react";

import { Typography } from "@mui/material";


function TaskItem(props){


    return(
        <div className="ViewTaskItem">
            <Typography variant='h5' style={{fontWeight:'500'}}  gutterBottom>{props.title}</Typography>
            <Typography variant='body1'>{props.description}</Typography>
        </div>
    )
}

export default TaskItem;