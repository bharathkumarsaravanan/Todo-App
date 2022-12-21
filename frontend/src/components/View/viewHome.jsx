import React from "react";
import { useState, useCallback } from "react";
import Lists from "./Lists";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";



function ViewHome(){ 
    const {id} = useParams();
    return(
        <div style={{display:'flex', gap:'7rem'}}>
            <Lists id={id} />
            <div className="verticalLine"></div>
            <Outlet />
        </div>
    )
}

export default ViewHome;