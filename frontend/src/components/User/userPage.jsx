import React from "react";
import Header from "./header";
import ProjectsGroup from "./protectsGroup";
import { Button } from "@mui/material";

function UserPage(){
    return(
        <div className='userPage'>
            <Header />
            <ProjectsGroup />
            <Button 
                variant="contained" 
                size="large"
                onClick={() => window.location.href="/"}>Logout</Button>
        </div>
    )
}

export default UserPage;