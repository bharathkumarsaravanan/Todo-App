import React from "react";
import { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

function Overview(){

    const [desc,setDesc] = useState('')
    const {id} = useParams();

    const viewFetch = useCallback(() => {
        return fetch('http://localhost:4000/view/'+id)
                .then(response => response.json())
                .then((items) => setDesc(items.Item[0].description))
    })

    viewFetch();
    console.log('overview')

    return(
        <div style={{position:'absolute',top:'15rem',left:'20rem',textAlign:'left'}}>
            <Typography variant="h3">Overview</Typography>
            <Typography variant="body1" gutterBottom className="overviewPara">{desc}</Typography>

        </div>
    )
}

export default Overview;