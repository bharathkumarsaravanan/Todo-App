import React from "react";
import Header from "./header";
import ProjectsGroup from "./protectsGroup";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

function UserPage(){
    return(
        <motion.div
            initial={{x: '-100%'}}
            animate={{x: '0'}}
            transition={{duration:1, delay:.3}}
            exit={{x: window.innerWidth,transition:{duration:.8}}}
            className='userPage'>
            <Header />
            <ProjectsGroup />
            <Button 
                variant="contained" 
                size="large"
                onClick={() => window.location.href="/"}>Logout</Button>
        </motion.div>
    )
}

export default UserPage;