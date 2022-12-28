import React from "react";
import {Typography} from "@mui/material";
import ProgressReport from "./progressReport";
import TaskProgresses from "./TaskProgresses";
import { motion } from "framer-motion";

function Progress(){

    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration:1}}
            exit={{opacity: 0,transition:{duration:.5}}}>
            <Typography variant="h3" 
                className="progConHeader" 
                style={{marginTop:'3rem'}}>Active days</Typography>
            <ProgressReport />
            <TaskProgresses />
        </motion.div>
    )
}

export default Progress;