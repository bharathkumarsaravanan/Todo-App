import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Typography} from "@mui/material";
import ProgressReport from "./progressReport";
import TaskProgresses from "./TaskProgresses"
function Progress(){
  

    return(
     <div>

        <div>
            <Typography variant="h3" className="progConHeader" style={{marginTop:'3rem'}}>Active days</Typography>
            <ProgressReport />
            <TaskProgresses />
        </div>


     </div>
    )
}

export default Progress;