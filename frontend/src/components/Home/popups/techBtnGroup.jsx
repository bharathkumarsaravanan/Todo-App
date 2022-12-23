import React from "react";
import ReactDOM from "react-dom"
import TechButtons from "./techBtn";
import { Typography } from "@mui/material";

function TechButtonGroup(props){
    if(!props.visible) return null
    return ReactDOM.createPortal(
        <div className="newPortal">
            <div className='popup'>
                <CloseIcon className="closeIcon"  onClick={() => props.setVisible(false)} />
                <Typography variant="h6" style={{opacity:'0.3'}}>Packages</Typography>
                {props.tech&&props.tech.map((tech) => <TechButtons tech={tech} add={props.addPackages} remove={props.removePackages}/>)}
            </div>
        </div>, document.getElementById('portal3')
    )
}

export default TechButtonGroup;