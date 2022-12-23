import React from "react";
import { Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function NotFound(){
    return(
        <div className="notFound">
            <div>
                <SentimentVeryDissatisfiedIcon fontSize="large" />
                <Typography variant="h1">Page not found</Typography>
            </div>
        </div>
    )
}

export default NotFound;