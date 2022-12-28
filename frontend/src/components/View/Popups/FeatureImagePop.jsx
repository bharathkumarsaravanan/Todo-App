import React from "react";
import ReactDOM from "react-dom";

function FeaturePop(props){

    console.log(props.id)

    if(!props.visible) return null
    return ReactDOM.createPortal(
        <div className="newPortal" onClick={props.setVisible(false)}>
            ckcskcsj
        </div>,document.getElementById('portal')
    )
}

export default FeaturePop;