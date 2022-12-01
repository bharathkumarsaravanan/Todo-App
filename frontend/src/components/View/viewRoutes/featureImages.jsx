import React from "react";
import {Typography} from "@mui/material"

function FeatureImages(props){
    return(
        <div>
            <Typography variant="h4">{props.title}</Typography>
            <img src={"http://localhost:4000/images/features/"+props.imgurl} className='featureImages' />
        </div>
    )
}

export default FeatureImages;