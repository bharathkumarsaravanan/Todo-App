import React from "react";
import ReactDOM from "react-dom";
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from "@mui/material";

function FeaturePop(props){

    console.log(props.feature);
    if(!props.visible) return null
    return ReactDOM.createPortal(
        <div className="newPortal">
            <CloseIcon 
                className="closeIcon"
                style={{top:'2rem',right:'2rem',color:'white'}} 
                onClick={() => props.setVisible(false)}
                />
            <div className="popup" style={{backgroundColor:'#423F3E', color:'aliceblue'}}>
                    <Typography variant="h2">{props.feature[0].title}</Typography>
                    <img 
                        src={"http://localhost:4000/images/features/"+props.feature[0].imgurl}
                        alt={props.feature[0].title}
                        style={{maxWidth:'30rem'}}
                        />
                    <Typography
                        style={{maxWidth:'30rem'}} 
                        variant="body1">{props.feature[0].description}</Typography>
            </div>
        </div>,document.getElementById('portal')
    )
}

export default FeaturePop;