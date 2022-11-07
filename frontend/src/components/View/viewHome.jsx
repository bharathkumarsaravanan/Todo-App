import React from "react";
import { useState, useCallback } from "react";
import Lists from "./Lists";
import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";


function ViewHome(){ 
    const {id} = useParams();
    return(
        <div>
            <Lists id={id} />
            <div className="verticalLine"></div>
            {/* <Typography variant="h3" className="viewTitle">Online music exploring</Typography> */}
            <Outlet />
        </div>
    )
}

export default ViewHome;