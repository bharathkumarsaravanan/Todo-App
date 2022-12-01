import React from "react";
import  ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import FeatureImages from "../viewRoutes/featureImages";
import CloseIcon from '@mui/icons-material/Close';


function RemoveFeatures(props){
    if(!props.visible) return null
    return ReactDOM.createPortal(
        <div className="newPortal">
            <div className="popup" style={{top:'15rem',left:'50rem', height:'10rem', width:'10rem'}}>
                <CloseIcon 
                    style={{position:'absolute',top:'2px',right:'2px',cursor:'pointer'}} 
                    onClick={() => props.setVisible(false)}/>

            </div>
        </div>, document.getElementById('portal')
    )
}

export default RemoveFeatures;
