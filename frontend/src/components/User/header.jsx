import React from "react";
import {Typography} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Header(props){
    return(
        <div className="userHeader">
            <div>

            </div>
            <div>
                <Typography variant="h2">Bharath Kumar S</Typography><br/>
                <Typography variant="h5">Web Developer</Typography>
            </div>
            <div>
                <LinkedInIcon fontSize="large" />
                <EmailIcon fontSize="large" />
            </div>
        </div>
    )
}

export default Header;