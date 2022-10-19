import React from "react";
import { Typography } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function Tasks(task){


    return(
        <div className="task" style={{position:'relative'}}>
            <Typography variant="h5" gutterBottom>
                {task.title}
            </Typography>
            {task.page==='view'&&<DeleteOutlineIcon style={{color:'#395B64', opacity:'0.5', position:'absolute',top:'2px',right:'2px',cursor:'pointer'}} onClick={() => task.delete(task.id,task.status)} />}
            <Typography className="taskTitle" variant="body1" gutterBottom>{task.description}</Typography>
        </div>
    )

}

export default Tasks; 