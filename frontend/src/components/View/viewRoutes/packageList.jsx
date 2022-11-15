import React from "react";
import { Typography } from "@mui/material";

function PackageList(props){
    return(
        <div style={{textAlign:'left'}}>
            <Typography variant='h3' style={{color:'#4e5055'}}>{props.name}</Typography><br />
            <Typography variant='body1'>{props.use}</Typography><br /> <br /> <br />
        </div>
    )
}

export default PackageList;