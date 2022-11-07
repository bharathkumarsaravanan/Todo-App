import React from "react";
import { Typography } from "@mui/material";

function PackageList(props){
    return(
        <div style={{textAlign:'left'}}>
            <Typography variant='h3'>{props.name}</Typography>
            <Typography variant='body1'>{props.use}</Typography>
        </div>
    )
}

export default PackageList;