import React from "react";
import ReactDOM from "react-dom"
import Alert from '@mui/material/Alert';
import {motion} from "framer-motion"

function ErrorAlert(props){

    if(!props.visible) return null
    return ReactDOM.createPortal(
            <Alert 
                component={motion.div}
                animate={{y:[-50,15,0]}}
                transition={{duration:0.6}}
                variant="filled" 
                severity="error" 
                className="alertPop">
                Empty Inputs — Check the inputs!
            </Alert>, document.getElementById('portal2')
    )
}

function SuccessAlert(props){

    if(!props.visible) return null
    return ReactDOM.createPortal(
            <Alert variant="filled" severity="error" className="alertPop">
                Check the inputs!
            </Alert>, document.getElementById('portal2')
    )
}

export {ErrorAlert, SuccessAlert};