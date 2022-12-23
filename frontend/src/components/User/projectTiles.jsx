import React from "react";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
function Tiles(props){

    return(
        <div style={{width:'fit-content', textAlign:'center'}}>
            <img 
                className="projectTile"
                src={"http://localhost:4000/images/features/"+props.img} />
            <Typography variant="h5">{props.title}</Typography>
        </div>
    )

}

export default Tiles;