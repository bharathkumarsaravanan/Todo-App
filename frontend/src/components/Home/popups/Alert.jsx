import React from "react";
import ReactDOM from 'react-dom'
import { Alert } from "@mui/material";
import { motion } from "framer-motion";

function AlertPopup(props){

    if(!props.visible) return null
    return ReactDOM.createPortal(
        <Alert 
            component={motion.div}
            animate={{y: [-50,20,0]}}
            variant={props.variant} 
            severity={props.severity} 
            className='newPortal' 
            style={{height:'2.3rem',width:'20rem',left:'35rem'}}>
            {props.message}
        </Alert>, document.getElementById('portal2')
    )
}

export default AlertPopup;