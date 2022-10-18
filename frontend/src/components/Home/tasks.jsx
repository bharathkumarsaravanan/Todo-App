import React from "react";
import { Typography } from "@mui/material";


function Tasks(task){

    return(
        <div className="task">
            <Typography variant="h5" gutterBottom>
                {task.title}
            </Typography>
            <Typography className="taskTitle" variant="body1" gutterBottom>{task.description}</Typography>
        </div>
    )

}

export default Tasks; 