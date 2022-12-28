import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

function Container(props){

    var today = new Date();
    var date = ("0" + today.getDate()).slice(-2);
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var year = today.getFullYear();
    var day = year + '-' + month+ '-' + date

    return(
        <motion.div 
            animate={{x:['-50vw','0vw'], opacity:[0,1]}}
            transition={{duration: 1, type: 'spring', bounce: .5, delay:1}}
            className="progressElements"
            >
            <Typography 
                component={motion.div}
                animate={{ opacity:[0,1]}}
                transition={{duration: 1, type: 'spring', bounce: .5, delay:1}}
                variant="h3" 
                className="progConHeader">Today progress</Typography>
            <div className="progressContainer">
                <div style={{left:'5rem'}}>
                    <Typography variant="h4">Total pending</Typography><br/>
                    <Typography variant="h4" style={{color:'rgba(93, 167, 219, 1)',fontWeight:'bold'}}>
                        {props.total?props.total[0].total:0}</Typography>
                </div>
                <div style={{left:'20rem'}}>
                    <Typography variant="h4">Completed Today</Typography><br/>
                    <Typography variant="h4" style={{color:'rgba(93, 167, 219, 1)',fontWeight:'bold'}}>
                        {props.completed&&props.completed}</Typography>
                </div>
                <div style={{left:'35rem'}}>
                    <Typography variant="h4">New Tasks</Typography><br/>
                    <Typography variant="h4" style={{color:'rgba(93, 167, 219, 1)',fontWeight:'bold'}}>
                        {props.new&&props.new}</Typography>
                </div>
                <div className="dateContainer">
                    <Typography style={{color:'rgba(93, 167, 219, 1)', fontWeight:'700'}}>{day}</Typography> 
                </div>
            </div>
        </motion.div>
    )
}
export default Container;