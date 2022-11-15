import React from "react";
import { useState, useCallback } from "react";
import Lists from "./Lists";
import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";


function ViewHome(){ 
    const {id} = useParams();
    return(
        <div className="viewHome">
            <Lists id={id} />
            <div className="verticalLine"></div>
        </div>
    )
}

export default ViewHome;